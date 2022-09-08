<template>
  <div>
    <div class="input__box">
      <input class="input" type="number" :value="modelValue" @input="updateInput" maxlength=1 />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    inputName: [String],
    modelValue1: [Number],
    modelValue2: [Number],
    modelValue3: [Number],
    modelValue4: [Number],
    modelValue5: [Number],
  },

  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value);
      
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  border: 1px solid #409fff;
  border-radius: 4px;
  width: 40px;
  height: 40px;
  text-align:center;
}
.input__box {
  display: flex;
  gap: 17px;
  align-items: center;
}


</style>
