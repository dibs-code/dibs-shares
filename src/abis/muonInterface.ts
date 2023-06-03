export default [
  {
    inputs: [],
    name: 'InvalidGateway',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidSignature',
    type: 'error',
  },
  {
    inputs: [],
    name: 'OnlyUser',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'Claimed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint8',
        name: 'version',
        type: 'uint8',
      },
    ],
    name: 'Initialized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bytes',
        name: 'reqId',
        type: 'bytes',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'x',
            type: 'uint256',
          },
          {
            internalType: 'uint8',
            name: 'parity',
            type: 'uint8',
          },
        ],
        indexed: false,
        internalType: 'struct MuonClientBase.PublicKey',
        name: 'pubKey',
        type: 'tuple',
      },
    ],
    name: 'MuonTX',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'previousAdminRole',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'newAdminRole',
        type: 'bytes32',
      },
    ],
    name: 'RoleAdminChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'RoleGranted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'RoleRevoked',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint32',
        name: 'round',
        type: 'uint32',
      },
      {
        indexed: false,
        internalType: 'address[]',
        name: 'winners',
        type: 'address[]',
      },
    ],
    name: 'RoundWinnerSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: '_old',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: '_new',
        type: 'address',
      },
    ],
    name: 'SetDibs',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: '_old',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_new',
        type: 'uint256',
      },
    ],
    name: 'SetMuonAppId',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'x',
            type: 'uint256',
          },
          {
            internalType: 'uint8',
            name: 'parity',
            type: 'uint8',
          },
        ],
        indexed: false,
        internalType: 'struct MuonClientBase.PublicKey',
        name: '_old',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'x',
            type: 'uint256',
          },
          {
            internalType: 'uint8',
            name: 'parity',
            type: 'uint8',
          },
        ],
        indexed: false,
        internalType: 'struct MuonClientBase.PublicKey',
        name: '_new',
        type: 'tuple',
      },
    ],
    name: 'SetMuonPublicKey',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: '_old',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: '_new',
        type: 'address',
      },
    ],
    name: 'SetValidGateway',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'day',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address[]',
        name: 'topReferrers',
        type: 'address[]',
      },
    ],
    name: 'TopReferrersSet',
    type: 'event',
  },
  {
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'HALF_Q',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'PROJECT_ID',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'Q',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'SETTER',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_muonAppId',
        type: 'uint256',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'x',
            type: 'uint256',
          },
          {
            internalType: 'uint8',
            name: 'parity',
            type: 'uint8',
          },
        ],
        internalType: 'struct MuonClientBase.PublicKey',
        name: '_muonPublicKey',
        type: 'tuple',
      },
    ],
    name: '__MuonClient_init',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'admin_',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'setter_',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'dibs_',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'validGateway_',
        type: 'address',
      },
    ],
    name: '__MuonInterface_init',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'accumulativeBalance',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'reqId',
        type: 'bytes',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'signature',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'nonce',
            type: 'address',
          },
        ],
        internalType: 'struct MuonClientBase.SchnorrSign',
        name: 'sign',
        type: 'tuple',
      },
      {
        internalType: 'bytes',
        name: 'gatewaySignature',
        type: 'bytes',
      },
    ],
    name: 'claim',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'accumulativeBalance',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'reqId',
        type: 'bytes',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'signature',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'nonce',
            type: 'address',
          },
        ],
        internalType: 'struct MuonClientBase.SchnorrSign',
        name: 'sign',
        type: 'tuple',
      },
      {
        internalType: 'bytes',
        name: 'gatewaySignature',
        type: 'bytes',
      },
    ],
    name: 'claimDibsFee',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'dibs',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
    ],
    name: 'getRoleAdmin',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'hasRole',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'admin_',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'setter_',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'dibs_',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'validGateway_',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'muonAppId_',
        type: 'uint256',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'x',
            type: 'uint256',
          },
          {
            internalType: 'uint8',
            name: 'parity',
            type: 'uint8',
          },
        ],
        internalType: 'struct MuonClientBase.PublicKey',
        name: 'muonPublicKey_',
        type: 'tuple',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'muonAppId',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'muonPublicKey',
    outputs: [
      {
        internalType: 'uint256',
        name: 'x',
        type: 'uint256',
      },
      {
        internalType: 'uint8',
        name: 'parity',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'reqId',
        type: 'bytes',
      },
      {
        internalType: 'uint256',
        name: 'hash',
        type: 'uint256',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'signature',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'nonce',
            type: 'address',
          },
        ],
        internalType: 'struct MuonClientBase.SchnorrSign',
        name: 'signature',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'x',
            type: 'uint256',
          },
          {
            internalType: 'uint8',
            name: 'parity',
            type: 'uint8',
          },
        ],
        internalType: 'struct MuonClientBase.PublicKey',
        name: 'pubKey',
        type: 'tuple',
      },
    ],
    name: 'muonVerify',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'dibs_',
        type: 'address',
      },
    ],
    name: 'setDibs',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'muonAppId_',
        type: 'uint256',
      },
    ],
    name: 'setMuonAppId',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'x',
            type: 'uint256',
          },
          {
            internalType: 'uint8',
            name: 'parity',
            type: 'uint8',
          },
        ],
        internalType: 'struct MuonClientBase.PublicKey',
        name: 'muonPublicKey_',
        type: 'tuple',
      },
    ],
    name: 'setMuonPublicKey',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: 'round',
        type: 'uint32',
      },
      {
        internalType: 'address[]',
        name: 'winners',
        type: 'address[]',
      },
      {
        internalType: 'bytes',
        name: 'reqId',
        type: 'bytes',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'signature',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'nonce',
            type: 'address',
          },
        ],
        internalType: 'struct MuonClientBase.SchnorrSign',
        name: 'sign',
        type: 'tuple',
      },
      {
        internalType: 'bytes',
        name: 'gatewaySignature',
        type: 'bytes',
      },
    ],
    name: 'setRoundWinners',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: 'day',
        type: 'uint32',
      },
      {
        internalType: 'address[]',
        name: 'topReferrers',
        type: 'address[]',
      },
      {
        internalType: 'bytes',
        name: 'reqId',
        type: 'bytes',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'signature',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'nonce',
            type: 'address',
          },
        ],
        internalType: 'struct MuonClientBase.SchnorrSign',
        name: 'sign',
        type: 'tuple',
      },
      {
        internalType: 'bytes',
        name: 'gatewaySignature',
        type: 'bytes',
      },
    ],
    name: 'setTopReferrers',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'validGateway_',
        type: 'address',
      },
    ],
    name: 'setValidGateway',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'validGateway',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: 'reqId',
        type: 'bytes',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'signature',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'nonce',
            type: 'address',
          },
        ],
        internalType: 'struct MuonClientBase.SchnorrSign',
        name: 'sign',
        type: 'tuple',
      },
      {
        internalType: 'bytes',
        name: 'gatewaySignature',
        type: 'bytes',
      },
    ],
    name: 'verifyTSSAndGW',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;
