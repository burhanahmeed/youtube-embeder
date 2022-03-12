<template>
  <Base>
    <Page>
      <div v-if="videoId">
        <youtube-iframe
          :video-id="videoId"
          player-width="100%"
        />
      </div>
    </Page>
  </Base>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { Page, Base } from '@/src/components/ui';

export default defineComponent({
  name: 'ViewerPage',
  components: {
    Base,
    Page,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();

    const videoId = ref<string|null>('');

    onMounted(() => {
      const { q } = route.query;

      if (!q) {
        router.push({
          name: 'Home',
        });
      }

      videoId.value = q || '';
    });

    return {
      videoId,
    };
  },
});
</script>
