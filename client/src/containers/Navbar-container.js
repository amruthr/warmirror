import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'
import {
  isBrowser
} from "react-device-detect";
import { connect } from 'react-redux'
import { oneKeywordForFilter, resetKeywords} from '../actions/DataFetchingActions';
import { selectorTotalItemsCart } from '../selectors/selector_list_statistics';
import CheckoutMiniSummaryPreview from '../components/Checkout-mini-summary-preview'; 
import Submenu from '../components/Submenu';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Badge
} from 'reactstrap';

const styles = {
  itemMenu: {
    padding: '10px',
    listStyleType: 'none'
    
  },
  arrowDown: {
    display: 'none',
  },
  navbarBackground: {
    backgroundColor: '#000',
    zIndex: 1
  }
}

const arrowStyleSubmenu = (subMenuCategorySelected, gender, arrowDown) => subMenuCategorySelected === gender && <div style={arrowDown}></div>

class NavbarContainer extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      subMenuOpen: false,
      subMenuCategorySelected: '',
      openCartPreview: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleSubMenuEnter = (x) => {
    this.setState({
      subMenuOpen: true,
      subMenuCategorySelected: x
    })
  }

  handleSubMenuExit = () => {
    this.setState({
      subMenuOpen: false,
      subMenuCategorySelected: ''
    })
  }

  

  render() {
    const { sendOneKeyword, getCart, resetKeywords, totalItemsSelectorStats } = this.props
    const { isOpen, subMenuCategorySelected, subMenuOpen, openCartPreview } = this.state
    const { men, women } = this.props.categoriesProducts
    const { itemMenu, arrowDown, navbarBackground } = styles

    const categoriesNavItems = gender =>
    isBrowser ?            
      (<NavItem style={itemMenu} onMouseEnter={()=>this.handleSubMenuEnter(gender)} >
        <NavLink to={`/category/${gender}`}  className="text-white" onClick={()=>resetKeywords()}>{gender.charAt(0).toUpperCase() + gender.slice(1)}</NavLink> {arrowStyleSubmenu(subMenuCategorySelected, gender, arrowDown)}
      </NavItem>) :
      (<NavItem style={itemMenu}>
      <NavLink to={`/category/${gender}`}  className="text-white" onClick={()=>{return (resetKeywords(), this.toggle())}}>{gender}</NavLink>
    </NavItem>)

    const cartNavItem = 
    isBrowser ?  
      (<Nav className="ml-auto" navbar style={{cursor: 'pointer'}}>
      <NavItem>
        <div onClick={()=>this.setState(totalItemsSelectorStats==0?{ openCartPreview: openCartPreview }:{ openCartPreview:!openCartPreview })} className="text-white">Cart 
          <Badge color="danger" pill style = {totalItemsSelectorStats==0?{display: 'none'}:{display: 'block'}}>
            {totalItemsSelectorStats}
          </Badge>
        </div>
      </NavItem>
      {
        openCartPreview && <div style={{position: 'fixed', width:'200px', right:'0', top: '6.3%'}}>
        <CheckoutMiniSummaryPreview empty={getCart.length === 0 && true} getCart={getCart}/>
      </div>
      }
    </Nav>) : <NavItem style={itemMenu}><NavLink to='/cart'  className="text-white" onClick={this.toggle}>cart</NavLink></NavItem>

    const subMenuHoverBrowser = 
      subMenuOpen && isBrowser && 
        <Submenu 
          gender={subMenuCategorySelected} 
          itemsListByGender={subMenuCategorySelected === 'men' ? men : women} 
          sendOneKeyword={sendOneKeyword} 
          handleSubMenuExit={this.handleSubMenuExit}
        />


    return (
      <div className="sticky-top">
        <Navbar dark expand="md" style={navbarBackground}>
          <Link to="/" style={itemMenu} className="text-white"> vastram</Link>
          <NavbarToggler light onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar >
            {categoriesNavItems('men')}
            {categoriesNavItems('women')}
            {cartNavItem}
          </Collapse>
        </Navbar>
        {subMenuHoverBrowser}
      </div>
    );
  }
};


const mapStateToProps = state => ({
  categoriesProducts: state.categoriesProducts,
  getCart: state.cartReducer,
  totalItemsSelectorStats: selectorTotalItemsCart(state)
});

const mapDispatchToProps = dispatch => ({
  sendOneKeyword: x => dispatch(oneKeywordForFilter(x)),
  resetKeywords: () => dispatch(resetKeywords())
});


export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);
