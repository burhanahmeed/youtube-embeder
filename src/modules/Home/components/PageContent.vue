<template>
  <div>
    <div class="p-4 mb-8">
      <div class="m-auto w-fit">
        <Logo />
      </div>
    </div>
    <div>
      <a-input-search
        v-model:value="link"
        placeholder="Enter youtube URL"
        :loading="false"
        enter-button
        size="large"
        @search="handleSearch"
      />
    </div>
    <div class="flex flex-col" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

import Logo from '@/src/components/common/Logo.vue';

import useYoutube from '@/src/components/hooks/useYoutube';

export default defineComponent({
  components: {
    Logo,
  },
  setup() {
    const { youtubeId, getYoutubeId } = useYoutube();
    const router = useRouter();

    const link = ref<string>('');

    const handleSearch = () => {
      getYoutubeId(link.value)

      router.push({
        name: 'Viewer',
        query: {
          q: youtubeId.value
        }
      })
    }

    return {
      link,
      handleSearch
    }
  }
});
</script>
