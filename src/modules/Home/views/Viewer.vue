<template>
  <Base>
    <Header />
    <Page>
      <div v-if="videoId">
        <youtube-iframe
          ref="yt"
          :video-id="videoId"
          player-width="100%"
        />
      </div>
    </Page>
  </Base>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useRoute, useRouter, LocationQueryValue } from 'vue-router';

import { Page, Base } from '@/src/components/ui';
import Header from '@/src/components/common/Header.vue';

export default defineComponent({
  name: 'ViewerPage',
  components: {
    Base,
    Page,
    Header,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();

    const videoId = ref<string|null|LocationQueryValue[]>('');

    onMounted(() => {
      const { q } = route.query;

      if (!q) {
        router.push({
          name: 'Home',
        });
      }

      videoId.value = q;
    });

    return {
      videoId,
    };
  },
});
</script>
