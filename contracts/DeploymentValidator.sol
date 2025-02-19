// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.1;

import "./libraries/Authorizable.sol";
import "./interfaces/IDeploymentValidator.sol";

contract DeploymentValidator is IDeploymentValidator, Authorizable {
    // a mapping of wrapped position contracts deployed by Element
    mapping(address => bool) public wrappedPositions;
    // a mapping of pool contracts deployed by Element
    mapping(address => bool) public pools;
    // a mapping of wrapped position + pool pairs that are deployed by Element
    // we keccak256 hash these tuples together to serve as the mapping keys
    mapping(bytes32 => bool) public pairs;

    /// @notice Constructs this contract and stores needed data
    /// @param _owner The contract owner authorized to validate addresses
    constructor(address _owner) {
        // authorize the owner address to be able to execute the validations
        _authorize(_owner);
    }

    /// @notice adds a wrapped position address to the mapping
    /// @param wrappedPosition The wrapped position contract address
    function validateWPAddress(
        address wrappedPosition
    ) public override onlyAuthorized {
        // add address to mapping to indicating it was deployed by Element
        wrappedPositions[wrappedPosition] = true;
    }

    /// @notice adds a wrapped position address to the mapping
    /// @param pool the pool contract address
    function validatePoolAddress(address pool) public override onlyAuthorized {
        // add address to mapping to indicating it was deployed by Element
        pools[pool] = true;
    }

    /// @notice adds a wrapped position + pool pair of addresses to mapping
    /// @param wrappedPosition the wrapped position contract address
    /// @param pool the pool contract address
    function validateAddresses(
        address wrappedPosition,
        address pool
    ) external override onlyAuthorized {
        // add to pool validation mapping
        validatePoolAddress(pool);
        // add to wp validation mapping
        validateWPAddress(wrappedPosition);
        // hash together the contract addresses
        bytes32 data = keccak256(abi.encodePacked(wrappedPosition, pool));
        // add the hashed pair into the mapping
        pairs[data] = true;
    }

    /// @notice checks to see if the address has been validated
    /// @param wrappedPosition the address to check
    /// @return true if validated, false if not
    function checkWPValidation(
        address wrappedPosition
    ) external view override returns (bool) {
        return wrappedPositions[wrappedPosition];
    }

    /// @notice checks to see if the address has been validated
    /// @param pool the address to check
    /// @return true if validated, false if not
    function checkPoolValidation(
        address pool
    ) external view override returns (bool) {
        return pools[pool];
    }

    /// @notice checks to see if the pair of addresses have been validated
    /// @param wrappedPosition the wrapped position address to check
    /// @param pool the pool address to check
    /// @return true if validated, false if not
    function checkPairValidation(
        address wrappedPosition,
        address pool
    ) external view override returns (bool) {
        bytes32 data = keccak256(abi.encodePacked(wrappedPosition, pool));
        return pairs[data];
    }
}
