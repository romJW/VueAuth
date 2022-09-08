<template>
    <div class="details">
        <div class="account__header">
        <img src="../assets/profilePic.png" alt="pic">
            <p class="account__logo">Logo</p>
            <AuthButton
            
            />
        </div>
        <div class="account__container">

          </div>
    </div>
  </template>

  <script>
import AuthButton from '../components/AuthButton.vue';
export default {
    components: {
        AuthButton
    }
}
  </script>

  <style lang="scss" scoped>

  </style>