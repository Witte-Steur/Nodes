<script lang="ts" setup>
  import Home from '../icons/Home.vue';
  import Account from '../icons/Account.vue';

  import './IconBar.scss';
</script>

<template>
  <ul class="IconBar">
    <li>
      <RouterLink to="/"><Home /></RouterLink>
    </li>
    <li>
      <RouterLink to="/account"><Account /></RouterLink>
    </li>
  </ul>
</template>
