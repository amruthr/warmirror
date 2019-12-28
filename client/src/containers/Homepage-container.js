import React from 'react';
import { Helmet } from 'react-helmet';
import HeroBanner from '../components/Hero-banner';
import CarouselHomepage from '../components/Carousel-homepage';
import ShopByPrice from '../components/shop-by-price';
import HeadingStyle from '../components/headstyle';
const styles = {height: '300px',width:'98%', marginTop: '2px',margin:'auto', display: 'flex',overflow: 'hidden',justifyContent: 'center'};
const SBPContainerStyles = {
  width: '100%',
  overflowX:'scroll',
};
var Snow = require('react-snow-effect');
const Homepage = () => (
  <div >
    <Helmet>
      <title>Vastram the Fashion Hub</title>
      <meta name="description" content="Demo Ecommerce template" />
      <link href="//db.onlinewebfonts.com/c/7e96eba370659b4e4563309dc4ebb33f?family=Samarkan" rel="stylesheet" type="text/css"/>
    </Helmet>
    <Snow/>
    <HeroBanner />
    <HeadingStyle headtext="Trending"></HeadingStyle>
    <div style={styles}>
    <CarouselHomepage /></div>
    <HeadingStyle headtext="Shop By Price"></HeadingStyle>
    <div style = {SBPContainerStyles}><ShopByPrice/></div>
  </div>
);

export default Homepage;
