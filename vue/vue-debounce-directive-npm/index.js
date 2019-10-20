
//<div v-debounce = "open">立即购买<div>
function debounce(fn, wait) {
  var timeout = null;
  return function () {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(fn, wait);
  }
}
Vue.directive('debounce', {
  inserted: (el, binding) => {
    console.log(el, binding);
  },
  bind: function(el, binding) {
    // onClick
    // addEventListener
    el.addEventListener('click', debounce(binding.value, 2000));
  },
  unbind: function() {}
})

if(typeof exports === 'object') {
  module.exports = plugin;
} else if (window) {
  window.vue.use((window) => {
    window.Vue.use(Plugin)
  })
}