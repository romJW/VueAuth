<template>
  <button class="btn" :style="{ 'color': color, 'background-color': background, 'border-color':borderColor }" @click="$emit('click')">
    <slot></slot>
  </button>
</template>
<script>
export default {
  props: ['color', 'background', 'borderColor'],
  methods:{
    
  }
};
</script>
<style lang="scss" scoped>
.btn {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;

  width: 176px;
  height: 40px;
  border-radius: 4px;
  border:white;
  border:1px solid;

  display:flex;
  align-items:center;
  justify-content:center;
  gap:25px;
}
</style>
