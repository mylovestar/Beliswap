import { HTMLAttributes } from 'react';
import styled from 'styled-components'
import PageSection from 'components/PageSection'
import { useWeb3React } from '@web3-react/core'
import useTheme from 'hooks/useTheme'
import Container from 'components/Layout/Container'
import { PageMeta } from 'components/Layout/Page'
import NativeTokenBar from 'components/NativeTokenBar'
import Fancy from 'components/FancySlider'
import PriceFeed from 'components/Pricelint'
import { useTranslation } from 'contexts/Localization'
import Hero from './components/Hero'
import { swapSectionData, earnSectionData, cakeSectionData } from './components/SalesSection/data'
import MetricsSection from './components/MetricsSection'
import SalesSection from './components/SalesSection'
import WinSection from './components/WinSection'
import FarmsPoolsRow from './components/FarmsPoolsRow'
import Footer from './components/Footer'
import CakeDataRow from './components/CakeDataRow'
import { WedgeTopLeft, InnerWedgeWrapper, OuterWedgeWrapper, WedgeTopRight } from './components/WedgeSvgs'
import UserBanner from './components/UserBanner'
import MultipleBanner from './components/Banners/MultipleBanner'
import Script from 'next/script'
import { ComponentPropsWithoutRef } from 'react'

const StyledHeroSection = styled(PageSection)`
  padding-top: 16px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 48px;
  }
`

const UserBannerWrapper = styled(Container)`
  z-index: 1;
  position: absolute;
  width: 100%;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  padding-left: 0px;
  padding-right: 0px;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 24px;
    padding-right: 24px;
  }
`
// interface divProps extends HTMLAttributes<HTMLDivElement> {
//   coins: string;
//   currency: string;
//   theme: string;
//   transparent: string;
//   showsymbollogo: string;
// }

// const Div: React.FunctionComponent<divProps> = ({...rest}) => {
//   return <div {...rest}></div>
// }

const Home: React.FC = () => {
  const { theme } = useTheme()
  const { account } = useWeb3React()

  const HomeSectionContainerStyles = { margin: '0', width: '100%', maxWidth: '968px' }

  const { t } = useTranslation()

  return (
    <>
      <PageMeta />
      {/* <NativeTokenBar /> */}
      {/* <PriceFeed /> */}
      {/* <Script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/coinMarquee.js" />
      <Div id="coinmarketcap-widget-marquee" coins="1,1027,825,4687,23583,74,2306,4116,2537,22234" currency="USD" theme="light" transparent="false" showsymbollogo="true">
      </Div> */}
      <Fancy />
      <video
        autoPlay
        loop
        muted
        id="background-video"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: '50% 50%',
          position: 'absolute',
          margin: 'auto',
          width: '100%',
          height: '100%',
          right: '-100%',
          bottom: '-100%',
          top: '-100%',
          left: '-100%',
          objectFit: 'cover',
          zIndex: '-100',
        }}
      >
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>
      <StyledHeroSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        background={
          theme.isDark
            ? 'transparent'
            : 'transparent'
        }
        style={{ backgroundSize: "cover" }}
        index={2}
        hasCurvedDivider={false}
      >

        {/* {account && (
          <UserBannerWrapper>
            <UserBanner />
          </UserBannerWrapper>
        )} */}
        {/* <MultipleBanner /> */}
        <Hero />
        <SalesSection {...swapSectionData(t)} />
        <MetricsSection />
        {/* <OuterWedgeWrapper>
          <InnerWedgeWrapper top fill={theme.isDark ? '#201335' : '#D8CBED'}>
            <WedgeTopLeft />
          </InnerWedgeWrapper>
        </OuterWedgeWrapper> */}
      </StyledHeroSection>
      {/* <PageSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        background={
          theme.isDark
            ? 'linear-gradient(180deg, #09070C 22%, #201335 100%)'
            : 'linear-gradient(180deg, #FFFFFF 22%, #D7CAEC 100%)'
        }
        index={2}
        hasCurvedDivider={false}
      >
        <MetricsSection />
      </PageSection>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={theme.colors.background}
        index={2}
        hasCurvedDivider={false}
      >
        <OuterWedgeWrapper>
          <InnerWedgeWrapper top fill={theme.isDark ? '#201335' : '#D8CBED'}>
            <WedgeTopLeft />
          </InnerWedgeWrapper>
        </OuterWedgeWrapper>
        <SalesSection {...swapSectionData(t)} />
      </PageSection> */}
      {/* <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={theme.colors.gradients.cardHeader}
        index={2}
        hasCurvedDivider={false}
      >
        <OuterWedgeWrapper>
          <InnerWedgeWrapper width="150%" top fill={theme.colors.background}>
            <WedgeTopRight />
          </InnerWedgeWrapper>
        </OuterWedgeWrapper>
        <SalesSection {...earnSectionData(t)} />
        <FarmsPoolsRow />
      </PageSection> */}
      {/* <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={
          theme.isDark
            ? 'linear-gradient(180deg, #0B4576 0%, #091115 100%)'
            : 'linear-gradient(180deg, #6FB6F1 0%, #EAF2F6 100%)'
        }
        index={2}
        hasCurvedDivider={false}
      >
        <WinSection />
      </PageSection> */}
      {/* <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={theme.colors.background}
        index={2}
        hasCurvedDivider={false}
      >
        <SalesSection {...cakeSectionData(t)} />
        <CakeDataRow />
      </PageSection> */}
      {/* <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background="linear-gradient(180deg, #7645D9 0%, #5121B1 100%)"
        index={2}
        hasCurvedDivider={false}
      >
        <Footer />
      </PageSection> */}
    </>
  )
}

export default Home
