<template>
  <div class="container">
    <a-row>
      <a-col :span="4"> </a-col>
      <a-col :span="16">
        <user-card></user-card>
      </a-col>
      <a-col :span="4"> </a-col>
    </a-row>
  </div>
</template>

<script lang="ts" setup>
  import UserCard from './user-card/index.vue';
</script>

<script lang="ts">
  export default {
    name: 'UserCenter',
  };
</script>

<style scoped lang="less">
  .container {
    padding: 20px;
  }
</style>
