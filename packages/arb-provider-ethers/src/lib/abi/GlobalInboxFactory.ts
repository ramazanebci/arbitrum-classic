/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from 'ethers'
import { Provider } from 'ethers/providers'
import { UnsignedTransaction } from 'ethers/utils/transaction'

import { TransactionOverrides } from '.'
import { GlobalInbox } from './GlobalInbox'

export class GlobalInboxFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(overrides?: TransactionOverrides): Promise<GlobalInbox> {
    return super.deploy(overrides) as Promise<GlobalInbox>
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides)
  }
  attach(address: string): GlobalInbox {
    return super.attach(address) as GlobalInbox
  }
  connect(signer: Signer): GlobalInboxFactory {
    return super.connect(signer) as GlobalInboxFactory
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GlobalInbox {
    return new Contract(address, _abi, signerOrProvider) as GlobalInbox
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'BuddyContractDeployed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'chain',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint8',
        name: 'kind',
        type: 'uint8',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'inboxSeqNum',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'MessageDelivered',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'chain',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint8',
        name: 'kind',
        type: 'uint8',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'inboxSeqNum',
        type: 'uint256',
      },
    ],
    name: 'MessageDeliveredFromOrigin',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'nodeHash',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'messageIndex',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'originalOwner',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'prevOwner',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'PaymentTransfer',
    type: 'event',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: 'chain',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'erc20',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'depositERC20Message',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: 'chain',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'erc721',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
    ],
    name: 'depositERC721Message',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: 'chain',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
    ],
    name: 'depositEthMessage',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: 'chain',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'erc20',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'depositPairedERC20Message',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'address',
        name: '_tokenContract',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_owner',
        type: 'address',
      },
    ],
    name: 'getERC20Balance',
    outputs: [
      {
        internalType: 'uint256',
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
        internalType: 'address',
        name: '_erc721',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_owner',
        type: 'address',
      },
    ],
    name: 'getERC721Tokens',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
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
        internalType: 'address',
        name: '_owner',
        type: 'address',
      },
    ],
    name: 'getEthBalance',
    outputs: [
      {
        internalType: 'uint256',
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
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'getInbox',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
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
        internalType: 'address',
        name: '_tokenContract',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_owner',
        type: 'address',
      },
    ],
    name: 'getPairedERC20Balance',
    outputs: [
      {
        internalType: 'uint256',
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
        internalType: 'address',
        name: 'originalOwner',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: 'nodeHash',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
        name: 'messageIndex',
        type: 'uint256',
      },
    ],
    name: 'getPaymentOwner',
    outputs: [
      {
        internalType: 'address',
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
        internalType: 'address',
        name: '_erc721',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_owner',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_tokenId',
        type: 'uint256',
      },
    ],
    name: 'hasERC721',
    outputs: [
      {
        internalType: 'bool',
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
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'isBuddyContract',
    outputs: [
      {
        internalType: 'bool',
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
        internalType: 'address',
        name: '_owner',
        type: 'address',
      },
    ],
    name: 'ownedERC20s',
    outputs: [
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]',
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
        internalType: 'address',
        name: '_owner',
        type: 'address',
      },
    ],
    name: 'ownedERC721s',
    outputs: [
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]',
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
        internalType: 'bytes',
        name: 'messageData',
        type: 'bytes',
      },
    ],
    name: 'sendInitializationMessage',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: 'chain',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'messageData',
        type: 'bytes',
      },
    ],
    name: 'sendL2BuddyDeploy',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: 'chain',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'messageData',
        type: 'bytes',
      },
    ],
    name: 'sendL2Message',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: 'chain',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'messageData',
        type: 'bytes',
      },
    ],
    name: 'sendL2MessageFromOrigin',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'bytes',
        name: 'messages',
        type: 'bytes',
      },
      {
        internalType: 'uint256[]',
        name: 'messageCounts',
        type: 'uint256[]',
      },
      {
        internalType: 'bytes32[]',
        name: 'nodeHashes',
        type: 'bytes32[]',
      },
    ],
    name: 'sendMessages',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: 'originalOwner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: 'nodeHash',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
        name: 'messageIndex',
        type: 'uint256',
      },
    ],
    name: 'transferPayment',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: '_tokenContract',
        type: 'address',
      },
    ],
    name: 'withdrawERC20',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: '_erc721',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_tokenId',
        type: 'uint256',
      },
    ],
    name: 'withdrawERC721',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'withdrawEth',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: '_tokenContract',
        type: 'address',
      },
    ],
    name: 'withdrawPairedERC20',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b506129a0806100206000396000f3fe60806040526004361061014b5760003560e01c806374c6eccc116100b6578063c3a8962c1161006f578063c3a8962c146107a8578063cb184d0e146107e3578063d2256c661461082c578063f3e414f814610875578063f4f3b200146108ae578063fbef861b146108e15761014b565b806374c6eccc146105e85780638b7010aa14610673578063a0ef91df146106bc578063b4346fec146106d1578063bca22b7614610704578063bd4fbb361461074d5761014b565b806333f2ac421161010857806333f2ac421461044f57806345a53f09146104825780634d2301cc146104d95780635bd212901461050c5780635cc96efa1461053a5780636e2b89c5146105b55761014b565b80630220168114610150578063072fd2bb1461019c5780630758fb0a146102b95780630a1a4af61461034457806321e2f2fa146103cf5780632f5bf21114610402575b600080fd5b34801561015c57600080fd5b506101836004803603602081101561017357600080fd5b50356001600160a01b031661096c565b6040805192835260208301919091528051918290030190f35b3480156101a857600080fd5b506102b7600480360360608110156101bf57600080fd5b810190602081018135600160201b8111156101d957600080fd5b8201836020820111156101eb57600080fd5b803590602001918460018302840111600160201b8311171561020c57600080fd5b919390929091602081019035600160201b81111561022957600080fd5b82018360208201111561023b57600080fd5b803590602001918460208302840111600160201b8311171561025c57600080fd5b919390929091602081019035600160201b81111561027957600080fd5b82018360208201111561028b57600080fd5b803590602001918460208302840111600160201b831117156102ac57600080fd5b509092509050610992565b005b3480156102c557600080fd5b506102f4600480360360408110156102dc57600080fd5b506001600160a01b0381358116916020013516610a5a565b60408051602080825283518183015283519192839290830191858101910280838360005b83811015610330578181015183820152602001610318565b505050509050019250505060405180910390f35b34801561035057600080fd5b506102b76004803603604081101561036757600080fd5b6001600160a01b038235169190810190604081016020820135600160201b81111561039157600080fd5b8201836020820111156103a357600080fd5b803590602001918460018302840111600160201b831117156103c457600080fd5b509092509050610b20565b3480156103db57600080fd5b506102b7600480360360208110156103f257600080fd5b50356001600160a01b0316610b68565b34801561040e57600080fd5b5061043d6004803603604081101561042557600080fd5b506001600160a01b0381358116916020013516610c1e565b60408051918252519081900360200190f35b34801561045b57600080fd5b506102f46004803603602081101561047257600080fd5b50356001600160a01b0316610c87565b34801561048e57600080fd5b506104c5600480360360608110156104a557600080fd5b506001600160a01b03813581169160208101359091169060400135610d4a565b604080519115158252519081900360200190f35b3480156104e557600080fd5b5061043d600480360360208110156104fc57600080fd5b50356001600160a01b0316610dca565b6102b76004803603604081101561052257600080fd5b506001600160a01b0381358116916020013516610de5565b34801561054657600080fd5b506102b76004803603602081101561055d57600080fd5b810190602081018135600160201b81111561057757600080fd5b82018360208201111561058957600080fd5b803590602001918460018302840111600160201b831117156105aa57600080fd5b509092509050610e2b565b3480156105c157600080fd5b506102f4600480360360208110156105d857600080fd5b50356001600160a01b0316610e6e565b3480156105f457600080fd5b506102b76004803603604081101561060b57600080fd5b6001600160a01b038235169190810190604081016020820135600160201b81111561063557600080fd5b82018360208201111561064757600080fd5b803590602001918460018302840111600160201b8311171561066857600080fd5b509092509050610f27565b34801561067f57600080fd5b506102b76004803603608081101561069657600080fd5b506001600160a01b03813581169160208101358216916040820135169060600135610f6a565b3480156106c857600080fd5b506102b7610fd1565b3480156106dd57600080fd5b506104c5600480360360208110156106f457600080fd5b50356001600160a01b031661101c565b34801561071057600080fd5b506102b76004803603608081101561072757600080fd5b506001600160a01b03813581169160208101358216916040820135169060600135611031565b34801561075957600080fd5b5061078c6004803603606081101561077057600080fd5b506001600160a01b038135169060208101359060400135611092565b604080516001600160a01b039092168252519081900360200190f35b3480156107b457600080fd5b5061043d600480360360408110156107cb57600080fd5b506001600160a01b03813581169160200135166110fd565b3480156107ef57600080fd5b506102b76004803603608081101561080657600080fd5b506001600160a01b03813581169160208101358216916040820135169060600135611138565b34801561083857600080fd5b506102b76004803603608081101561084f57600080fd5b506001600160a01b03813581169160208101359091169060408101359060600135611143565b34801561088157600080fd5b506102b76004803603604081101561089857600080fd5b506001600160a01b038135169060200135611266565b3480156108ba57600080fd5b506102b7600480360360208110156108d157600080fd5b50356001600160a01b0316611316565b3480156108ed57600080fd5b506102b76004803603604081101561090457600080fd5b6001600160a01b038235169190810190604081016020820135600160201b81111561092e57600080fd5b82018360208201111561094057600080fd5b803590602001918460018302840111600160201b8311171561096157600080fd5b5090925090506113e3565b6001600160a01b038116600090815260076020526040902080546001909101545b915091565b60008061099d612821565b8360005b81811015610a4c5760005b8989838181106109b857fe5b90506020020135811015610a4357610a078c8c8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525089925061149c915050565b9197509550935085610a1e57505050505050610a52565b610a3b888884818110610a2d57fe5b905060200201358286611588565b6001016109ac565b506001016109a1565b50505050505b505050505050565b6001600160a01b0380821660009081526005602090815260408083209386168352908390529020546060919080610aa35750506040805160008152602081019091529050610b1a565b816001016001820381548110610ab557fe5b9060005260206000209060030201600201805480602002602001604051908101604052809291908181526020018280548015610b1057602002820191906000526020600020905b815481526020019060010190808311610afc575b5050505050925050505b92915050565b610b638360053385858080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506117ab92505050565b505050565b6000610b748233610c1e565b9050610b81338383611882565b610bbc5760405162461bcd60e51b815260040180806020018281038252602e81526020018061293e602e913960400191505060405180910390fd5b604080516340c10f1960e01b81523360048201526024810183905290516001600160a01b038416916340c10f1991604480830192600092919082900301818387803b158015610c0a57600080fd5b505af1158015610a52573d6000803e3d6000fd5b6001600160a01b03808216600090815260026020908152604080832093861683529083905281205490919080610c5957600092505050610b1a565b816001016001820381548110610c6b57fe5b9060005260206000209060020201600101549250505092915050565b6001600160a01b038116600090815260056020908152604091829020600181015483518181528184028101909301909352606092909183918015610cd5578160200160208202803883390190505b50805190915060005b81811015610d4057836001018181548110610cf557fe5b600091825260209091206003909102015483516001600160a01b0390911690849083908110610d2057fe5b6001600160a01b0390921660209283029190910190910152600101610cde565b5090949350505050565b6001600160a01b03808316600090815260056020908152604080832093871683529083905281205490919080610d8557600092505050610dc3565b816001016001820381548110610d9757fe5b906000526020600020906003020160010160008581526020019081526020016000205460001415925050505b9392505050565b6001600160a01b031660009081526003602052604090205490565b610dee82611a15565b604080516001600160a01b038316602082015234818301528151808203830181526060909101909152610e2790839060009033906117ab565b5050565b610e273360043385858080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506117ab92505050565b6001600160a01b038116600090815260046020908152604091829020600181015483518181528184028101909301909352606092909183918015610ebc578160200160208202803883390190505b50805190915060005b81811015610d4057836001018181548110610edc57fe5b600091825260209091206002909102015483516001600160a01b0390911690849083908110610f0757fe5b6001600160a01b0390921660209283029190910190910152600101610ec5565b610b638360033385858080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506117ab92505050565b610f75838583611a34565b610fcb846002338660601b6001600160601b0319168660601b6001600160601b031916866040516020018084815260200183815260200182815260200193505050506040516020818303038152906040526117ab565b50505050565b6000610fdc33610dca565b3360008181526003602052604080822082905551929350909183156108fc0291849190818181858888f19350505050158015610e27573d6000803e3d6000fd5b60006020819052908152604090205460ff1681565b61103c838583611aab565b610fcb846001338660601b6001600160601b0319168660601b6001600160601b031916866040516020018084815260200183815260200182815260200193505050506040516020818303038152906040526117ab565b604080516020808201859052818301849052606086811b6001600160601b03191690830152825180830360540181526074909201835281519181019190912060009081526006909152908120546001600160a01b0316806110f65784915050610dc3565b9050610dc3565b6001600160a01b03808216600090815260046020908152604080832093861683529083905281205490919080610c5957600092505050610b1a565b61103c838583611b38565b6000611150858484611092565b9050336001600160a01b038216146111a8576040805162461bcd60e51b815260206004820152601660248201527526bab9ba103132903830bcb6b2b73a1037bbb732b91760511b604482015290519081900360640190fd5b604080516020808201869052818301859052606088811b6001600160601b031916908301528251808303605401815260748301808552815191830191909120600090815260069092529083902080546001600160a01b0319166001600160a01b03898116918217909255918790526094830186905280891660b4840152841660d483015260f482015290517fb6cb19e71486466b0282ce82fd31a015b7c00f7d67cddc0da09cccfa58c6438391610114908290030190a15050505050565b611271338383611ba9565b6112c2576040805162461bcd60e51b815260206004820152601860248201527f57616c6c657420646f65736e2774206f776e20746f6b656e0000000000000000604482015290519081900360640190fd5b60408051632142170760e11b81523060048201523360248201526044810183905290516001600160a01b038416916342842e0e91606480830192600092919082900301818387803b158015610c0a57600080fd5b600061132282336110fd565b905061132f338383611e11565b61136a5760405162461bcd60e51b815260040180806020018281038252602e81526020018061293e602e913960400191505060405180910390fd5b6040805163a9059cbb60e01b81523360048201526024810183905290516001600160a01b0384169163a9059cbb9160448083019260209291908290030181600087803b1580156113b957600080fd5b505af11580156113cd573d6000803e3d6000fd5b505050506040513d6020811015610fcb57600080fd5b333214611425576040805162461bcd60e51b815260206004820152600b60248201526a6f726967696e206f6e6c7960a81b604482015290519081900360640190fd5b60006114508460033386866040518083838082843760405192018290039091209350611e5892505050565b60408051828152905191925033916003916001600160a01b038816917fe923069519faf69b0726ed766a213f61b6f07f2ecf11d55582cc440d8806b0bc9181900360200190a450505050565b6000806114a7612821565b83915060008583815181106114b857fe5b016020015160019093019260f81c90506114d0611eac565b60030160ff168160ff16146114ec575060009250839150611581565b60006114f88785611eb2565b91965094509050846115135750600093508492506115819050565b60ff8116835260006115258886611eb2565b9197509550905085611541575060009450859350611581915050565b6001600160a01b038116602085015261155a8886611f2f565b6040870152909650945085611579575060009450859350611581915050565b506001945050505b9250925092565b805160ff166115f257600061159b612840565b6115a88360400151612186565b91509150816115b8575050610b63565b60006115c982600001518787611092565b90506115da826000015187876121e2565b6115e93382846020015161223e565b50505050610b63565b805160ff16600114156116a0576000611609612857565b611616836040015161229c565b9150915081611626575050610b63565b600061163782602001518787611092565b9050611648826020015187876121e2565b81516001600160a01b031660009081526020819052604090205460ff16156116845761167e338284600001518560400151612319565b50611698565b6115e9338284600001518560400151612365565b505050610b63565b805160ff166002141561170a5760006116b7612857565b6116c4836040015161229c565b91509150816116d4575050610b63565b60006116e582602001518787611092565b90506116f6826020015187876121e2565b6115e9338284600001518560400151612394565b805160ff1660051415610b63576040805162461bcd60e51b815260206004820152600d60248201526c6a757374206661696c206e6f7760981b604482015290519081900360640190fd5b8381101561176c578181015183820152602001611754565b50505050905090810190601f1680156117995780820380516001836020036101000a031916815260200191505b509250505060405180910390a2505050565b60006117c08585858580519060200120611e58565b9050826001600160a01b03168460ff16866001600160a01b03167f35e48d636f39df5c5ca2278452d6d89bf9f07c2ff15f46d08aa402c46638b88284866040518083815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611840578181015183820152602001611828565b50505050905090810190601f16801561186d5780820380516001836020036101000a031916815260200191505b50935050505060405180910390a45050505050565b60008161189157506001610dc3565b6001600160a01b038085166000908152600260209081526040808320938716835290839052902054806118c957600092505050610dc3565b60008260010160018303815481106118dd57fe5b9060005260206000209060020201905080600101548511156119055760009350505050610dc3565b60018101805486900390819055611a08576001830180548391859160009190600019810190811061193257fe5b600091825260208083206002909202909101546001600160a01b03168352820192909252604001902055600183018054600019810190811061197057fe5b906000526020600020906002020183600101600184038154811061199057fe5b60009182526020808320845460029093020180546001600160a01b0319166001600160a01b03938416178155600194850154908501559089168252859052604081205583018054806119de57fe5b60008281526020812060026000199093019283020180546001600160a01b03191681556001015590555b5060019695505050505050565b6001600160a01b03166000908152600360205260409020805434019055565b604080516323b872dd60e01b81523360048201523060248201526044810183905290516001600160a01b038516916323b872dd91606480830192600092919082900301818387803b158015611a8857600080fd5b505af1158015611a9c573d6000803e3d6000fd5b50505050610b638284836123b4565b604080516323b872dd60e01b81523360048201523060248201526044810183905290516001600160a01b038516916323b872dd9160648083019260209291908290030181600087803b158015611b0057600080fd5b505af1158015611b14573d6000803e3d6000fd5b505050506040513d6020811015611b2a57600080fd5b50610b639050828483612538565b60408051632770a7eb60e21b81523360048201526024810183905290516001600160a01b03851691639dc29fac91604480830192600092919082900301818387803b158015611b8657600080fd5b505af1158015611b9a573d6000803e3d6000fd5b50505050610b6382848361260f565b6001600160a01b03808416600090815260056020908152604080832093861683529083905281205490919080611be457600092505050610dc3565b6000826001016001830381548110611bf857fe5b600091825260208083208884526001600390930201918201905260409091205490915080611c2d576000945050505050610dc3565b60028201805482916001850191600091906000198101908110611c4c57fe5b600091825260208083209091015483528201929092526040019020556002820180546000198101908110611c7c57fe5b9060005260206000200154826002016001830381548110611c9957fe5b600091825260208083209091019290925587815260018401909152604081205560028201805480611cc657fe5b6000828152602081208201600019908101919091550190556002820154611e035760018401805484918691600091906000198101908110611d0357fe5b600091825260208083206003909202909101546001600160a01b031683528201929092526040019020556001840180546000198101908110611d4157fe5b9060005260206000209060030201846001016001850381548110611d6157fe5b60009182526020909120825460039092020180546001600160a01b0319166001600160a01b0390921691909117815560028083018054611da49284019190612877565b5050506001600160a01b03871660009081526020859052604081205560018401805480611dcd57fe5b60008281526020812060036000199093019283020180546001600160a01b031916815590611dfe60028301826128c7565b505090555b506001979650505050505050565b600081611e2057506001610dc3565b6001600160a01b038085166000908152600460209081526040808320938716835290839052902054806118c957600092505050610dc3565b6001600160a01b03841660009081526007602052604081206001808201540182611e8687874342868a6126bf565b9050611e96836000015482612728565b835550600190910181905590505b949350505050565b60035b90565b6000806000808551905084811080611ecc57506021858203105b80611ef45750611eda612754565b60ff16868681518110611ee957fe5b016020015160f81c14155b15611f09575060009250839150829050611581565b600160218601611f218888840163ffffffff61275916565b935093509350509250925092565b60008060606000611f408686612775565b9195509350905083611f56575060009250611581565b60208104601f8216600081611f6c576000611f6f565b60015b60ff1683019050606083604051908082528060200260200182016040528015611fa2578160200160208202803883390190505b5090506060836040519080825280601f01601f191660200182016040528015611fd2576020820181803883390190505b5090506000805b8481101561209d576000611fed8e8c612775565b919d509b5090508b61200c575060009a50611581975050505050505050565b8115801561201a5750600087115b1561206d578060005b888110156120665781816020811061203757fe5b1a60f81b86828151811061204757fe5b60200101906001600160f81b031916908160001a905350600101612023565b5050612094565b8060001b858460018b03038151811061208257fe5b60209081029190910101526001909201915b50600101611fd9565b5060006120aa8d8b6127d7565b909a5090506120b7611eac565b60ff168160ff16146120d55750600099506115819650505050505050565b60018a858560405160200180838051906020019060200280838360005b8381101561210a5781810151838201526020016120f2565b5050505090500182805190602001908083835b6020831061213c5780518252601f19909201916020918201910161211d565b6001836020036101000a038019825116818451168082178552505050505050905001925050506040516020818303038152906040529a509a509a5050505050505050509250925092565b6000612190612840565b6034835110156121a3576000915061098d565b600c6121b5848263ffffffff6127fe16565b6001600160a01b031682526014016121d3848263ffffffff61275916565b60208301525060019150915091565b60408051602080820194909452808201929092526001600160601b0319606094851b16938201939093528251605481830301815260749091018352805190820120600090815260069091522080546001600160a01b0319169055565b6001600160a01b03831660009081526003602052604081205482111561226657506000610dc3565b506001600160a01b0392831660009081526003602052604080822080548490039055929093168352912080549091019055600190565b60006122a6612857565b6048835110156122b9576000915061098d565b600c6122cb848263ffffffff6127fe16565b6001600160a01b031682526020016122e9848263ffffffff6127fe16565b6001600160a01b0316602083015260140161230a848263ffffffff61275916565b60408301525060019150915091565b6000806123268487610c1e565b9050828110156123415761233b868583611882565b5061234e565b61234c868585611882565b505b61235985858561260f565b50600195945050505050565b6000612372858484611e11565b61237e57506000611ea4565b612389848484612538565b506001949350505050565b60006123a1858484611ba9565b6123ad57506000611ea4565b6123898484845b6001600160a01b03808416600090815260056020908152604080832093861683529083905290205480612474576040805180820182526001600160a01b0386811682528251600080825260208083019095528484019182526001878101805491820180825590835291869020855160039092020180546001600160a01b03191691909416178355905180519194612453926002850192909101906128e8565b5050506001600160a01b038516600090815260208490526040902081905590505b600082600101600183038154811061248857fe5b9060005260206000209060030201905080600101600085815260200190815260200160002054600014612502576040805162461bcd60e51b815260206004820152601d60248201527f63616e27742061646420616c7265616479206f776e656420746f6b656e000000604482015290519081900360640190fd5b60028101805460018181018355600083815260208082209093018890559254968352909201909152604090209290925550505050565b8061254257610b63565b6001600160a01b038084166000908152600460209081526040808320938616835290839052902054806125db57506040805180820182526001600160a01b0385811680835260006020808501828152600188810180548083018083559186528486209851600290910290980180546001600160a01b03191698909716979097178655905194019390935590815290849052919091208190555b828260010160018303815481106125ee57fe5b60009182526020909120600160029092020101805490910190555050505050565b8061261957610b63565b6001600160a01b038084166000908152600260209081526040808320938616835290839052902054806125db57506040805180820182526001600160a01b038581168083526000602080850182815260018881018054808301808355828752858720995160028302909a0180546001600160a01b0319169a909916999099178855925196909101959095559282528690529390932082905580549192859281106125ee57fe5b6040805160f89790971b6001600160f81b03191660208089019190915260609690961b6001600160601b03191660218801526035870194909452605586019290925260758501526095808501919091528151808503909101815260b59093019052815191012090565b604080516020808201949094528082019290925280518083038201815260609092019052805191012090565b600090565b6000816020018351101561276c57600080fd5b50016020015190565b60008060008061278586866127d7565b9093509050612792611eac565b60020160ff168160ff16146127ab575060009250611581565b6127b58684611eb2565b91955093509150836127cb575060009250611581565b50600192509250925092565b600080826001018484815181106127ea57fe5b016020015190925060f81c90509250929050565b6000816014018351101561281157600080fd5b500160200151600160601b900490565b6040805160608082018352600080835260208301529181019190915290565b604080518082019091526000808252602082015290565b604080516060810182526000808252602082018190529181019190915290565b8280548282559060005260206000209081019282156128b75760005260206000209182015b828111156128b757825482559160010191906001019061289c565b506128c3929150612923565b5090565b50805460008255906000526020600020908101906128e59190612923565b50565b8280548282559060005260206000209081019282156128b7579160200282015b828111156128b7578251825591602001919060010190612908565b611eaf91905b808211156128c3576000815560010161292956fe57616c6c657420646f65736e2774206f776e2073756666696369656e742062616c616e6365206f6620746f6b656ea265627a7a72315820865239e1927703da27fa1355b40021c8253aa5dcb8feedd1dd8281456bd44b3764736f6c63430005110032'
