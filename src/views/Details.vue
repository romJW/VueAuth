<template>
  <div class="details">
    <form @submit.prevent="handleSubmit">
      <div class="details__container">
        <p class="details__logo">Logo</p>
        <div class="details__steps">
          <div class="details__step">
            <div class="details__circle activeStep fullyActiveStep"><CompletedIcon /></div>
          </div>
          <span class="details__bigDash"></span>
          <div class="details__step">
            <div class="details__circle activeStep">2</div>
          </div>
        </div>
        <div class="details__step-text">
          <p class="details__step-info activeStepInfo">Персональная информация</p>
          <p class="details__step-info">Детали сертификата</p>
        </div>
        <div class="details__box">
          <div class="details__inputs">
            <div class="details__dateBox">
              <p class="details__dateTitle">Выберите дату</p>
              <div class="details__date">
                <AuthInput
                  :width="inputWidth.dateWidth"
                  class="details__input"
                  v-model="user.dateFrom"
                  :type="inputType.date"
                />
                <div class="details__dash"></div>
                <AuthInput
                  :width="inputWidth.dateWidth"
                  class="details__input"
                  v-model="user.dateTo"
                  :type="inputType.date"
                />
              </div>
            </div>
            <div class="details__dateBox">
              <p class="details__dateTitle">Выберите время</p>
              <div class="details__time">
                <AuthInput
                  :width="inputWidth.timeWidth"
                  class="details__input"
                  v-model="user.timeFrom"
                  :type="inputType.dateTime"
                />
                <div class="details__dash"></div>
                <AuthInput
                  :width="inputWidth.timeWidth"
                  class="details__input"
                  v-model="user.timeTo"
                  :type="inputType.dateTime"
                />
              </div>
            </div>
          </div>
          <div class="details__additional">
            <AuthTextArea :textAreaName="textArea.goalName" v-model="user.goal" />
            <div class="details__checkbox">
              <AuthCheckBox v-model="user.checkedEnter" />
              <p class="details__checkbox-title">Вход</p>
              <AlertIcon />
            </div>
            <AuthTextArea
              :textAreaName="textArea.commentName"
              v-model="user.comment"
              :width="textArea.width"
              :height="textArea.height"
            />
          </div>
        </div>
        <div class="details__agree">
          <button class="details__addButton">Добавьте новый вход +</button>
          <div class="details__checkbox">
            <AuthCheckBox v-model="user.checkedData" />
            <p class="details__checkbox-title">Целостность данных подтверждает</p>
          </div>
          <div class="details__checkbox">
            <AuthCheckBox v-model="user.checkedRules" />
            <p class="details__checkbox-title">С правилами поведения в селе соглашаются</p>
            <QuestionIcon />
          </div>
        </div>
        <div class="details__btns">
          <AuthButton :color="btnTransparent.color" :background="btnTransparent.background"
            >Вернуться</AuthButton
          >
          <AuthButton :color="btn.color" :background="btn.background">Сохранить<SaveIcon/></AuthButton>
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
import CompletedIcon from '../components/icons/CompletedIcon.vue';
import AlertIcon from '../components/icons/AlertIcon.vue';
import QuestionIcon from '../components/icons/QuestionIcon.vue';
import SaveIcon from '../components/icons/SaveIcon.vue';

import AuthTextArea from '../components/AuthTextArea.vue';
import AuthCheckBox from '../components/AuthCheckBox.vue';

import axios from 'axios';
export default {
  data() {
    return {
      inputType: {
        date: 'date',
        dateTime: 'datetime',
      },
      inputWidth: {
        dateWidth: '153px',
        timeWidth: '76px',
      },
      user: {
        dateFrom: '',
        dateTo: '',
        timeFrom: '',
        timeTo: '',
        goal: '',
        comment: '',
        checkedEnter: false,
        checkedData: false,
        checkedRules: false,
      },
      btnTransparent: {
        color: '#929BAA',
        background: '#FFFFFF',
      },
      btn: {
        color: '#FFFFFF',
        background: '#29CC44',
      },
      inputName: {
        date: 'Выберите дату',
        time: 'Выберите Время',
        empty: '',
      },
      textArea: {
        goalName: 'Цель визита',
        commentName: 'Комментарий',
        width: '272px',
        height: '40px',
      },
      options: [
        { value: 1, name: 'легковая' },
        { value: 2, name: 'грузовая' },
      ],
      select: '',
    };
  },
  components: {
    AuthInput,
    AuthButton,
    AuthSelect,
    AuthTextArea,
    AuthCheckBox,
    AlertIcon,
    CarIcon,
    CameraIcon,
    RightArrow,
    LeftArrow,
    CompletedIcon,
    QuestionIcon,
    SaveIcon
  },
  methods: {
    async handleSubmit() {
      try {
      const response = await axios.post('https://629995ce6f8c03a978453425.mockapi.io/pizzas', {
        dateFrom: this.dateFrom,
        dateTo: this.dateTo,
        timeFrom: this.timeFrom,
        timeTo:this.timeTo,
        goal: this.goal,
        comment:this.comment,
        checkedEnter: this.checkedEnter,
        checkedData: this.checkedData,
        checkedRules: this.checkedRules,
      });
      console.log(response);
      this.$router.push('/account');
      
    }catch(error){
      console.log(error.response)
    }},
  },
};
</script>
<style lang="scss" scoped>
.details {
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

  &__dateTitle {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #929baa;
  }
  &__step-text {
    display: flex;
    gap: 34px;
    margin-bottom: 32px;
  }

  &__circle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 9999px;
    border: 1px solid #cfd3de;
  }

  &__bigDash {
    height: 0px;
    width: 214px;
    border: 1px solid #cfd3de;
  }

  &__dash {
    height: 0px;
    width: 16px;
    border: 1px solid #929baa;
  }

  &__box {
    box-shadow: 0px 8px 20px rgba(56, 69, 93, 0.1), 0px 4px 9px rgba(56, 69, 93, 0.08),
      0px 2px 5px rgba(56, 69, 93, 0.0596107), 0px 1px 3px rgba(56, 69, 93, 0.05),
      0px 0.598509px 1.5px rgba(56, 69, 93, 0.0403893), 0px 0.249053px 1px rgba(56, 69, 93, 0.03);
    border-radius: 4px;
    padding: 16px;
    margin-bottom: 32px;
  }

  &__inputs {
    display: flex;
    gap: 16px;
    margin-bottom: 32px;
  }

  &__date {
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items: center;
  }

  &__input {
  }

  &__time {
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items: center;
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
    flex-direction: column;
    gap: 18px;
  }
  &____select {
    margin-top: 25px;
  }
  &__btns {
    display: flex;
    gap: 35px;
  }
  &__checkbox {
    display: flex;
    gap: 5px;
    align-items: center;
  }
  &__checkbox-title {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #38455d;
  }
  &__addButton {
    width: 752px;
    height: 40px;
    border: 1px solid #929baa;
    border-radius: 4px;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #929baa;
    background: #fff;
  }
  &__agree {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 32px;
  }
}
</style>
