<template>
  <div class="default">
    <TheSidebar />
    <Nuxt />
  </div>
</template>

<script>
import TheSidebar from '@/components/common/TheSidebar'
export default {
  name: 'Default',
  components: { TheSidebar },
}
</script>

<style scoped lang="scss">
.default {
  display: grid;
  grid-template-columns: max-content 1fr;
}
</style>
