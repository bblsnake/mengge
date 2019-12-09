import React, { PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';

// 浅比较
class App extends PureComponent{
  state = {
    val: 4
  }
  shallowEqual(obja, objb) {
    if(Object.keys(obja) !== Object.keys(objb)) {
      return false;
    }
    let keys = Object.keys(obja)
    for(let i = 0; i < obja.length; i ++) {
      // ===   Object.is()  修复NaN
      if(Object.is(obja[keys[i]], objb[keys[i]])) {
        return false;
      }
    }
    return true
  }
  shouldComponentUpdate(nextProps, nextState) {
    // 比较 thisprops nextprops   state nextstate
    return !this.shallowEqual(this.props, nextProps)
  }
  handleChange = () => {
    this.setState({
      val: 4
    })
  }
  render() {
    console.log('render!!');
    return (
       <div>
         { this.state.val }
         <button onClick={this.handleChange}>change</button>
       </div>
    );
  }
}

export default App;
