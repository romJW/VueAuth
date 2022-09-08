<template>
  <div class="personal">
    <form @submit.prevent="handleSubmit">
      <div class="personal__container">
        <p class="personal__logo">Logo</p>
        <div class="personal__steps">
          <div class="personal__step">
            <div class="personal__circle activeStep">1</div>
          </div>
          <span class="personal__dash"></span>
          <div class="personal__step">
            <div class="personal__circle">2</div>
          </div>
        </div>
        <div class="personal__step-text">
          <p class="personal__step-info activeStepInfo">Персональная информация</p>
          <p class="personal__step-info">Детали сертификата</p>
        </div>
        <div class="personal__box">
          <div class="personal__inputs">
            <div class="personal__data">
              <AuthInput
                :inputName="inputName.name"
                class="personal__input"
                v-model="user.name"
                type="text"
              />
              <AuthInput
                :inputName="inputName.surname"
                class="personal__input"
                v-model="user.surname"
                type="text"
              />
            </div>
            <div class="personal__contacts">
              <AuthInput
                :inputName="inputName.doc"
                class="personal__input"
                v-model="user.doc"
                type="text"
              />
              <AuthInput
                :inputName="inputName.mobile"
                class="personal__input"
                v-model="user.mobile"
                type="phone"
              />
            </div>
            <div class="personal__image-upload">
              <CameraIcon />
              <p class="personal__upload-explain">Загрузить<br />изображение</p>
              <p class="personal__upload-info">Максимальный<br />размер файла<br />Это 20mb</p>
            </div>
          </div>
          <div class="personal__additional">
            <AuthSelect v-model="select" :options="options" />
            <CarIcon />
            <AuthInput v-model="user.car" />
            <CarIcon />
          </div>
        </div>
        <div class="personal__btns">
            <AuthButton :color="btnTransparent.color" :background="btnTransparent.background"
              ><leftArrow/>Обратно</AuthButton
            >
            <AuthButton :color="btn.color" :background="btn.background">Далее <rightArrow/></AuthButton>
          </div>
      </div>
    </form>
  </div>
</template>
<script>
import AuthInput from '../components/AuthInput.vue';
import AuthButton from '../components/AuthButton.vue';
import AuthSelect from '../components/AuthSelect.vue';
import CarIcon from '../components/icons/CarIcon.vue';
import CameraIcon from '../components/icons/CameraIcon.vue';
import RightArrow from '../components/icons/RightArrow.vue';
import LeftArrow from '../components/icons/LeftArrow.vue';

import axios from 'axios';
export default {
  data() {
    return {
      user:{
        name:"",
        surname:"",
        doc:null,
        mobile:null,
        car:null

      },
      btnTransparent: {
        color: '#929BAA',
        background: '#FFFFFF',
      },
      btn: {
        color: '#FFFFFF',
        background: '#409FFF',
      },
      inputName: {
        name: 'Имя',
        surname: 'Фамилия',
        doc: 'Номер удостоверения личности',
        mobile: 'Номер мобильного телефона',
      },
      options:[
        {value:1, name:"легковая"},
        {value:2, name:"грузовая"},
      ],
      select:''
    };
  },
  components: {
    AuthInput,
    AuthButton,
    AuthSelect,
    CarIcon,
    CameraIcon,
    RightArrow,
    LeftArrow
  },
  methods: {
    async handleSubmit() {
      try{const response = await axios.post('https://629995ce6f8c03a978453425.mockapi.io/pizzas', {
        name:this.user.name,
        surname:this.user.surname,
        doc:this.user.doc,
        mobile:this.user.mobile,
        car:this.user.car,
        select:this.select,
      });
      console.log(response);
      this.$router.push('/details');
    }
    catch(error){
      console.log(error.response);
    }
  },}
      
};
</script>
<style lang="scss" scoped>
.personal {
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

  &__steps {
    display: flex;
    align-items: center;
  }

  &__step {
  }
  &__step-text {
    display: flex;
    gap: 34px;
    margin-bottom:32px;
  }

  &__circle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 9999px;
    border: 1px solid #CFD3DE;
  }

  &__step-info {
  }

  &__dash {
    height: 0px;
    width: 180px;
    border: 1px solid #cfd3de;
  }

  &__box {
    box-shadow: 0px 8px 20px rgba(56, 69, 93, 0.1), 0px 4px 9px rgba(56, 69, 93, 0.08),
      0px 2px 5px rgba(56, 69, 93, 0.0596107), 0px 1px 3px rgba(56, 69, 93, 0.05),
      0px 0.598509px 1.5px rgba(56, 69, 93, 0.0403893), 0px 0.249053px 1px rgba(56, 69, 93, 0.03);
    border-radius: 4px;
    padding: 16px;
    margin-bottom:32px;
  }

  &__inputs {
    display: flex;
    gap: 16px;
    margin-bottom:32px;
  }

  &__data {
    display:flex;
    flex-direction: column;
    gap:16px;
  }

  &__input {
  }

  &__contacts {
    display:flex;
    flex-direction: column;
    gap:16px;
  }

  &__image-upload {
    border: 1px dashed #cfd3de;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    cursor: pointer;
    margin-bottom: 16px;
  }

  &__upload-explain {
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.01em;
    color: #929baa;

    text-align: center;
    margin-bottom: 0;
  }

  &__upload-info {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #cfd3de;
    text-align: center;
  }

  &__additional {
    display: flex;
    align-items: center;
    gap: 18px;
  }
  &____select {
    margin-top: 25px;
  }
  &__btns {
    display: flex;
    gap: 35px;
  }
}
</style>
