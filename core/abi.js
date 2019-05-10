module.exports = [
    {
        constant: false,
        inputs: [
            {
                name: 'newTakerFeeRate',
                type: 'uint256',
            },
        ],
        name: 'setTakerFeeRate',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'newExchange',
        outputs: [
            {
                name: '',
                type: 'address',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            {
                name: 'partialAmount',
                type: 'uint256',
            },
            {
                components: [
                    {
                        name: 'makerSellAmount',
                        type: 'uint256',
                    },
                    {
                        name: 'makerBuyAmount',
                        type: 'uint256',
                    },
                    {
                        name: 'takerSellAmount',
                        type: 'uint256',
                    },
                    {
                        name: 'salt',
                        type: 'uint256',
                    },
                    {
                        name: 'expiration',
                        type: 'uint256',
                    },
                    {
                        name: 'taker',
                        type: 'address',
                    },
                    {
                        name: 'maker',
                        type: 'address',
                    },
                    {
                        name: 'makerSellToken',
                        type: 'address',
                    },
                    {
                        name: 'makerBuyToken',
                        type: 'address',
                    },
                ],
                name: 'order',
                type: 'tuple',
            },
        ],
        name: 'getOrderInfo',
        outputs: [
            {
                components: [
                    {
                        name: 'filledAmount',
                        type: 'uint256',
                    },
                    {
                        name: 'hash',
                        type: 'bytes32',
                    },
                    {
                        name: 'status',
                        type: 'uint8',
                    },
                ],
                name: 'orderInfo',
                type: 'tuple',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            {
                name: '',
                type: 'address',
            },
            {
                name: '',
                type: 'address',
            },
        ],
        name: 'contributions',
        outputs: [
            {
                name: '',
                type: 'uint256',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                components: [
                    {
                        name: 'makerSellAmount',
                        type: 'uint256',
                    },
                    {
                        name: 'makerBuyAmount',
                        type: 'uint256',
                    },
                    {
                        name: 'takerSellAmount',
                        type: 'uint256',
                    },
                    {
                        name: 'salt',
                        type: 'uint256',
                    },
                    {
                        name: 'expiration',
                        type: 'uint256',
                    },
                    {
                        name: 'taker',
                        type: 'address',
                    },
                    {
                        name: 'maker',
                        type: 'address',
                    },
                    {
                        name: 'makerSellToken',
                        type: 'address',
                    },
                    {
                        name: 'makerBuyToken',
                        type: 'address',
                    },
                ],
                name: 'order',
                type: 'tuple',
            },
            {
                name: 'signature',
                type: 'bytes',
            },
        ],
        name: 'cancelSingleOrder',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                name: 'newMakerFeeRate',
                type: 'uint256',
            },
        ],
        name: 'setMakerFeeRate',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                components: [
                    {
                        name: 'makerSellAmount',
                        type: 'uint256',
                    },
                    {
                        name: 'makerBuyAmount',
                        type: 'uint256',
                    },
                    {
                        name: 'takerSellAmount',
                        type: 'uint256',
                    },
                    {
                        name: 'salt',
                        type: 'uint256',
                    },
                    {
                        name: 'expiration',
                        type: 'uint256',
                    },
                    {
                        name: 'taker',
                        type: 'address',
                    },
                    {
                        name: 'maker',
                        type: 'address',
                    },
                    {
                        name: 'makerSellToken',
                        type: 'address',
                    },
                    {
                        name: 'makerBuyToken',
                        type: 'address',
                    },
                ],
                name: 'orders',
                type: 'tuple[]',
            },
            {
                name: 'signatures',
                type: 'bytes[]',
            },
        ],
        name: 'cancelMultipleOrders',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            {
                name: 'user',
                type: 'address',
            },
        ],
        name: 'getReferral',
        outputs: [
            {
                name: '',
                type: 'address',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            {
                components: [
                    {
                        name: 'makerSellAmount',
                        type: 'uint256',
                    },
                    {
                        name: 'makerBuyAmount',
                        type: 'uint256',
                    },
                    {
                        name: 'takerSellAmount',
                        type: 'uint256',
                    },
                    {
                        name: 'salt',
                        type: 'uint256',
                    },
                    {
                        name: 'expiration',
                        type: 'uint256',
                    },
                    {
                        name: 'taker',
                        type: 'address',
                    },
                    {
                        name: 'maker',
                        type: 'address',
                    },
                    {
                        name: 'makerSellToken',
                        type: 'address',
                    },
                    {
                        name: 'makerBuyToken',
                        type: 'address',
                    },
                ],
                name: 'order',
                type: 'tuple',
            },
        ],
        name: 'getHash',
        outputs: [
            {
                name: '',
                type: 'bytes32',
            },
        ],
        payable: false,
        stateMutability: 'pure',
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'takerFeeRate',
        outputs: [
            {
                name: '',
                type: 'uint256',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            {
                name: 'user',
                type: 'address',
            },
            {
                name: 'token',
                type: 'address[]',
            },
        ],
        name: 'getBalances',
        outputs: [
            {
                name: 'balanceArray',
                type: 'uint256[]',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                components: [
                    {
                        name: 'makerSellAmount',
                        type: 'uint256',
                    },
                    {
                        name: 'makerBuyAmount',
                        type: 'uint256',
                    },
                    {
                        name: 'takerSellAmount',
                        type: 'uint256',
                    },
                    {
                        name: 'salt',
                        type: 'uint256',
                    },
                    {
                        name: 'expiration',
                        type: 'uint256',
                    },
                    {
                        name: 'taker',
                        type: 'address',
                    },
                    {
                        name: 'maker',
                        type: 'address',
                    },
                    {
                        name: 'makerSellToken',
                        type: 'address',
                    },
                    {
                        name: 'makerBuyToken',
                        type: 'address',
                    },
                ],
                name: 'order',
                type: 'tuple',
            },
            {
                name: 'signature',
                type: 'bytes',
            },
        ],
        name: 'trade',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'makerFeeRate',
        outputs: [
            {
                name: '',
                type: 'uint256',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            {
                name: 'orderHash',
                type: 'bytes32[]',
            },
        ],
        name: 'getFills',
        outputs: [
            {
                name: 'filledArray',
                type: 'uint256[]',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                name: 'token',
                type: 'address',
            },
        ],
        name: 'burnTokensWhenFinished',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                name: 'token',
                type: 'address',
            },
            {
                name: 'amount',
                type: 'uint256',
            },
            {
                name: 'user',
                type: 'address',
            },
        ],
        name: 'importTokens',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'owner',
        outputs: [
            {
                name: '',
                type: 'address',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'isOwner',
        outputs: [
            {
                name: '',
                type: 'bool',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            {
                name: 'orderHash',
                type: 'bytes32[]',
            },
        ],
        name: 'getCancels',
        outputs: [
            {
                name: 'cancelledArray',
                type: 'bool[]',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                name: 'exchange',
                type: 'address',
            },
        ],
        name: 'setNewExchangeAddress',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            {
                name: 'orderHash',
                type: 'bytes32',
            },
        ],
        name: 'getFill',
        outputs: [
            {
                name: '',
                type: 'uint256',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            {
                components: [
                    {
                        name: 'makerSellAmount',
                        type: 'uint256',
                    },
                    {
                        name: 'makerBuyAmount',
                        type: 'uint256',
                    },
                    {
                        name: 'takerSellAmount',
                        type: 'uint256',
                    },
                    {
                        name: 'salt',
                        type: 'uint256',
                    },
                    {
                        name: 'expiration',
                        type: 'uint256',
                    },
                    {
                        name: 'taker',
                        type: 'address',
                    },
                    {
                        name: 'maker',
                        type: 'address',
                    },
                    {
                        name: 'makerSellToken',
                        type: 'address',
                    },
                    {
                        name: 'makerBuyToken',
                        type: 'address',
                    },
                ],
                name: 'order',
                type: 'tuple',
            },
        ],
        name: 'getPrefixedHash',
        outputs: [
            {
                name: '',
                type: 'bytes32',
            },
        ],
        payable: false,
        stateMutability: 'pure',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                name: 'user',
                type: 'address',
            },
        ],
        name: 'importEthers',
        outputs: [],
        payable: true,
        stateMutability: 'payable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [],
        name: 'allowOrRestrictMigrations',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            {
                name: 'orderHash',
                type: 'bytes32',
            },
        ],
        name: 'getCancel',
        outputs: [
            {
                name: '',
                type: 'bool',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                components: [
                    {
                        name: 'makerSellAmount',
                        type: 'uint256',
                    },
                    {
                        name: 'makerBuyAmount',
                        type: 'uint256',
                    },
                    {
                        name: 'takerSellAmount',
                        type: 'uint256',
                    },
                    {
                        name: 'salt',
                        type: 'uint256',
                    },
                    {
                        name: 'expiration',
                        type: 'uint256',
                    },
                    {
                        name: 'taker',
                        type: 'address',
                    },
                    {
                        name: 'maker',
                        type: 'address',
                    },
                    {
                        name: 'makerSellToken',
                        type: 'address',
                    },
                    {
                        name: 'makerBuyToken',
                        type: 'address',
                    },
                ],
                name: 'orders',
                type: 'tuple[]',
            },
            {
                name: 'signatures',
                type: 'bytes[]',
            },
            {
                name: 'method',
                type: 'string',
            },
        ],
        name: 'takeAllOrRevert',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                name: 'tokens',
                type: 'address[]',
            },
        ],
        name: 'migrateFunds',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                name: 'token',
                type: 'address',
            },
            {
                name: 'to',
                type: 'address',
            },
            {
                name: 'amount',
                type: 'uint256',
            },
        ],
        name: 'transfer',
        outputs: [],
        payable: true,
        stateMutability: 'payable',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            {
                name: 'weiAmount',
                type: 'uint256',
            },
            {
                components: [
                    {
                        name: 'startBlock',
                        type: 'uint256',
                    },
                    {
                        name: 'endBlock',
                        type: 'uint256',
                    },
                    {
                        name: 'hardCap',
                        type: 'uint256',
                    },
                    {
                        name: 'leftAmount',
                        type: 'uint256',
                    },
                    {
                        name: 'tokenRatio',
                        type: 'uint256',
                    },
                    {
                        name: 'minContribution',
                        type: 'uint256',
                    },
                    {
                        name: 'maxContribution',
                        type: 'uint256',
                    },
                    {
                        name: 'weiRaised',
                        type: 'uint256',
                    },
                    {
                        name: 'wallet',
                        type: 'address',
                    },
                ],
                name: 'crowdsale',
                type: 'tuple',
            },
            {
                name: 'user',
                type: 'address',
            },
            {
                name: 'token',
                type: 'address',
            },
        ],
        name: 'validContribution',
        outputs: [
            {
                name: '',
                type: 'uint8',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                name: 'token',
                type: 'address',
            },
            {
                name: 'amount',
                type: 'uint256',
            },
            {
                name: 'beneficiary',
                type: 'address',
            },
            {
                name: 'referral',
                type: 'address',
            },
        ],
        name: 'deposit',
        outputs: [],
        payable: true,
        stateMutability: 'payable',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            {
                name: 'user',
                type: 'address',
            },
            {
                name: 'token',
                type: 'address',
            },
        ],
        name: 'getBalance',
        outputs: [
            {
                name: '',
                type: 'uint256',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            {
                name: '',
                type: 'address',
            },
        ],
        name: 'crowdsales',
        outputs: [
            {
                name: 'startBlock',
                type: 'uint256',
            },
            {
                name: 'endBlock',
                type: 'uint256',
            },
            {
                name: 'hardCap',
                type: 'uint256',
            },
            {
                name: 'leftAmount',
                type: 'uint256',
            },
            {
                name: 'tokenRatio',
                type: 'uint256',
            },
            {
                name: 'minContribution',
                type: 'uint256',
            },
            {
                name: 'maxContribution',
                type: 'uint256',
            },
            {
                name: 'weiRaised',
                type: 'uint256',
            },
            {
                name: 'wallet',
                type: 'address',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                components: [
                    {
                        name: 'makerSellAmount',
                        type: 'uint256',
                    },
                    {
                        name: 'makerBuyAmount',
                        type: 'uint256',
                    },
                    {
                        name: 'takerSellAmount',
                        type: 'uint256',
                    },
                    {
                        name: 'salt',
                        type: 'uint256',
                    },
                    {
                        name: 'expiration',
                        type: 'uint256',
                    },
                    {
                        name: 'taker',
                        type: 'address',
                    },
                    {
                        name: 'maker',
                        type: 'address',
                    },
                    {
                        name: 'makerSellToken',
                        type: 'address',
                    },
                    {
                        name: 'makerBuyToken',
                        type: 'address',
                    },
                ],
                name: 'orders',
                type: 'tuple[]',
            },
            {
                name: 'signatures',
                type: 'bytes[]',
            },
            {
                name: 'method',
                type: 'string',
            },
        ],
        name: 'takeAllPossible',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                name: 'token',
                type: 'address',
            },
        ],
        name: 'buyTokens',
        outputs: [],
        payable: true,
        stateMutability: 'payable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                name: 'methodId',
                type: 'bytes32',
            },
            {
                name: 'allowed',
                type: 'bool',
            },
        ],
        name: 'allowOrRestrictMethod',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                name: 'newOwner',
                type: 'address',
            },
        ],
        name: 'transferOwnership',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                name: 'token',
                type: 'address',
            },
            {
                name: 'amount',
                type: 'uint256',
            },
        ],
        name: 'withdraw',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'migrationAllowed',
        outputs: [
            {
                name: '',
                type: 'bool',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'VERSION',
        outputs: [
            {
                name: '',
                type: 'uint8',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                components: [
                    {
                        name: 'startBlock',
                        type: 'uint256',
                    },
                    {
                        name: 'endBlock',
                        type: 'uint256',
                    },
                    {
                        name: 'hardCap',
                        type: 'uint256',
                    },
                    {
                        name: 'leftAmount',
                        type: 'uint256',
                    },
                    {
                        name: 'tokenRatio',
                        type: 'uint256',
                    },
                    {
                        name: 'minContribution',
                        type: 'uint256',
                    },
                    {
                        name: 'maxContribution',
                        type: 'uint256',
                    },
                    {
                        name: 'weiRaised',
                        type: 'uint256',
                    },
                    {
                        name: 'wallet',
                        type: 'address',
                    },
                ],
                name: 'crowdsale',
                type: 'tuple',
            },
            {
                name: 'token',
                type: 'address',
            },
        ],
        name: 'registerCrowdsale',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            {
                components: [
                    {
                        name: 'startBlock',
                        type: 'uint256',
                    },
                    {
                        name: 'endBlock',
                        type: 'uint256',
                    },
                    {
                        name: 'hardCap',
                        type: 'uint256',
                    },
                    {
                        name: 'leftAmount',
                        type: 'uint256',
                    },
                    {
                        name: 'tokenRatio',
                        type: 'uint256',
                    },
                    {
                        name: 'minContribution',
                        type: 'uint256',
                    },
                    {
                        name: 'maxContribution',
                        type: 'uint256',
                    },
                    {
                        name: 'weiRaised',
                        type: 'uint256',
                    },
                    {
                        name: 'wallet',
                        type: 'address',
                    },
                ],
                name: 'crowdsale',
                type: 'tuple',
            },
        ],
        name: 'getCrowdsaleStatus',
        outputs: [
            {
                name: '',
                type: 'uint8',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        payable: true,
        stateMutability: 'payable',
        type: 'fallback',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'token',
                type: 'address',
            },
            {
                indexed: true,
                name: 'user',
                type: 'address',
            },
            {
                indexed: false,
                name: 'tokenAmount',
                type: 'uint256',
            },
            {
                indexed: false,
                name: 'weiAmount',
                type: 'uint256',
            },
        ],
        name: 'TokenPurchase',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'token',
                type: 'address',
            },
            {
                indexed: false,
                name: 'tokenAmount',
                type: 'uint256',
            },
        ],
        name: 'TokenBurned',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'user',
                type: 'address',
            },
            {
                indexed: true,
                name: 'newExchange',
                type: 'address',
            },
        ],
        name: 'FundsMigrated',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'token',
                type: 'address',
            },
            {
                indexed: true,
                name: 'user',
                type: 'address',
            },
            {
                indexed: true,
                name: 'referral',
                type: 'address',
            },
            {
                indexed: false,
                name: 'beneficiary',
                type: 'address',
            },
            {
                indexed: false,
                name: 'amount',
                type: 'uint256',
            },
            {
                indexed: false,
                name: 'balance',
                type: 'uint256',
            },
        ],
        name: 'Deposit',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'token',
                type: 'address',
            },
            {
                indexed: true,
                name: 'user',
                type: 'address',
            },
            {
                indexed: false,
                name: 'amount',
                type: 'uint256',
            },
            {
                indexed: false,
                name: 'balance',
                type: 'uint256',
            },
        ],
        name: 'Withdraw',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'token',
                type: 'address',
            },
            {
                indexed: true,
                name: 'user',
                type: 'address',
            },
            {
                indexed: true,
                name: 'beneficiary',
                type: 'address',
            },
            {
                indexed: false,
                name: 'amount',
                type: 'uint256',
            },
            {
                indexed: false,
                name: 'userBalance',
                type: 'uint256',
            },
            {
                indexed: false,
                name: 'beneficiaryBalance',
                type: 'uint256',
            },
        ],
        name: 'Transfer',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'makerAddress',
                type: 'address',
            },
            {
                indexed: true,
                name: 'takerAddress',
                type: 'address',
            },
            {
                indexed: true,
                name: 'orderHash',
                type: 'bytes32',
            },
            {
                indexed: false,
                name: 'makerFilledAmount',
                type: 'uint256',
            },
            {
                indexed: false,
                name: 'takerFilledAmount',
                type: 'uint256',
            },
            {
                indexed: false,
                name: 'takerFeePaid',
                type: 'uint256',
            },
            {
                indexed: false,
                name: 'makerFeeReceived',
                type: 'uint256',
            },
            {
                indexed: false,
                name: 'referralFeeReceived',
                type: 'uint256',
            },
        ],
        name: 'Trade',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'makerBuyToken',
                type: 'address',
            },
            {
                indexed: false,
                name: 'makerSellToken',
                type: 'address',
            },
            {
                indexed: true,
                name: 'maker',
                type: 'address',
            },
            {
                indexed: true,
                name: 'orderHash',
                type: 'bytes32',
            },
        ],
        name: 'Cancel',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'previousOwner',
                type: 'address',
            },
            {
                indexed: true,
                name: 'newOwner',
                type: 'address',
            },
        ],
        name: 'OwnershipTransferred',
        type: 'event',
    },
];
