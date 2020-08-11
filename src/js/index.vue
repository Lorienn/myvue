<template>
  <div class="index">
    <router-view/>
  </div>
</template>

<script>
export default {
	name: 'App'
}
</script>

<style lang="scss">
@import '../css/base.scss';

html,
body {
  height: 100%;
}

.index {
  height: 100%;
}
</style>
