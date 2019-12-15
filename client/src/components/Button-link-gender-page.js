import PropTypes from 'prop-types';
import React from 'react'
import {
  isMobile
} from "react-device-detect";
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom' 

const propTypes = {
  gender: PropTypes.string.isRequired
};

const styles = (imgsrc) => ({
  centerButtons: {
    textAlign: 'center',
    padding: '30px',
    height: '350px'
  },
  buttonStylePc: {
    margin:'10px',
    padding: '25px',
    transform: 'skewX(-10deg)', 
    background: '#0f0f0f',
    backgroundImage: '#000',//url('+imgsrc+')',
    backgroundSize: 'cover',
    width: '18%',
    color: '#fff',
    borderRadius: '100px 2px',
    fontSize: 'small',
    height: '100px',
    border: '0px',
    borderBottom: 'solid 5px #ffbf00'
  },
  buttonStyleMobile: {
    margin:'5px',
    padding: '25px',
    width:'90%',
    background:'#0000006c',
    backdropFilter:'blur(2px)',
    color:'#fff',
    borderRadius: "20px 0px",
    transform: "skew(-10deg)",
    border: '0px',
    borderBottom: 'solid 1px #ffbf00'    
  }
})

const ButtonLinkGenderPage = ({gender, content=gender}) => {

  const {buttonStylePc, buttonStyleMobile } = styles
  
  return <Link to={`/category/${gender}`} className="text-white"><Button size={isMobile ? 'md' : 'lg'} color="light" style={isMobile ?styles(`/images/${gender}Cat.jpg`).buttonStyleMobile : styles(`/images/${gender}Cat.jpg`).buttonStylePc} >{content}</Button></Link>
}

ButtonLinkGenderPage.propTypes = propTypes;

export default ButtonLinkGenderPage