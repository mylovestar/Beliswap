import { serializeTokens } from 'utils/serializeTokens'
import { bscTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens(bscTokens)

export const CAKE_BNB_LP_MAINNET = '0x71Ecfe6a01C63804F6649a45C5aB8E2C413B9F69'

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 2, 3) should always be at the top of the file.
   */
  {
    pid: 0,
    v1pid: 0,
    lpSymbol: 'BEFX',
    lpAddresses: {
      97: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
      56: '0x75B2fdd95418e093fCA7DB858B36549e5e412076',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 1,
    v1pid: 389,
    lpSymbol: 'BEFX-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x14Be88E2Cf59ea071dDC1EFA2ADf3Edc029A4871',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 2,
    v1pid: 251,
    lpSymbol: 'BEFX-BNB LP',
    lpAddresses: {
      97: '0x71Ecfe6a01C63804F6649a45C5aB8E2C413B9F69',
      56: CAKE_BNB_LP_MAINNET,
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.wbnb,
  },
  // {
  //   pid: 3,
  //   v1pid: 252,
  //   lpSymbol: 'BUSD-BNB LP',
  //   lpAddresses: {
  //     97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
  //     56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
  //   },
  //   token: serializedTokens.busd,
  //   quoteToken: serializedTokens.wbnb,
  // },
  //    * V3 by order of release (some may be out of PID order due to multiplier boost)
  
]

export default farms
