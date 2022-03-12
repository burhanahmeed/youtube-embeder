<template>
  <div>
    <div class="p-4 mb-8">
      <div class="m-auto w-fit">
        <Logo />
      </div>
    </div>
    <div>
      <a-input-search
        v-model:value="value"
        placeholder="input search loading with enterButton"
        loading
        enter-button
        size="large"
      />
    </div>
    <div class="flex flex-col" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Logo from '@/src/components/common/Logo.vue';

export default defineComponent({
  components: {
    Logo,
  },
});
</script>
