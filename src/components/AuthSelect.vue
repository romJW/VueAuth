<template>
    <div>
  <select class="select" name="" v-model="modelValue" @change="changeOption">
    <option disabled value="">Выберите</option>
    <option class="option" v-for="option in options" :value="option.value" :key="option.value">
      {{ option.name }}
    </option>
  </select>
  <Arrow/>
</div>
</template>
<script>
    import Arrow from "./icons/Arrow.vue"
export default {
    components:{
        Arrow
    },
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOption(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
};
</script>
<style lang="scss" scoped>
.select {
  border: 1px solid #cfd3de;
  border-radius: 4px;
  width: 368px;
  height: 40px;
  padding: 0 8px;
  appearance: none;
  position:relative;
}


</style>
