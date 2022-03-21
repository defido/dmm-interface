import { ChainId } from '@vutien/sdk-core'
// a list of tokens by chain
type ChainStringList = {
  readonly [chainId in ChainId]: string
}
const V2_CORE_FACTORY_ADDRESS = '0x0C7369F931a8D809E443c1d4A5DCe663fF888a73'
export const PRO_AMM_CORE_FACTORY_ADDRESSES: ChainStringList = {
  [ChainId.MAINNET]: V2_CORE_FACTORY_ADDRESS,
  [ChainId.ROPSTEN]: V2_CORE_FACTORY_ADDRESS,
  [ChainId.RINKEBY]: '0xc3c17b6a1Ec3727180598A81Dee384081E450084',
  [ChainId.GÖRLI]: V2_CORE_FACTORY_ADDRESS,
  [ChainId.KOVAN]: V2_CORE_FACTORY_ADDRESS,
  [ChainId.MATIC]: V2_CORE_FACTORY_ADDRESS,
  [ChainId.MUMBAI]: V2_CORE_FACTORY_ADDRESS,
  [ChainId.BSCTESTNET]: '0xceF7b9894edD15b95bBe71F0B3890B22bf455E23',
  [ChainId.BSCMAINNET]: V2_CORE_FACTORY_ADDRESS,
  [ChainId.AVAXTESTNET]: V2_CORE_FACTORY_ADDRESS,
  [ChainId.AVAXMAINNET]: V2_CORE_FACTORY_ADDRESS,
  [ChainId.FANTOM]: V2_CORE_FACTORY_ADDRESS,
  [ChainId.CRONOSTESTNET]: V2_CORE_FACTORY_ADDRESS,
  [ChainId.CRONOS]: V2_CORE_FACTORY_ADDRESS,
  [ChainId.ARBITRUM]: V2_CORE_FACTORY_ADDRESS,
  [ChainId.ARBITRUM_TESTNET]: V2_CORE_FACTORY_ADDRESS,
  [ChainId.BTTC]: V2_CORE_FACTORY_ADDRESS
}

const NONFUNGIBLE_POSITION_MANAGER_ADDRESS = '0x958935bc8dCB8B4B0aDff4FceB2beb8Bbb117CFc'
export const PRO_AMM_NONFUNGIBLE_POSITION_MANAGER_ADDRESSES: ChainStringList = {
  [ChainId.MAINNET]: NONFUNGIBLE_POSITION_MANAGER_ADDRESS,
  [ChainId.ROPSTEN]: NONFUNGIBLE_POSITION_MANAGER_ADDRESS,
  [ChainId.RINKEBY]: '0x280036f0fdEeC5A1C4DDc55f42C25E5302E1283E',
  [ChainId.GÖRLI]: NONFUNGIBLE_POSITION_MANAGER_ADDRESS,
  [ChainId.KOVAN]: NONFUNGIBLE_POSITION_MANAGER_ADDRESS,
  [ChainId.MATIC]: NONFUNGIBLE_POSITION_MANAGER_ADDRESS,
  [ChainId.MUMBAI]: NONFUNGIBLE_POSITION_MANAGER_ADDRESS,
  [ChainId.BSCTESTNET]: '0x008EB3cC42310ff976719D2d5a1219FE48F8607d',
  [ChainId.BSCMAINNET]: NONFUNGIBLE_POSITION_MANAGER_ADDRESS,
  [ChainId.AVAXTESTNET]: NONFUNGIBLE_POSITION_MANAGER_ADDRESS,
  [ChainId.AVAXMAINNET]: NONFUNGIBLE_POSITION_MANAGER_ADDRESS,
  [ChainId.FANTOM]: NONFUNGIBLE_POSITION_MANAGER_ADDRESS,
  [ChainId.CRONOSTESTNET]: NONFUNGIBLE_POSITION_MANAGER_ADDRESS,
  [ChainId.CRONOS]: NONFUNGIBLE_POSITION_MANAGER_ADDRESS,
  [ChainId.ARBITRUM_TESTNET]: NONFUNGIBLE_POSITION_MANAGER_ADDRESS,
  [ChainId.ARBITRUM]: NONFUNGIBLE_POSITION_MANAGER_ADDRESS,
  [ChainId.BTTC]: NONFUNGIBLE_POSITION_MANAGER_ADDRESS
}
// const TICK_READER = '0xb4748ce3ca04BE8f7E266dC9E38343A286eB5Ec6' //-- old
const TICK_READER = '0xc4c0a7b11457392f74604d9492593e686ab612b3'

export const PRO_AMM_TICK_READER: ChainStringList = {
  [ChainId.MAINNET]: TICK_READER,
  [ChainId.ROPSTEN]: TICK_READER,
  [ChainId.RINKEBY]: TICK_READER,
  [ChainId.GÖRLI]: TICK_READER,
  [ChainId.KOVAN]: TICK_READER,
  [ChainId.MATIC]: TICK_READER,
  [ChainId.MUMBAI]: TICK_READER,
  [ChainId.BSCTESTNET]: TICK_READER,
  [ChainId.BSCMAINNET]: TICK_READER,
  [ChainId.AVAXTESTNET]: TICK_READER,
  [ChainId.AVAXMAINNET]: TICK_READER,
  [ChainId.FANTOM]: TICK_READER,
  [ChainId.CRONOSTESTNET]: TICK_READER,
  [ChainId.CRONOS]: TICK_READER,
  [ChainId.ARBITRUM_TESTNET]: TICK_READER,
  [ChainId.ARBITRUM]: TICK_READER,
  [ChainId.BTTC]: TICK_READER
}

export const PRO_AMM_INIT_CODE_HASH = '0xd71790a46dff0e075392efbd706356cd5a822a782f46e9859829440065879f81'

const QUOTER = '0xC78e50bcB1675617561287272bb64CDEDAB30b1D'

export const PRO_AMM_QUOTER: ChainStringList = {
  [ChainId.MAINNET]: QUOTER,
  [ChainId.ROPSTEN]: QUOTER,
  [ChainId.RINKEBY]: '0x9D4ffbf49cc21372c2115Ae4C155a1e5c0aACf36',
  [ChainId.GÖRLI]: QUOTER,
  [ChainId.KOVAN]: QUOTER,
  [ChainId.MATIC]: QUOTER,
  [ChainId.MUMBAI]: QUOTER,
  [ChainId.BSCTESTNET]: '0x12ba4d63f73E0Aa01Df9c74508f1D2714bF05198',
  [ChainId.BSCMAINNET]: QUOTER,
  [ChainId.AVAXTESTNET]: QUOTER,
  [ChainId.AVAXMAINNET]: QUOTER,
  [ChainId.FANTOM]: QUOTER,
  [ChainId.CRONOSTESTNET]: QUOTER,
  [ChainId.CRONOS]: QUOTER,
  [ChainId.ARBITRUM_TESTNET]: QUOTER,
  [ChainId.ARBITRUM]: QUOTER,
  [ChainId.BTTC]: QUOTER
}

const ROUTER = '0x16349caF049589FD97be483Cb547e5ADF0991358'
export const PRO_AMM_ROUTERS: ChainStringList = {
  [ChainId.MAINNET]: ROUTER,
  [ChainId.ROPSTEN]: ROUTER,
  [ChainId.RINKEBY]: '0x5520c862D387d99CbeB9591527b45682786a4814',
  [ChainId.GÖRLI]: ROUTER,
  [ChainId.KOVAN]: ROUTER,
  [ChainId.MATIC]: ROUTER,
  [ChainId.MUMBAI]: ROUTER,
  [ChainId.BSCTESTNET]: '0x584bc3d0e4304e170A2B1347672911E93973D675',
  [ChainId.BSCMAINNET]: ROUTER,
  [ChainId.AVAXTESTNET]: ROUTER,
  [ChainId.AVAXMAINNET]: ROUTER,
  [ChainId.FANTOM]: ROUTER,
  [ChainId.CRONOSTESTNET]: ROUTER,
  [ChainId.CRONOS]: ROUTER,
  [ChainId.ARBITRUM_TESTNET]: ROUTER,
  [ChainId.ARBITRUM]: ROUTER,
  [ChainId.BTTC]: ROUTER
}
