<template>
  <Base>
    <Page :class-name="`min-h-screen`">
      <div class="container max-w-xl md:m-auto">
        <PageContent />
      </div>
    </Page>
  </Base>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Base, Page } from '@/src/components/ui';
import PageContent from '../components/PageContent.vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    Base,
    Page,
    PageContent,
  },
});
</script>
