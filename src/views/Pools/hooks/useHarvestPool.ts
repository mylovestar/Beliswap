import { useCallback } from 'react'
import { BIG_ZERO } from 'utils/bigNumber'
import getGasPrice from 'utils/getGasPrice'
import { useSousChef } from 'hooks/useContract'
import { DEFAULT_GAS_LIMIT } from 'config'

const options = {
  gasLimit: DEFAULT_GAS_LIMIT,
}

const harvestPool = async (sousChefContract, amount) => {

  const gasPrice = getGasPrice()
  return sousChefContract.deposit('0', amount, { ...options, gasPrice })
}

const harvestPoolBnb = async (sousChefContract) => {
  const gasPrice = getGasPrice()
  return sousChefContract.deposit({ ...options, value: BIG_ZERO, gasPrice })
}

const useHarvestPool = (sousId, isUsingBnb = false, amount) => {
  const sousChefContract = useSousChef(sousId)

  const handleHarvest = useCallback(async () => {
    if (isUsingBnb) {
      return harvestPoolBnb(sousChefContract)
    }

    return harvestPool(sousChefContract, amount)
  }, [isUsingBnb, sousChefContract, amount])

  return { onReward: handleHarvest }
}

export default useHarvestPool
