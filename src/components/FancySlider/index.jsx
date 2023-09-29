import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

const Fancy = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <AutoplaySlider
      play
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={3000}
      style={{marginTop: "0px"}}
      bullets={false}
      organicArrows={false}
    >
      <div data-src="/images/Banner1ok.png" />
      <div data-src="/images/banner3.png" />
      <div data-src="/images/banner5.png" />
      <div data-src="/images/banner4.png" />
    </AutoplaySlider>
  )
}
export default Fancy