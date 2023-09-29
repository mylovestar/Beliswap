import { Button, Text, useModal, Flex, Skeleton, Heading, AutoRenewIcon } from '@pancakeswap/uikit'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import { PoolCategory } from 'config/constants/types'
import { formatNumber, getBalanceNumber, getFullDisplayBalance } from 'utils/formatBalance'
import { useTranslation } from 'contexts/Localization'
import Balance from 'components/Balance'
import { BIG_ZERO } from 'utils/bigNumber'
import { DeserializedPool } from 'state/types'

import { ActionContainer, ActionTitles, ActionContent } from './styles'
import CollectModal from '../../PoolCard/Modals/CollectModal'
import useCatchTxError from 'hooks/useCatchTxError'
import useToast from 'hooks/useToast'
import { ToastDescriptionWithTx } from 'components/Toast'
import useHarvestPool from '../../../hooks/useHarvestPool'
import useStakePool from '../../../hooks/useStakePool'
import { useAppDispatch } from 'state'
import { updateUserBalance, updateUserPendingReward, updateUserStakedBalance } from 'state/pools'

const HarvestAction: React.FunctionComponent<DeserializedPool> = ({
  sousId,
  poolCategory,
  earningToken,
  userData,
  userDataLoaded,
  earningTokenPrice,
  onDismiss,
}) => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  console.log("userDataLoaded", userDataLoaded)
  const earnings = userData?.pendingReward ? new BigNumber(userData.pendingReward) : BIG_ZERO
  const earningTokenBalance = getBalanceNumber(earnings, earningToken.decimals)
  const earningTokenUint256 = earningTokenBalance * 1000000000000000000
  const earningTokenDollarBalance = getBalanceNumber(earnings.multipliedBy(earningTokenPrice), earningToken.decimals)
  const hasEarnings = earnings.gt(0)
  const fullBalance = getFullDisplayBalance(earnings, earningToken.decimals)
  const formattedBalance = formatNumber(earningTokenBalance, 3, 3)
  const isCompoundPool = sousId === 0
  const isBnbPool = poolCategory === PoolCategory.BINANCE

  const [onPresentCollect] = useModal(
    <CollectModal
      formattedBalance={formattedBalance}
      fullBalance={fullBalance}
      earningToken={earningToken}
      earningsDollarValue={earningTokenDollarBalance}
      sousId={sousId}
      isBnbPool={isBnbPool}
      isCompoundPool={isCompoundPool}
    />,
  )

  const actionTitle = (
    <>
      <Text fontSize="12px" bold color="secondary" as="span" textTransform="uppercase" textAlign="left">
        {earningToken.symbol}{' '}
      </Text>
      <Text fontSize="12px" bold color="primary" as="span" textTransform="uppercase">
        {t('Earned')}
      </Text>
    </>
  )

  const { fetchWithCatchTxError, loading: pendingTx } = useCatchTxError()
  const { onReward } = useHarvestPool(sousId, isBnbPool, earningTokenUint256)
  const { onStake } = useStakePool(sousId, isBnbPool)
  const { toastSuccess } = useToast()
  const dispatch = useAppDispatch()

  const handleHarvestConfirm = async () => {
    const receipt = await fetchWithCatchTxError(() => {
      // if (shouldCompound) {
      //   return onStake(fullBalance, earningToken.decimals)
      // }
      return onReward()
    })
    if (receipt?.status) {
      // if (shouldCompound) {
      //   toastSuccess(
      //     `${t('Compounded')}!`,
      //     <ToastDescriptionWithTx txHash={receipt.transactionHash}>
      //       {t('Your %symbol% earnings have been re-invested into the pool!', { symbol: earningToken.symbol })}
      //     </ToastDescriptionWithTx>,
      //   )
      // } else {
        toastSuccess(
          `${t('Harvested')}!`,
          <ToastDescriptionWithTx txHash={receipt.transactionHash}>
            {t('Your %symbol% earnings have been sent to your wallet!', { symbol: earningToken.symbol })}
          </ToastDescriptionWithTx>,
        )
      // }
      dispatch(updateUserStakedBalance({ sousId, account }))
      dispatch(updateUserPendingReward({ sousId, account }))
      dispatch(updateUserBalance({ sousId, account }))
      onDismiss?.()
    }
  }

  if (!account) {
    return (
      <ActionContainer>
        <ActionTitles>{actionTitle}</ActionTitles>
        <ActionContent>
          <Heading>0</Heading>
          <Button disabled>{isCompoundPool ? t('Collect') : t('Harvest')}</Button>
        </ActionContent>
      </ActionContainer>
    )
  }

  if (!userDataLoaded) {
    return (
      <ActionContainer>
        <ActionTitles>{actionTitle}</ActionTitles>
        <ActionContent>
          <Skeleton width={180} height="32px" marginTop={14} />
        </ActionContent>
      </ActionContainer>
    )
  }

  return (
    <ActionContainer>
      <ActionTitles>{actionTitle}</ActionTitles>
      <ActionContent>
        <Flex flex="1" flexDirection="column" alignSelf="flex-center">
          <>
            {hasEarnings ? (
              <>
                <Balance lineHeight="1" bold fontSize="20px" decimals={5} value={earningTokenBalance} />
                {earningTokenPrice > 0 && (
                  <Balance
                    display="inline"
                    fontSize="12px"
                    color="text"
                    decimals={2}
                    prefix="~"
                    value={earningTokenDollarBalance}
                    unit=" USD"
                  />
                )}
              </>
            ) : (
              <>
                <Heading color="primary" textAlign="left">0</Heading>
                <Text fontSize="12px" color="primary" textAlign="left">
                  0 USD
                </Text>
              </>
            )}
          </>
        </Flex>
        <Button
          mt="8px"
          onClick={handleHarvestConfirm}
          isLoading={pendingTx}
          endIcon={pendingTx ? <AutoRenewIcon spin color="currentColor" /> : null}
        >
          {pendingTx ? t('Processing') : t('Harvest')}
        </Button>
      </ActionContent>
    </ActionContainer>
  )
}

export default HarvestAction
