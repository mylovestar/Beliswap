import { Box } from '@pancakeswap/uikit'
import styled from 'styled-components'

export const StyledPriceChart = styled(Box)<{
  $isDark: boolean
  $isExpanded: boolean
  $isFullWidthContainer?: boolean
}>`
  border: none;
  border-radius: 32px;
  width: 100%;
  padding-top: 36px;
  // margin-top: 90px;
  ${({ theme }) => theme.mediaQueries.sm} {
    padding-top: 8px;
    background: #64727e80;
    // border: ${({ theme }) => `1px solid ${theme.colors.cardBorder}`};
    border-radius: ${({ $isExpanded }) => ($isExpanded ? '0' : '32px')};
    width: ${({ $isExpanded, $isFullWidthContainer }) => ($isFullWidthContainer || $isExpanded ? '100%' : '50%')};
    height: ${({ $isExpanded }) => ($isExpanded ? 'calc(100vh - 100px)' : '516px')};
  }
`

StyledPriceChart.defaultProps = {
  height: '70%',
}
