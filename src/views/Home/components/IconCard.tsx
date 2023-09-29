import { ReactNode } from 'react'
import styled from 'styled-components'
import { Card, CardBody, Box, CardProps } from '@pancakeswap/uikit'

const StyledCard = styled(Card) <{ background: string; rotation?: string }>`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 350px;
  & > * {
    min-width: 280px;
    max-width: 31.5%;
    width: 100%;
    margin: 0 8px;
    margin-bottom: 32px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    ${({ rotation }) => (rotation ? `transform: rotate(${rotation});` : '')}
  }
`

const IconWrapper = styled(Box) <{ rotation?: string }>`
  position: absolute;
  top: 20px;
  right: 20px;

  ${({ theme }) => theme.mediaQueries.md} {
    ${({ rotation }) => (rotation ? `transform: rotate(${rotation});` : '')}
  }
`

interface IconCardProps extends IconCardData, CardProps {
  children: ReactNode
}

export interface IconCardData {
  icon: ReactNode
  background?: string
  borderColor?: string
  rotation?: string
}

const IconCard: React.FC<IconCardProps> = ({ icon, background, borderColor, rotation, children, ...props }) => {
  return (
    <StyledCard background={background} borderBackground={borderColor} rotation={rotation} {...props}>
      <CardBody>
        {children}
        <IconWrapper rotation={rotation}>{icon}</IconWrapper>
      </CardBody>
    </StyledCard>
  )
}

export default IconCard
