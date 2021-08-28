<template>
  <div class="sidebar">
    <nuxt-link :to="{ name: 'index' }">
      <SvgIcon name="logo" :width="150" />
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'TheSidebar',
}
</script>

<style scoped lang="scss">
.sidebar {
  width: $sidebar-width;
  background-color: $gray-light;
  height: 100vh;
  padding: rem(10px) rem(22px) rem(22px) rem(22px);
}
</style>
