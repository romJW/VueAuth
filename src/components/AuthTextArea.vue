<template>
  <div>
    <p class="textAreaName">{{ textAreaName }}</p>
    <textarea 
    class="textarea"
     :value="modelValue"
     @input="updateInput"
     :style="{ 'width': width, 'height': height}"
     :type="{type}"
    > </textarea>
  </div>
</template>
<style language="scss" scoped>
.textAreaName {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #929baa;
}
.textarea::-webkit-scrollbar {
  display: none;
}
.textarea {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  resize: none;
  width: 720px;
  height: 64px;
}
</style>
<script>
export default {
  props: { modelValue: [String, Number], textAreaName: [String, Number],width:[String],height:[String],  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
};
</script>
