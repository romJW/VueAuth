<template>
  <div>
    <p class="title">{{ inputName }}</p>
    <input
    :style="{ 'width': width}"
      class="input"
      :value="modelValue"
      @input="updateInput"
    />
  </div>
</template>

<script>
export default {
  props: {
    inputName: [String],
    modelValue: [String, Number],
    width:[String],
    type:[Date,String,Number]
  },

  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #929baa;
}
.input {
  border: 1px solid #cfd3de;
  border-radius: 4px;
  width: 368px;
  height: 40px;
  padding: 0 8px;
}
::placeholder {
  text-align: end;
  margin-right: 8px;
}
</style>
