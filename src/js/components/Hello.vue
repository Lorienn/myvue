<template>
  <div class="hello">
    <img class="logo" src="../../img/logo.png">
    <h1 class="title">MyVue</h1>
    <div class="btns">
      <a class="start" href="https://github.com/Lorienn/myvue" target="_blank">Get Started</a>
      <a class="github" href="https://github.com/Lorienn/myvue" target="_blank">Github</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hello'
}
</script>

<style lang="scss" scoped>
.hello {
  padding-top: 10%;

  .logo {
    display: block;
    width: 250px;
    height: 250px;
    margin: 0 auto 10px;
  }

  .title {
    margin-bottom: 30px;
    font-size: 36px;
    font-weight: 600;
    color: #2c3e50;
    text-align: center;
  }

  .btns {
    display: flex;
    justify-content: center;
    font-size: 16px;
    font-weight: 700;

    a {
      display: block;
      width: 150px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      border-radius: 15px;
      cursor: pointer;
    }

    .start {
      margin-right: 10px;
      color: #fff;
      background: #3eaf7c;
    }

    .github {
      color: #4f5959;
      background: #f6f6f6;
    }
  }
}
</style>
