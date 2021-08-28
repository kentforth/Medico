<template>
  <component
    :is="dynamicIcon"
    :width="width"
    :height="height"
    class="svg-icon"
    v-on="$listeners"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({ name: 'SvgIcon' })
export default class SvgIcon extends Vue {
  @Prop({ required: true, type: String }) name!: string
  @Prop({ type: [Number, String] }) width!: number | string
  @Prop({ type: [Number, String] }) height!: number | string

  get dynamicIcon(): string {
    return require(`@/assets/icons/${this.name}.svg`).default
  }
}
</script>
