import { Heading, Flex, Text, Skeleton, ChartIcon, CommunityIcon, SwapIcon, FarmIcon } from '@pancakeswap/uikit'
import { Box, Button, Card, CardContent, Grid, Link, Paper } from '@material-ui/core';
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import { formatLocalisedCompactNumber } from 'utils/formatBalance'
import useSWRImmutable from 'swr/immutable'
import IconCard, { IconCardData } from '../IconCard'
import StatCardContent from './StatCardContent'
import GradientLogo from '../GradientLogoSvg'
import useTotalSupply from 'hooks/useTotalSupply';
import { getBalanceNumber } from 'utils/formatBalance';
import { useCakeBusdPrice } from 'hooks/useBUSDPrice';
import { getCakeVaultAddress } from 'utils/addressHelpers';
import { useTotalValue } from 'state/farms/hooks'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useCurrencyBalance, useTokenBalance } from 'state/wallet/hooks'
import { ChainId, Token } from '@pancakeswap/sdk';
import BigNumber from 'bignumber.js';
import useAllEarnings from 'hooks/useAllEarnings'

const Stats = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()

  // const { data: tvl } = useSWRImmutable('tvl')
  const { data: txCount } = useSWRImmutable('totalTx30Days')
  const { data: addressCount } = useSWRImmutable('addressCount30Days')
  const trades = formatLocalisedCompactNumber(txCount)
  const users = formatLocalisedCompactNumber(addressCount)
  // const tvlString = tvl ? formatLocalisedCompactNumber(tvl) : '-'

  // const tvlText = t('And those users are now entrusting the platform with over $%tvl% in funds.', { tvl: tvlString })
  // const [entrusting, inFunds] = tvlText.split(tvlString)

  const UsersCardData: IconCardData = {
    icon: <FarmIcon color="warning" width="36px" />,
  }

  const TradesCardData: IconCardData = {
    icon: <SwapIcon color="primary" width="36px" />,
  }

  const StakedCardData: IconCardData = {
    icon: <ChartIcon color="failure" width="36px" />,
  }

  const totalSupply = 100000000
  const burnedBalance = 0
  const cakeSupply = totalSupply ? totalSupply - burnedBalance : 0
  const befxPriceBusd = useCakeBusdPrice()?.toFixed(5)
  const marketcap = Number(befxPriceBusd) * cakeSupply
  const tvl = useTotalValue()
  const { account } = useActiveWeb3React()
  const selectedCurrencyBalance = useTokenBalance(account, new Token(56, "0x75B2fdd95418e093fCA7DB858B36549e5e412076", 18, "BEFX", "Belifex",""))?.toFixed(3)
  const balanceUsd = (Number(selectedCurrencyBalance) * Number(befxPriceBusd)).toFixed(6)
  const allEarnings = useAllEarnings()
  const earningsSum = allEarnings.reduce((accum, earning) => {
    return accum + new BigNumber(earning).div(new BigNumber(10).pow(18)).toNumber()
  }, 0)
  const earningsBusd = new BigNumber(earningsSum).multipliedBy(befxPriceBusd).toNumber().toFixed(3)
  const earnUsd = (Number(earningsBusd) * Number(befxPriceBusd)).toFixed(6)

  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      {/* <GradientLogo height="48px" width="48px" mb="24px" /> */}
      {/* <Heading textAlign="center" scale="xl">
        {t('Used by millions.')}
      </Heading>
      <Heading textAlign="center" scale="xl" mb="32px">
        {t('Trusted with billions.')}
      </Heading>
      <Text textAlign="center" color="textSubtle">
        {t('Beli Swap has the most users of any decentralized platform, ever.')}
      </Text>
      <Flex flexWrap="wrap">
        <Text display="inline" textAlign="center" color="textSubtle" mb="20px">
          {entrusting}
          <>{tvl ? <>{tvlString}</> : <Skeleton display="inline-block" height={16} width={70} mt="2px" />}</>
          {inFunds}
        </Text>
      </Flex>

      <Text textAlign="center" color="textSubtle" bold mb="32px">
        {t('Will you join them?')}
      </Text> */}
      <Grid container spacing={3} style={{ display: "flex", justifyContent: "center" }}>
        <Flex flexDirection={['column', null, null, 'row']}>
          <Grid item xs={12} sm={6} style={{ padding: "30px" }}>
            <IconCard {...UsersCardData} mr={[null, null, null, '16px']} mb={['16px', null, null, '0']}>
              {/* <StatCardContent
                headingText={t('%users% Farms & Staking', { users })}
                bodyText={t('in the last 30 days')}
                highlightColor={theme.colors.secondary}
              /> */}
              <p className="homecard-title">Farms & Staking</p>
              <img className="homecard-img" src="/images/logo.png"></img>
              <p className="homecard-harvestlabel">BEFX to Harvest :</p>
              <div style={{ display: "flex", flexDirection: "row", padding: "10px", justifyContent: "space-between" }}>
                <p className="homecard-values">{earningsBusd}</p>
                <p className="homecard-values">~${earnUsd}</p>
              </div>
              <p className="homecard-harvestlabel">BEFX in Wallet :</p>
              <div style={{ display: "flex", flexDirection: "row", padding: "10px", justifyContent: "space-between" }}>
                <p className="homecard-values">{selectedCurrencyBalance ? selectedCurrencyBalance : 0}</p>
                <p className="homecard-values">~${balanceUsd ? balanceUsd : 0}</p>
              </div>
            </IconCard>
          </Grid>
          {/* <Grid item xs={12} sm={4} style={{ padding: "30px" }}>
            <IconCard {...TradesCardData} mr={[null, null, null, '16px']} mb={['16px', null, null, '0']}>
             
              <p className="homecard-title">Total Value locked</p>
              <p className="homecard-tvl">{0}</p>
            </IconCard>
          </Grid> */}
          <Grid item xs={12} sm={6} style={{ padding: "30px" }}>
            <IconCard {...StakedCardData}>
              {/* <StatCardContent
                headingText={t('$%tvl% BEFX Stats', { tvl: tvlString })}
                bodyText={t('Total Value Locked')}
                highlightColor={theme.colors.failure}
              /> */}
              <p className="homecard-title">BEFX Stats</p>
              <div style={{ display: "flex", flexDirection: "row", padding: "10px", justifyContent: "space-between" }}>
                <p className="homecard-harvestlabel">Total Supply</p>
                <p className="homecard-values">{totalSupply ? totalSupply : 0}</p>
              </div>
              <div style={{ display: "flex", flexDirection: "row", padding: "10px", justifyContent: "space-between" }}>
                <p className="homecard-harvestlabel">Total Burned</p>
                <p className="homecard-values">{burnedBalance ? burnedBalance : 0}</p>
              </div>
              <div style={{ display: "flex", flexDirection: "row", padding: "10px", justifyContent: "space-between" }}>
                <p className="homecard-harvestlabel">BEFX Price</p>
                <p className="homecard-values">~${befxPriceBusd}</p>
              </div>
              <div style={{ display: "flex", flexDirection: "row", padding: "10px", justifyContent: "space-between" }}>
                <p className="homecard-harvestlabel">Market Cap</p>
                <p className="homecard-values">{marketcap}</p>
              </div>
            </IconCard>
          </Grid>
        </Flex>
      </Grid>
    </Flex>
  )
}

export default Stats
