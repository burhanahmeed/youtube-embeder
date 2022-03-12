<template>
  <div
    class="flex flex-col p-4"
    :class="className"
    :style="styleProps"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BaseLayout',
  props: {
    className: {
      type: String,
      default: '',
    },
    styleProps: {
      type: Object,
      default: () => {}, // eslint-disable-line
    },
  },
};
</script>
