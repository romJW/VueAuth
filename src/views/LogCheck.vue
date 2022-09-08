<template>
  <div class="logcheck">
    <form @submit.prevent>
      <div class="logcheck__container">
        <p class="logcheck__logo">Logo</p>
        <div class="logcheck__entrance">
          <h2 class="logcheck__header">Андрій Андрійович</h2>
          <p class="logcheck__explain">
            На ваше электронное письмо <br />
            отправляется одноразовый код.
          </p>
          <p class="logcheck__code">Код подтверждения</p>
          <div class="logcheck__codeinput">
            <CodeInput v-model="code.first" />
            <span class="dash"></span>
            <CodeInput v-model="code.second" />
            <span class="dash"></span>
            <CodeInput v-model="code.third" />
            <span class="dash"></span>
            <CodeInput v-model="code.fourth" />
            <span class="dash"></span>
            <CodeInput v-model="code.fifth" />
          </div>
          <div class="logcheck__btns">
            <AuthButton
              @click="cancel"
              :color="btnTransparent.color"
              :background="btnTransparent.background"
              >Отменить</AuthButton
            >

            <AuthButton @click="handleSubmit" :color="btn.color" :background="btn.background"
              >Подтвердить</AuthButton
            >
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import CodeInput from '../components/CodeInput.vue';
import AuthButton from '../components/AuthButton.vue';
import axios from 'axios';
export default {
  data() {
    return {
      number: '',
      btnTransparent: {
        color: '##929BAA',
        background: '#FFFFFF',
        borderColor: '#929BAA',
      },
      btn: {
        color: '#FFFFFF',
        background: '#29CC44',
      },
      code: {
        first: null,
        second: null,
        third: null,
        fourth: null,
        fifth: null,
      },
    };
  },
  components: {
    CodeInput,
    AuthButton,
  },
  methods: {
    onChange(v) {
      console.log('onChange ', v);
    },
    onComplete(v) {
      console.log('onComplete ', v);
    },
    next(e) {
      e.target?.nextSibling?.focus();
    },
    handleSubmit() {
      if ( this.$store.getters.getPassword ===+Object.values(this.code).map((el) => el.toString()).join('')){
        this.$router.push('/personal');
      }
      else {
        this.$router.push('/error');
      }
    },
    cancel() {
      this.$router.push('/login');
    },
  },
};
</script>
<style lang="scss" scoped>
.logcheck {
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
  &__code {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;

    margin-bottom: 12px;
  }
  &__codeinput {
    margin-bottom: 32px;
  }
  &__btns {
    display: flex;
    gap: 35px;
  }
  &__codeinput {
    display: flex;
    gap: 15px;
    align-items: center;
  }
}
.dash {
  width: 8px;
  height: 0px;
  border: 1px solid #929baa;
}
</style>
