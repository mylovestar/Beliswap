import { BigNumber } from '@ethersproject/bignumber'
import Trans from 'components/Trans'
import { VaultKey } from 'state/types'
import { serializeTokens } from 'utils/serializeTokens'
import { bscTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const serializedTokens = serializeTokens(bscTokens)

export const MAX_LOCK_DURATION = 31536000
export const UNLOCK_FREE_DURATION = 604800
export const ONE_WEEK_DEFAULT = 604800
export const BOOST_WEIGHT = BigNumber.from('20000000000000')
export const DURATION_FACTOR = BigNumber.from('31536000')

export const vaultPoolConfig = {
  [VaultKey.CakeVaultV1]: {
    name: <Trans>Auto CAKE</Trans>,
    description: <Trans>Automatic restaking</Trans>,
    autoCompoundFrequency: 5000,
    gasLimit: 380000,
    tokenImage: {
      primarySrc: `/images/tokens/${bscTokens.cake.address}.svg`,
      secondarySrc: '/images/tokens/autorenew.svg',
    },
  },
  [VaultKey.CakeVault]: {
    name: <Trans>Stake BEFX</Trans>,
    description: <Trans>Stake, Earn – And more!</Trans>,
    autoCompoundFrequency: 5000,
    gasLimit: 500000,
    tokenImage: {
      primarySrc: `/images/tokens/${bscTokens.cake.address}.svg`,
      secondarySrc: '/images/tokens/autorenew.svg',
    },
  },
  [VaultKey.CakeFlexibleSideVault]: {
    name: <Trans>Flexible CAKE</Trans>,
    description: <Trans>Flexible staking on the side.</Trans>,
    autoCompoundFrequency: 5000,
    gasLimit: 500000,
    tokenImage: {
      primarySrc: `/images/tokens/${bscTokens.cake.address}.svg`,
      secondarySrc: '/images/tokens/autorenew.svg',
    },
  },
  [VaultKey.IfoPool]: {
    name: 'IFO CAKE',
    description: <Trans>Stake BEFX to participate in IFOs</Trans>,
    autoCompoundFrequency: 1,
    gasLimit: 500000,
    tokenImage: {
      primarySrc: `/images/tokens/${bscTokens.cake.address}.svg`,
      secondarySrc: `/images/tokens/ifo-pool-icon.svg`,
    },
  },
} as const

export const livePools: SerializedPoolConfig[] = [
  {
    sousId: 0,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.cake,
    contractAddress: {
      97: '0xB4A466911556e39210a6bB2FaECBB59E4eB7E43d',
      56: '0x97ba78060e71EF648bE9C0744F08C879431d7851',
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.4',
    isFinished: false,
  },
  {
    sousId: 1,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.tkp,
    contractAddress: {
      97: '0xB4A466911556e39210a6bB2FaECBB59E4eB7E43d',
      56: '0x98fD399E4fa5BFd2ed736ecEc17D3099cd336CE6',
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.4',
    isFinished: false,
  },
  {
    sousId: 2,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.hmmm,
    contractAddress: {
      97: '0xB4A466911556e39210a6bB2FaECBB59E4eB7E43d',
      56: '0x0A103bCb812dF065475D0cA12eB1E5A13D1116E0',
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.4',
    isFinished: false,
  },
  {
    sousId: 3,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.swap,
    contractAddress: {
      97: '0xB4A466911556e39210a6bB2FaECBB59E4eB7E43d',
      56: '0x0fCCD6E5215D2B77CF2650c289bb775EdAC5EE17',
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.4',
    isFinished: false,
  },
  {
    sousId: 4,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.gems,
    contractAddress: {
      97: '0xB4A466911556e39210a6bB2FaECBB59E4eB7E43d',
      56: '0x3e3F86609317a9ea4957c640A9aE0DE7f99E1dAd',
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.4',
    isFinished: false,
  },
  {
    sousId: 5,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.marco,
    contractAddress: {
      97: '0xB4A466911556e39210a6bB2FaECBB59E4eB7E43d',
      56: '0x4F66A906ae78290F4080D8863C2A0b14bEEF6a0D',
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.4',
    isFinished: false,
  },
]

// known finished pools
const finishedPools = [
  
].map((p) => ({ ...p, isFinished: true }))

export default [...livePools, ...finishedPools]
