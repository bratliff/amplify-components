<template>
  <div class="amplify-radio-btn">
    <label>{{text}}
      <input type="radio" name="answer" value="No">
      <div class="radio-div"></div>
    </label>
  </div>
</template>

<script>
export default {
  name: "AmplifyRadioButton",
  props: {
    text: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://amplifylitco.github.io/styles/assets/toolkit/styles-release/amplify-styles.css";
</style>
