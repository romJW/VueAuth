<template lang="">
  <div class="account__status">
    <p class="account__status-number">Проверка<br />{{number }}</p>
    <div class="account__status-time">
      <p class="account__status-timeData">{{timeFrom }}</p>
      <p class="account__status-prep">до</p>
      <p class="account__status-timeData">{{timeTo }}</p>
    </div>
    <div class="account__status-date">
      <p class="account__status-dateData">{{ dateFrom }}</p>
      <p class="account__status-prep">до</p>
      <p class="account__status-dateData">{{ dateTo }}</p>
    </div>
    <div class="account__status-icons">
      <CarIcon />
      <CarIcon />
    </div>
    <div class="account__status-view">
      <p class="account__status-name">{{user }}</p>
      <EyeIcon />
    </div>
  </div>
</template>
<script>
import AuthButton from '../components/AuthButton.vue';
import AccountHeader from '../components/AccountHeader.vue';
import AccountCard from '../components/AccountCard.vue';
import ScanIcon from '../components/icons/ScanIcon.vue';
import FilterIcon from '../components/icons/FilterIcon.vue';
import AddFileIcon from '../components/icons/AddFileIcon.vue';
import CarIcon from '../components/icons/CarIcon.vue';
import EyeIcon from '../components/icons/EyeIcon.vue';
import GreenStatusIcon from '../components/icons/GreenStatusIcon.vue';
export default {
  data() {
    return {
      btn: {
        color: '#FFFFFF',
        background: '#409FFF',
      },
    };
  },
  props: ['number','timeFrom',"timeTo",'dateTo','dateFrom','user' ],
  components: {
    AuthButton,
    AccountHeader,
    AccountCard,
    ScanIcon,
    FilterIcon,
    AddFileIcon,
    CarIcon,
    EyeIcon,
    GreenStatusIcon,
  },
};
</script>
<style lang="scss" scoped>
.account {
  &__status {
    max-width: 712px;
    margin: 0 auto;
    display: flex;
    gap: 16px;
    background: #fff9e6;
    border: 0px solid #ffcc33;
    border-left-width: 4px;
    padding: 16px 20px;
  }

  &__status-number {
  }

  &__status-time {
    display: flex;
    gap: 12px;
  }

  &__status-timeData {
  }

  &__status-prep {
  }

  &__status-date {
    display: flex;
    gap: 12px;
  }

  &__status-dateData {
  }

  &__status-icons {
    display: flex;
    gap: 25px;
  }
  &__status-view {
    display: flex;
    gap: 42px;
  }
  &__status-name {
  }
}
</style>
