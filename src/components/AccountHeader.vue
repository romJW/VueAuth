<template>
        <div class="account__header">
            <div class="account__picBox">
        <img src="../assets/profilePic.png" alt="pic">
        <div class="account__dash"></div>
            <p class="account__logo">Logo</p>
            </div>
            <AuthButton
            :color="btn.color" :background="btn.background"
            >Мой сертификат <ScanIcon/> </AuthButton>
        </div>
  </template>

  <script>
import AuthButton from '../components/AuthButton.vue';
import ScanIcon from '../components/icons/ScanIcon.vue'
export default {
    data(){
        return{
            btn: {
        color: '#FFFFFF',
        background: '#409FFF',
      },
        }
    },
    components: {
        AuthButton,
        ScanIcon
    }
    
}
  </script>

  <style lang="scss" scoped>
.account {

&__header {
    display:flex;
    justify-content:space-between;
    padding:10px;
    border-bottom: 1px solid  #CFD3DE;
    margin-bottom:32px;
}
&__picBox{
    display:flex;
    gap:16px;
    align-items:center;
}
&__dash{
    height:24px;
    border:1px solid #CFD3DE;
}
&__logo {
}

}

  </style>