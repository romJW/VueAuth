<template>
    <div>
        <input
        class="checkbox"
        type="checkbox"
        :value="modelValue"
     @input="updateInput"
        />
    
    </div>
</template>
<script>
    export default {
      props: { modelValue: [Boolean]},
      methods: {
        updateInput(event) {
          this.$emit('update:modelValue', event.target.value);
        },
      },
    };
    </script>
<style lang="scss">
    .checkbox{
        width:16px;
        height:16px;
        border: 1px solid #CFD3DE;
        border-radius: 2px;
    }
</style>