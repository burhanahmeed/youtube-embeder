<template>
  <Base>
    <Page>

    </Page>
  </Base>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Page, Base } from '@/src/components/ui'

export default defineComponent({
  name: 'ViewerPage',
  components: {
    Base,
    Page,
  },
})
</script>
