import React, { Component } from 'react';
import Context from './Context'

const { Consumer } = Context;
class SubSon extends Component {
  state = {
    theme: 'red'
  }
  render() {
    return (
      <Consumer>
        {
          (theme) => {
            return (
              <p style={{color: theme}}>text</p>
            )
          }
        }
        <div>
          subSon
        </div>
      </Consumer>
    )
  }
}
export default SubSon;