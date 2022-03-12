<template>
  <header class="p-4">
    <div>
      <nav class="flex space-x-4 items-center">
        <a href="/">
          <ArrowLeftOutlined />
        </a>
        <span>Youtube title</span>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ArrowLeftOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  name: 'HeaderComponent',
  components: {
    ArrowLeftOutlined,
  },
});
</script>
