<template>
  <div class="account">
    <AccountHeader />
    <div class="account__container">
      <AccountCard />
      <div class="account__alowance">
        <p class="account__alowance-title">Разрешение на въезд</p>
        <div class="account__alowance-btns">
          <FilterIcon />
          <AuthButton :color="btn.color" :background="btn.background" @click="directTo"
            >Разрешение<AddFileIcon />
          </AuthButton>
        </div>
      </div>
      <div>
        <StatusBar
          :number="status.number"
          :dateFrom="status.dateFrom"
          :dateTo="status.dateTo"
          :timeFrom="status.timeFrom"
          :timeTo="status.timeTo"
          :user="status.user"
        />
        <StatusBar
          :number="status.number"
          :dateFrom="status.dateFrom"
          :dateTo="status.dateTo"
          :timeFrom="status.timeFrom"
          :timeTo="status.timeTo"
          :user="status.user"
        />
        <StatusBar
          :number="status.number"
          :dateFrom="status.dateFrom"
          :dateTo="status.dateTo"
          :timeFrom="status.timeFrom"
          :timeTo="status.timeTo"
          :user="status.user"
        />
        <StatusBar
          :number="status.number"
          :dateFrom="status.dateFrom"
          :dateTo="status.dateTo"
          :timeFrom="status.timeFrom"
          :timeTo="status.timeTo"
          :user="status.user"
        />
        <StatusBar
          :number="status.number"
          :dateFrom="status.dateFrom"
          :dateTo="status.dateTo"
          :timeFrom="status.timeFrom"
          :timeTo="status.timeTo"
          :user="status.user"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AuthButton from '../components/AuthButton.vue';
import AccountHeader from '../components/AccountHeader.vue';
import AccountCard from '../components/AccountCard.vue';
import StatusBar from '../components/StatusBar.vue';

import ScanIcon from '../components/icons/ScanIcon.vue';
import FilterIcon from '../components/icons/FilterIcon.vue';
import AddFileIcon from '../components/icons/AddFileIcon.vue';
import CarIcon from '../components/icons/CarIcon.vue';
import EyeIcon from '../components/icons/EyeIcon.vue';
export default {
  data() {
    return {
      btn: {
        color: '#FFFFFF',
        background: '#409FFF',
      },
      status: {
        number: '122323',
        timeFrom: '11:30',
        timeTo: '11:30',
        dateFrom: '23.09.2020',
        dateTo: '23.09.2020',
        user: 'Андрей Андрейский',
      },
    };
  },
  components: {
    AuthButton,
    AccountHeader,
    AccountCard,
    StatusBar,
    ScanIcon,
    FilterIcon,
    AddFileIcon,
    CarIcon,
    EyeIcon,
  },
  methods: {
    directTo() {
      this.$router.push('/details');
    },
  },
};
</script>

<style lang="scss" scoped>
.account {
  &__header {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #cfd3de;
  }
  &__picBox {
    display: flex;
    gap: 16px;
    align-items: center;
  }
  &__dash {
    height: 24px;
    border: 1px solid #cfd3de;
  }
  &__logo {
  }

  &__alowance {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    max-width: 712px;
    margin-bottom: 16px;
  }
  &__alowance-title {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
  }
  &__alowance-btns {
    display: flex;
    gap: 8px;
  }
}
</style>
