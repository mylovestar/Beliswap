import React from 'react';
import Script from 'next/script'

interface DivProps {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  coins?: string;
  currency?: string;
  theme?: string;
  transparent?: string;
  showsymbollogo?: string;
  // Add any additional attributes you want to support
}
<Script type="text/javascript" src="/coinMarquee.js" />

const Div: React.FC<DivProps> = ({ id, className, style, children }) => {
  return (
    <div id="coinmarketcap-widget-marquee" coins="1,1027,825,4687,23583,74,2306,4116,2537,22234,1839,5805,3890,52,3513,1975,3635" currency="USD" transparent="false" showsymbollogo="true" style={{ zIndex: '1', position: 'absolute', width: '100%' }} /> 
  );
};

export default Div;
