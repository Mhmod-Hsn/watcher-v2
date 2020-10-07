<template>
  <div
    class="border-top border-l-gray text-muted text-center py-2 font-weight-bold"
  >All rights reserved to Mahmoud Hassan &copy; {{currentYear}}</div>
</template>

<script>
export default {
  name: 'Footer',
  computed:{
    currentYear(){
      let x = new Date;
      return x.getFullYear();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
