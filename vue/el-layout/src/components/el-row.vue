
<script>
export default {
  render (h) {
    // return 'render 函数'
    let obj = h(
      'div',
      {},
      'render 函数'
    )
    console.log(obj);
    return obj;
  }
}
</script>

<style scoped>
.el-row {
  width: 100%;
}
</style>
