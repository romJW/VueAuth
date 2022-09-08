<template>
  <div class="login">
    <form @submit.prevent="handleSubmit">
      <div class="login__container">
        <p class="login__logo">Logo</p>
        <div class="login__entrance">
          <h2 class="login__header">Войти</h2>
          <p class="login__explain">
            Для того чтобы идентифицировать себя в системе,<br />
            нужно ввести номер своего мобильного телефона
          </p>
          <AuthInput
            class="login__input"
            v-model="email"
            type="email"
            placeholder="example@example.com"
          />
          <div class="login__btns">
            <AuthButton :color="btnTransparent.color" :background="btnTransparent.background"
              >Забыли пароль</AuthButton
            >
            <AuthButton :color="btn.color" :background="btn.background">Подать заявку</AuthButton>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import AuthInput from '../components/AuthInput.vue';
import AuthButton from '../components/AuthButton.vue';

import axios from 'axios';
export default {
  data() {
    return {
      email: '',
      btnTransparent: {
        color: '#409FFF',
        background: '#FFFFFF',
      },
      btn: {
        color: '#FFFFFF',
        background: '#409FFF',
      },
    };
  },
  components: {
    AuthInput,
    AuthButton,
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await axios.post('https://629995ce6f8c03a978453425.mockapi.io/pizzas', {
          email: this.email,
        });
        console.log(response);
        this.$store.commit('SetCode', 12345);
        console.log(12345);
        this.$router.push('/check');
      } catch (error) {
        console.log(error.response);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.login {
  &__container {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  &__logo {
    font-weight: 500;
    font-size: 32px;
    line-height: 40px;
    color: #409fff;

    margin-bottom: 130px;
  }
  &__header {
    margin-bottom: 12px;

    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    text-align: left;
  }
  &__explain {
    margin-bottom: 17px;

    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #929baa;
    letter-spacing: 0.1em;
  }
  &__input {
    margin-bottom: 32px;
  }
  &__btns {
    display: flex;
    gap: 35px;
  }
}
</style>
