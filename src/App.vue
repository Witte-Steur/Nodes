<script lang="ts" setup>
  import { Page, IconBar } from 'lib/components';
</script>

<template>
  <Page>
    <template v-slot:iconBar>
      <IconBar />
    </template>

    <RouterView />
  </Page>
</template>
