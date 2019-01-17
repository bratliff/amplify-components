<template>
  <div class="amplify-dropdown" id="single-select-menu">
        <button class="btn menu-btn" type="button" aria-haspopup="true" aria-expanded="false">Select one item</button>
        <ul class="dropdown-menu">
            <li class="dropdown-item" tabindex="0">Answer 1</li>
            <li class="dropdown-item" tabindex="0">Answer 2</li>
            <li class="dropdown-item" tabindex="0">Answer 3</li>
            <li class="dropdown-item" tabindex="0">Answer 4 Is a Really a Much Longer Answer Than it Should Be</li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "AmplifyDropdown",
  methods: {
    openMenu: function() {
      this.isMenuActive = !this.isMenuActive;

      event.target.getAttribute("aria-expanded") == "false"
        ? event.target.setAttribute("aria-expanded", "true")
        : event.target.setAttribute("aria-expanded", "false");
    },
    closeMenu: function() {
      this.isMenuActive = false;
      this.$refs.menuBtn.focus();
      this.$refs.menuBtn.setAttribute("aria-expanded", "false");
    },
    checkboxClick: function(event) {
      event.target.parentNode.getAttribute("aria-checked") == "false"
        ? event.target.parentNode.setAttribute("aria-checked", "true")
        : event.target.parentNode.setAttribute("aria-checked", "false");
    },
    focusFirstItem: function(event) {
      event.preventDefault();
      this.$refs.listItem[0].focus();
    },
    chooseItem: function(event) {
      event.preventDefault();
      event.target.click();
      event.target.focus();
    },
    clickItem: function(event) {
      event.target.focus();
    },
    preventDefault: function(event) {
      event.preventDefault();
      event.stopPropagation();
    }
  },
  props: {
    buttonText: String,
    items: Array
  },
  created: function() {
    window.addEventListener("click", e => {
      if (
        !e.target.classList.contains("multiselect-btn") &&
        !e.target.classList.contains("checkbox-div") &&
        !e.target.classList.contains("dropdown-item") &&
        e.target.nodeName !== "INPUT" &&
        e.target.nodeName !== "SPAN"
      ) {
        this.isMenuActive = false;
      }
    });
  },
  data: function() {
    return {
      isMenuActive: false,
      ariaChecked: "false",
      listitems: [
        "Default Item 1",
        "Default Item 2",
        "Default Item 3",
        "Default Item 4",
        "Default Item 5"
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://amplifylitco.github.io/styles/assets/toolkit/styles-release/amplify-styles.css";
</style>
