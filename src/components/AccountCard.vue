<template>
  <div class="accountcard__box">
    <div class="accountcard__box-content">
      <div class="accountcard__mainInfo">
        <img src="../assets/Avatar.png" alt="" />
        <div class="accountcard__mainInfo-text">
          <p class="accountcard__name">Андрей Андрейский</p>
          <div class="accountcard__doc">
            <DocIcon/>
            <p class="accountcard__docNumber">342849712</p>
          </div>
          <div class="accountcard__phone">
            <PhoneIcon/>
            <p class="accountcard__phoneNumber">0548832519</p>
          </div>
          
        </div>
      </div>

      <div>
        <div></div>
      </div>
    </div>
    <div class="accountcard__secondaryInfo">
      <div class="accountcard__secondaryInfo-text">
        <div class="accountcard__car">
            <CarIcon />
            <p class="accountcard__carNumber"> 000-00-000</p>
    </div>
    <div class="accountcard__car">
        <CarIcon />
        <p class="accountcard__carType"> легковая</p>
    </div>
      </div>
      <div class="accountcard__icon"><PenIcon/></div>
    </div>
  </div>
</template>

<script>
import CarIcon from '../components/icons/CarIcon.vue';
import PenIcon from '../components/icons/PenIcon.vue';
import DocIcon from '../components/icons/DocIcon.vue';
import PhoneIcon from '../components/icons/PhoneIcon.vue';
export default {
  components: {
    CarIcon,
    PenIcon,
    DocIcon,
    PhoneIcon
  },
};
</script>

<style lang="scss">
.accountcard {
  &__box {
    max-width: 712px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    box-shadow: 0px 8px 20px rgba(56, 69, 93, 0.1), 0px 4px 9px rgba(56, 69, 93, 0.08),
      0px 2px 5px rgba(56, 69, 93, 0.0596107), 0px 1px 3px rgba(56, 69, 93, 0.05),
      0px 0.598509px 1.5px rgba(56, 69, 93, 0.0403893), 0px 0.249053px 1px rgba(56, 69, 93, 0.03);
    border-radius: 4px;
    margin-bottom: 32px;
  }
  &__box-content {
    display: flex;
    justify-content: space-between;
  }
  &__cardInfo {
    display: flex;
    justify-content: space-between;
  }
  &__mainInfo {
    display: flex;
    gap: 15px;
    padding: 16px;
  }
  &__mainInfo-text {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  &__name {
  }

  &__doc {
    display:flex;
    align-items:center;
    gap:12px;
  }

  &__phone {
    display:flex;
    align-items:center;
    gap:12px;
  }

  &__secondaryInfo {
    
    display:flex;
  }

  &__secondaryInfo-text {
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 33px;
  }

  &__edit {
    width: 40px;
    background: #ebeef5;
  }
  &__icon{
    display:flex;
    align-items:center;
    justify-content: center;
    background: #EBEEF5;
    padding: 0 12px;
  }
  &__car{
    display:flex;
    align-items:center;
    gap:32px;
  }
}
</style>
