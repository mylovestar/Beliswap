import { Flex, Text, Button, Heading, useModal, Skeleton, AutoRenewIcon } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import BigNumber from 'bignumber.js'
import { Token } from '@pancakeswap/sdk'
import { useTranslation } from 'contexts/Localization'
import { getFullDisplayBalance, getBalanceNumber, formatNumber } from 'utils/formatBalance'
import Balance from 'components/Balance'
import CollectModal from '../Modals/CollectModal'
import useToast from 'hooks/useToast'
import { ToastDescriptionWithTx } from 'components/Toast'
import useCatchTxError from 'hooks/useCatchTxError'
import { updateUserBalance, updateUserPendingReward, updateUserStakedBalance } from 'state/pools'
import { useAppDispatch } from 'state'
import useHarvestPool from '../../../hooks/useHarvestPool'
import useStakePool from '../../../hooks/useStakePool'

interface HarvestActionsProps {
  earnings: BigNumber
  earningToken: Token
  sousId: number
  earningTokenPrice: number
  isBnbPool: boolean
  isLoading?: boolean
  onDismiss?: () => void
}

const HarvestActions: React.FC<HarvestActionsProps> = ({
  earnings,
  earningToken,
  sousId,
  isBnbPool,
  earningTokenPrice,
  isLoading = false,
  onDismiss,
}) => {
  const { t } = useTranslation()
  const earningTokenBalance = getBalanceNumber(earnings, earningToken.decimals)
  const earningTokenUint256 = earningTokenBalance * 1000000000000000000
  const formattedBalance = formatNumber(earningTokenBalance, 3, 3)

  const earningTokenDollarBalance = getBalanceNumber(earnings.multipliedBy(earningTokenPrice), earningToken.decimals)

  const fullBalance = getFullDisplayBalance(earnings, earningToken.decimals)
  const hasEarnings = earnings.toNumber() > 0
  const isCompoundPool = sousId === 0

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

  const { fetchWithCatchTxError, loading: pendingTx } = useCatchTxError()
  const { toastSuccess } = useToast()
  const { account } = useWeb3React()
  const dispatch = useAppDispatch()
  const { onReward } = useHarvestPool(sousId, isBnbPool, earningTokenUint256)
  const { onStake } = useStakePool(sousId, isBnbPool)

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

  return (
    <Flex justifyContent="space-between" alignItems="center" mb="16px">
      <Flex flexDirection="column">
        {isLoading ? (
          <Skeleton width="80px" height="48px" />
        ) : (
          <>
            {hasEarnings ? (
              <>
                <Balance bold fontSize="20px" decimals={5} value={earningTokenBalance} />
                {earningTokenPrice > 0 && (
                  <Balance
                    display="inline"
                    fontSize="12px"
                    color="textSubtle"
                    decimals={2}
                    prefix="~"
                    value={earningTokenDollarBalance}
                    unit=" USD"
                  />
                )}
              </>
            ) : (
              <>
                <Heading color="textDisabled">0</Heading>
                <Text fontSize="12px" color="textDisabled">
                  0 USD
                </Text>
              </>
            )}
          </>
        )}
      </Flex>
      <Button disabled={!hasEarnings} onClick={handleHarvestConfirm}
      isLoading={pendingTx}
      endIcon={pendingTx ? <AutoRenewIcon spin color="currentColor" /> : null}>
        {/* {isCompoundPool ? t('Collect') : t('Harvest')} */}
        {pendingTx ? t('Precessing') : t('Harvest')}
      </Button>
    </Flex>
  )
}

export default HarvestActions
