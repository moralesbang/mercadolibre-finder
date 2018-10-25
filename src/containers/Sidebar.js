import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bubble as Menu } from 'react-burger-menu'
import { fetchCategories } from '../actions';

class Sidebar extends Component {
  
  componentDidMount() {
    this.props.dispatch(fetchCategories())
  }

  render() {
    const { categories } = this.props
    
    return(
      <Menu pageWrapId={ "page-wrap" } outerContainerId={ "app" }>
        {categories.items.map(category =>
          <span 
            key={category.id} 
            className="menu-item" 
            id={category.id} 
          >
            { category.name }
          </span>
        )}
      </Menu>
    )
  }
}

function mapStateToProps(state) {
  return { categories: state.categories }
}

export default connect(mapStateToProps)(Sidebar)