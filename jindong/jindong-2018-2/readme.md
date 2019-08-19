##
SEO:浏览器会爬取html内容，为了SEO 我们放文字，为了美观 我们放图片
场景：网站的Logo
## CSS 选择器优先级
important
style   (1000)
id      (100)
class   (10)
元素/伪元素(*)  (1)
#box span.active 111
#box span   101
同等优先级  按照css定义的顺序后出现的覆盖先出现的
```css
.red{color:red}
.blue{color:blue}
<sapn class="blue red">123</span>
```


## animation-fill-mode
forwards:动画结束时将元素的样式设为最后一帧的样式
none
backwards:动画开始前，将元素的样式设为动画第一帧的样式
both:forwards+backwards
