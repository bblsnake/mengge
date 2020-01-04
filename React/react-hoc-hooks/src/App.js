import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Drag from './Drag1'
import withDragAble from './withDragAble'
import useDragable from './useDragable'

// hooks
// react15 function 组件没有this，state 没有生命周期
// 只负责 单纯接受 props渲染

// react16
// hooks 作用： 解决组件之间逻辑复用， 相比hoc解决哪些问题
// 让逻辑扁平化了
function Header() {
  return (
    <h2>h2</h2>
  )
}
function Footer() {
  // state hooks
  const [count, setCount] = useState(0); // state={ 0 }
  const { style, handleDown } = useDragable(); 
  return (
    <div style={style} onMouseDown={handleDown} className="drag">
      foot: { count }
      <button onClick={() => {
        let count1 = count + 1
        setCount(count1)
      }}>+</button>
    </div>
  )
}
const DragH2 = withDragAble(Header)
const Footer1 = withDragAble(Footer)
function App() {
  return (
    <>
      <Drag />
      <DragH2 /> 
      <Footer1 />
    </>
  );
}

export default App;
