import React, { Component } from 'react';
import SubSon from './SubSon'

class Son extends Component {
  state = {
    theme: 'red'
  }
  render() {
    return (
      <SubSon/>
    )
  }
}
export default Son;