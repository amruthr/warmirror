import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import { 
  Col,
  Card, 
  CardImg
} from 'reactstrap';
import {
  isMobile
} from "react-device-detect";
const propTypes = {
  FilteredSortedList: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  itemsMaxPage: PropTypes.number.isRequired
};

const styles = {
  flexmob : {
    width:'50%',
    padding: '10px',
  },
  spaceColumn: {
    marginLeft: '5px',
    marginRight: '5px',
    marginBottom: '30px',
    boxShadow: 'lightgrey -1px 0px 20px 0px',
    borderRadius: '4px',
    padding: '2px 2px 20px 2px',
    width : '100%',
  },
  spaceColumnPC: {
    marginLeft: '25px',
    marginRight: '25px',
    marginBottom: '50px',
    border: 'solid 1px',
    borderRadius: '4px',
    padding: '2px 2px 20px 2px',
  }, 
  fontSize: {
    fontSize: '15px'
  },
  marginLeftBtn: {
    marginLeft: '30px'
  },
  containerPaddingTop: {
    paddingTop: '35px'
  }
};

const EachItemInList = ({
  FilteredSortedList,
  currentPage,
  itemsMaxPage
}) => {  
  return (FilteredSortedList.slice((currentPage-1)*itemsMaxPage,itemsMaxPage*currentPage).map(x => 
    <div md="6" style={isMobile?styles.flexmob:0}  key={x._id}> 
      <Card style={isMobile?styles.spaceColumn:styles.spaceColumnPC}>
        <Link to={`/item/${x._id}/${x.title.split(' ').join('-')}`} className="text-white">
          <CardImg top width="100%" src={x.images[0]} alt={x.title} />
        </Link>
          <div>
            <div style={{position: 'absolute', top: 0, textAlign: 'center', width: '100%'}}>{x.color.map(x=><div key={x} style={{width:'20px', height:'20px', backgroundColor:x, boxShadow: '0px 0px 14px -4px rgba(0,0,0,0.75)'}}/>)}</div>
            <p style={{margin:'auto'}}>{x.title}</p>
            <StarRatings
              rating={x.rating}
              starDimension="15px"
              starSpacing="1px"
              starRatedColor="#072a48"
              // changeRating={this.changeRating}  <-- uncomment to transform in input
              numberOfStars={5}
              name='rating'
              />
            <p className="text-muted">{x.price} $</p>
          </div>
      </Card>
    </div>
  ));
};

EachItemInList.propTypes = propTypes;

export default EachItemInList;



