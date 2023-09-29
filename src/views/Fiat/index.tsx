import styled from 'styled-components'
import { ChainId } from '@pancakeswap/sdk'
import {
  Text,
  Flex,
  IconButton,
} from '@pancakeswap/uikit'
import Page from '../Page'


export default function Fiat() {

  return (
    <>
      <Page>
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
        <iframe
            width="400"
            height="690"
            frameBorder="0"
            allow="clipboard-read *; clipboard-write *; web-share *; accelerometer *; autoplay *; camera *; gyroscope *; payment *; geolocation *"
            src="https://flooz.trade/embed/trade?swapDisabled=true&swapLockToToken=false&onRampDisabled=false&onRampAsDefault=false&onRampDefaultAmount=100&onRampTokenAddress=0x75B2fdd95418e093fCA7DB858B36549e5e412076&stakeDisabled=true&network=bsc&lightMode=true&primaryColor=%23748cab&backgroundColor=transparent&roundedCorners=10&padding=20&refId=iznhH1"
        ></iframe>
      </Page>
    </>
  )
}
