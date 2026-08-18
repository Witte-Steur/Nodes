<script lang="ts" setup>
  import Page from './components/layout/Page.vue';

  import IconBar from './components/navigation/IconBar.vue';
</script>

<template>
  <Page>
    <template v-slot:iconBar>
      <IconBar />
    </template>

    <RouterView />
  </Page>
</template>
