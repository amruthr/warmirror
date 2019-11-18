import React from 'react'
import {
  isMobile
} from "react-device-detect";
import ButtonLinkGenderPage from './Button-link-gender-page'
import { Jumbotron, Container } from 'reactstrap';

const styles = {
  bannerCoverPc: {
    backgroundImage: 'url("/images/banner-cover-pc.jpg")',
    backgroundSize: 'cover'
  },
  bannerCoverMobile: {
    backgroundImage: 'url("/images/banner-cover-mobile.jpg")',
    backgroundSize: 'cover'
  },
  textBanner: {
    textShadow: "0px",
    textAlign: 'left',
    color:'white',
    fontFamily:'cursive',
    fontSize:'50'
  },
  centerButtons: {
    textAlign: 'center',
    padding: '10px'
  },
  titleH1Pc: {
    fontSize: '80px'
  },
  titleH1Mobile: {
    fontSize: '60px'
  }
};

const { bannerCoverPc, bannerCoverMobile, textBanner, centerButtons, titleH1Mobile, titleH1Pc } = styles

const HeroBanner = () => (
  <Jumbotron fluid style={isMobile? bannerCoverMobile : bannerCoverPc}>
    <Container fluid style={{height: 'max-height'}}>
      <div style={textBanner}>
        <h1 className="display-2" style={isMobile ? titleH1Mobile : titleH1Pc}>Vastram</h1>
        <p>The Fashion Station</p>
      </div>
     
      <div style={centerButtons}>
        <ButtonLinkGenderPage gender={'men'} content='Mens Fashion' /> 
        <ButtonLinkGenderPage gender={'women'} content='Womens Collection' />
        <ButtonLinkGenderPage gender={'kids'} content='Kids Zone' />
      </div>
    </Container>
  </Jumbotron>
);

export default HeroBanner;