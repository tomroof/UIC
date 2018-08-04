<template>
  <div class="form-input">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'AppInput'
  }
</script>

<style scoped lang="scss">
  .form-input {
    position: relative;
  }
  input[type=password] {
    padding-right: 80px;
  }

  input {
    width: 100%;

    border: none;
    background-color: #3F727A;

    padding: 18px 25px ;
    outline: none;
    border: 1px solid #3F727A;
    box-shadow: 0 12px 12px 0 rgba(52,84,122,0.06);
    border-radius: 100px;

    font-family: 'Lato';
    font-weight: 300;
    font-size: 22px;
    color: #FFFFFF;
    letter-spacing: 0;

    transition: all 0.3s ease;
    cursor: pointer;

    &:focus,
    &:active {
      background-color: transparent;
    }

    &::placeholder {
      color: rgba(255,255,255,0.2);
    }
  }

  .forgot-link {
    position: absolute;
    right: 25px;
    top: 50%;
    transform: translateY(-50%);

    font-family: 'Lato';
    font-weight: 300;
    font-size: 18px;
    color: rgba(255,255,255,0.7);
    letter-spacing: 0;
    text-align: right;
    text-decoration: none;
  }
</style>
