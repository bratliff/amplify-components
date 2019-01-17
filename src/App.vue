<template>
  <div style="margin:30px 0 0 30px">
    <h2>Amplify Dropdowns</h2>
    <div style="display:flex;width:500px;justify-content:space-between;">
      <AmplifyMultiDropdown button-text="Car Models" :items="['honda', 'toyota', 'chevy', 'ford', 'tesla']"/>
      <AmplifyMultiDropdown button-text="Fruits" :items="['orange', 'apple', 'pear', 'banana', 'grapefruit']"/>
      <AmplifyMultiDropdown button-text="Animals" :items="['bird', 'dog', 'cat', 'cow', 'chicken', 'bat', 'mouse']"/>
    </div>
    <h2>Amplify Radio Buttons</h2>
    <div style="display:flex;width:300px;justify-content:space-between;margin-top:20px;">
      <AmplifyRadioButton text="Yes" />
      <AmplifyRadioButton text="No" />
      <AmplifyRadioButton text="Maybe" />
    </div>

  </div>  
</template>

<script>
import AmplifyMultiDropdown from "./components/AmplifyMultiDropdown.vue";
import AmplifyRadioButton from "./components/AmplifyRadioButton.vue";

export default {
  name: "app",
  components: {
    AmplifyRadioButton,
    AmplifyMultiDropdown
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
