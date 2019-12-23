import React, { Component } from 'react';
import { is } from 'immutable'
class BaseCom extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    const thisProps = this.props || {};
    if(Object.keys(thisProps).length !== Object.keys(nextProps).length) {
      return true;
    }
    for(const key in nextProps) {
      if(!is(thisProps[key], nextProps[key])){
        return true;
      }
    }
    return false;
  }
}
 
export default BaseCom;