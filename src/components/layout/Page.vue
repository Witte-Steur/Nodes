` `
<script lang="ts" setup>
  import { useSlots } from 'vue';

  import './Page.scss';

  const slots = useSlots();

  if (!slots.default) {
    throw new Error('Page should have content in default slot');
  }
</script>

<template>
  <section class="Page">
    <template v-if="slots.iconBar">
      <section class="Page--IconBar">
        <slot name="iconBar" />
      </section>
    </template>

    <section class="Page--Content">
      <slot />
    </section>
  </section>
</template>
