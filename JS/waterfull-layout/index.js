//a
var a = 123;
(function(){
  function Waterfall (option) {
    this.container = option.container;
    this.number = option.number;   //一次 渲染多张图片
    this.width = document.body.clientWidth;
    this.init();
  }
  Waterfall.prototype.init = function() {
    const imgList = document.getElementsByTagName('img');
    const perNum = this.getPerNum();
    let heights = [];
    for (let i = 0; i < perNum; i++) {
      heights.push(imgList[i].offsetHeight);
    }
    let minIndex = this.getMinIndex(heights); 
    // float
    // position
    for (let i = perNum; i < imgList.length; i++) {
      imgList[i].style.position = 'absolute';
      imgList[i].style.left = `${imgList[minIndex].offsetLeft}px`;
      imgList[i].style.top = `${heights[minIndex]}px`;

      //更新高度
      heights[minIndex] = heights[minIndex] + imgList[i].offsetHeight;
      minIndex = this.getMinIndex(heights);
    }
    this.heights = heights;
  }
  Waterfall.prototype.append = function() {
    const $waterfall = document.getElementById(this.container);
    $waterfall.appendChild(frag);
    const imgList = document.getElementsByTagName('img');
    const imgFromFrag = Array.prototype.slice(imgList, -20);

    let heights = this.heights;
    let minIndex = this.getMinIndex(heights);
    for (let i = perNum; i < imgList.length; i++) {
      imgList[i].style.position = 'absolute';
      imgList[i].style.left = `${imgList[minIndex].offsetLeft}px`;
      imgList[i].style.top = `${heights[minIndex]}px`;
      //更新高度
      heights[minIndex] = heights[minIndex] + imgFromFrag[i].offsetHeight;
      minIndex = this.getMinIndex(heights);
    }
  }
  Waterfall.prototype.getMinIndex = function(heights) {
    const min = Math.min(...heights);
    return heights.findIndex(e => e === min);
  }
  Waterfall.prototype.getPerNum = function() {
    const imgList = document.getElementsByTagName('img');
    const singleWidth = imgList[0].offsetWidth;
    return Math.floor(this.width / singleWidth);
  }
  window.Waterfall = Waterfall
})()
console.log(Waterfall);
//b
// var b = 456;