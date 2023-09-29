import { createGlobalStyle } from 'styled-components'
import { PancakeTheme } from '@pancakeswap/uikit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
  }
  #bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  
  #bg canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  .farms-table {
    background: linear-gradient(#5ddcff, #3c67e3 43%, #4e00c2);
    border-radius: 14px;
  }

  @property --rotate {
    syntax: "<angle>";
    initial-value: 132deg;
    inherits: false;
  }
  
  .card {
    background: #191c29;
    padding: 3px;
    position: relative;
    border-radius: 14px;
    justify-content: center;
    align-items: center;
    text-align: center;
    display: flex;
    font-size: 1.5em;
    color: rgb(88 199 250 / 0%);
    cursor: pointer;
    font-family: cursive;
  }  
  
  .card::before {
    content: "";
    width: 101%;
    height: 102%;
    border-radius: 14px;
    background-image: linear-gradient(
      var(--rotate)
      , #5ddcff, #3c67e3 43%, #4e00c2);
      position: absolute;
      z-index: -1;
      top: -1%;
      animation: spin 2.5s linear infinite;
  }
  
  .card::after {
    position: absolute;
    content: "";
    top: calc(var(--card-height) / 6);
    left: 0;
    right: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    transform: scale(0.8);
    filter: blur(calc(var(--card-height) / 6));
    background-image: linear-gradient(
      var(--rotate)
      , #5ddcff, #3c67e3 43%, #4e00c2);
      opacity: 1;
    transition: opacity .5s;
    animation: spin 2.5s linear infinite;
  }
  
  @keyframes spin {
    0% {
      --rotate: 0deg;
    }
    100% {
      --rotate: 360deg;
    }
  }

  .awssld__content > img {
    height: auto!important;
  }

  .awssld__container {
    padding-bottom: calc(var(--slider-height-percentage) * 0.13) !important;
  }

  .homecard-title {
    font-size: 24px;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 20px;
    padding-top: 30px;
    text-align: center;
  }

  .homecard-img {
    width: 100px;
    margin-left: 60px;
    margin-bottom: 20px;
  }

  .homecard-harvestlabel {
    color: #ffffff;
  }

  .homecard-values {
    color: #F0EBD8;
  }

  .homecard-tvl {
    text-shadow: 0px 0px 20px rgba(255, 255, 255, 0.6);
    font-size: 52px;
    color: #e4eee8;
    font-weight: 900;
    padding: 80px;
  }

  .visabutton {
    background: #26eacc !important;
  }

  .tradeButton {
    background: ${({ theme }) => theme.colors.backgroundAlt};
    color: ${({ theme }) => theme.colors.text};
  }

  .hideBar {
    width: 41.4%;
    height: 6%;
    margin-top: -42px;
    background: #000000;
    position: absolute;
  }

  @media screen and (max-width: 465px) {
    .hideBar {
      width: 100%
    }
  }

  @media screen and (min-width: 1024px) {
    .hideBar {
      width: 50%
    }
  }

  .inputAddress {
    color: #748CAB !important;
  }
`

export default GlobalStyle
