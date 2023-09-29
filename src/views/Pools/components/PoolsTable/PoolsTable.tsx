import { useRef } from 'react'
import styled from 'styled-components'
import { Button, ChevronUpIcon } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { DeserializedPool } from 'state/types'
import PoolRow, { VaultPoolRow } from './PoolRow'

interface PoolsTableProps {
  pools: DeserializedPool[]
  account: string
}

const StyledTable = styled.div`
  border-radius: 14px;
  scroll-margin-top: 64px;
  width: 100%;
  background-color: ${({ theme }) => theme.card.background};
  > div:not(:last-child) {
    border-bottom: 2px solid ${({ theme }) => theme.colors.disabled};
  }
`

const StyledTableBorder = styled.div`
  border-radius: 14px;
  background-color: ${({ theme }) => theme.colors.cardBorder};
  padding: 1px 1px 3px 1px;
  background-size: 400% 400%;
`

const ScrollButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5px;
  padding-bottom: 5px;
`

const PoolsTable: React.FC<PoolsTableProps> = ({ pools, account }) => {
  const { t } = useTranslation()
  const tableWrapperEl = useRef<HTMLDivElement>(null)

  const scrollToTop = (): void => {
    window.scrollTo({
      top: tableWrapperEl.current.offsetTop,
      behavior: 'smooth',
    })
  }

  return (
    <StyledTableBorder className="card">
      <StyledTable id="pools-table" role="table" ref={tableWrapperEl}>
        {pools.map((pool) =>
          
            <PoolRow key={pool.sousId} sousId={pool.sousId} account={account} />
        )}
        <ScrollButtonContainer>
          <Button variant="text" onClick={scrollToTop}>
            {t('To Top')}
            <ChevronUpIcon color="primary" />
          </Button>
        </ScrollButtonContainer>
      </StyledTable>
    </StyledTableBorder>
  )
}

export default PoolsTable
