import { useCallback } from 'react'
import BigNumber from 'bignumber.js'
import { DEFAULT_TOKEN_DECIMAL, DEFAULT_GAS_LIMIT } from 'config'
import { getFullDecimalMultiplier } from 'utils/getFullDecimalMultiplier'
import { useSousChef } from 'hooks/useContract'
import getGasPrice from 'utils/getGasPrice'

const options = {
  gasLimit: DEFAULT_GAS_LIMIT,
}

const sousStake = async (sousChefContract, pid, amount) => {
  const gasPrice = getGasPrice()
  const value = new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).toString()
  return sousChefContract.deposit(pid, value, {...options, gasPrice, })
}

const sousStakeBnb = async (sousChefContract, amount) => {
  const gasPrice = getGasPrice()
  return sousChefContract.deposit(new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).toString(), {
    ...options,
    gasPrice,
  })
}

const useStakePool = (sousId: number, isUsingBnb = false) => {
  const sousChefContract = useSousChef(sousId)
  const handleStake = useCallback(
    async (amount: string, decimals: number) => {
      if (isUsingBnb) {
        return sousStakeBnb(sousChefContract, amount)
      }
      return sousStake(sousChefContract, sousId, amount)
    },
    [isUsingBnb, sousChefContract],
  )

  return { onStake: handleStake }
}

export default useStakePool
