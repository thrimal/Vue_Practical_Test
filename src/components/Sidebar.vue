<template>
  <!-- <aside v-if="is_small==true|false"> -->
  <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
    <div class="header-content">
      <p class="header" id="header">
        <i class="fa-solid fa-atom header-icon m-2"></i>Dashboard
      </p>
    </div>

    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="ToggleMenu">
        <span class="material-icons">east</span>
      </button>
    </div>
    <div class="menu">
      <router-link to="/dashboard" class="button">
        <span class="material-icons">dashboard</span>
        <span class="text">Dashboard</span>
      </router-link>
      <router-link to="/customer" class="button">
        <span class="material-icons">account_box</span>
        <span class="text">Customer</span>
      </router-link>
      <router-link to="/product" class="button">
        <span class="material-icons">category</span>
        <span class="text">Product</span>
      </router-link>
      <router-link to="/" class="button">
        <span class="material-icons">account_balance_wallet</span>
        <span class="text">Income</span>
      </router-link>
      <router-link to="/" class="button">
        <span class="material-icons"> new_releases </span>
        <span class="text">Promote</span>
      </router-link>
      <router-link to="/" class="button">
        <span class="material-icons">help</span>
        <span class="text">Help</span>
      </router-link>
    </div>
    <!-- 
    <div class="flex"></div>

    <div class="menu">
      <router-link to="/settings" class="button">
        <span class="material-icons">settings</span>
        <span class="text">Settings</span>
      </router-link>
    </div> -->
  </aside>
</template>

<script setup>
import { ref, onMounted, onUpdated } from "vue";

let is_expanded = ref(localStorage.getItem("is_expanded") === "true");
let is_small = ref(localStorage.getItem("is_small") === "true");

onMounted(() => {
  const screen = window.matchMedia("(max-width: 640px)");

  if (screen.matches) {
    is_small.value = true;
    localStorage.setItem("is_small", true);
  } else {
    is_small.value = false;
    localStorage.setItem("is_small", false);
  }

  ToggleMenu(); // Call this function to set initial state
});

const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value;

  if (is_small.value) {
    localStorage.setItem("is_expanded", "false");
  } else {
    localStorage.setItem("is_expanded", is_expanded.value.toString());
  }

  const header = document.getElementById("header");

  if (!is_expanded.value) {
    header.style.display = "none";
  } else {
    header.style.display = "";
  }
};
</script>

<style lang="scss" scoped>
aside {
  display: flex;
  flex-direction: column;
  background-color: var(--dark);
  color: var(--light);
  width: calc(2rem + 50px);
  overflow: hidden;
  min-height: 100vh;
  padding: 0 1.6rem;
  // margin: -1.2rem;
  transition: 0.2s ease-in-out;
  position: absolute;
  .flex {
    flex: 1 1 0%;
  }

  .header-content {
    margin: 0 -1rem;
    width: 270px;
    .header {
      color: black;
      font-size: 30px;
      display: flex;
      align-items: center;
      width: 270px;
    }

    .header-icon {
      color: #000000;
    }
  }

  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    position: relative;
    transition: 0.2s ease-in-out;
    .menu-toggle {
      transition: 0.2s ease-in-out;
      position: relative;
      border-radius: 100px;
      display: flex;
      align-items: center;
      top: 5px;
      left: 3px;
      margin: 0 0 5px 0;
      align-items: center;
      border: white;
      // box-shadow: 0 0 4px 2px  rgba(0, 0, 0, 0.11);
      .material-icons {
        size: 45px;
        color: rgb(77, 77, 77);
        transition: 0.2s ease-out;
      }

      &:hover {
        .material-icons {
          color: black;
          transform: translateX(0.3rem);
        }
      }
    }
  }

  h3,
  .button .text {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    color: grey;
  }

  h3 {
    color: var(--grey);
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  .menu {
    margin: 0 -1rem;
    width: 270px;
    .button {
      display: flex;
      align-items: center;
      text-decoration: none;
      margin: 5px 0 5px 0;
      transition: 0.2s ease-in-out;
      padding: 0.5rem 1rem;

      .material-icons {
        font-size: 30px;
        color: grey;
        transition: 0.2s ease-in-out;
      }
      .text {
        color: grey;
        transition: 0.2s ease-in-out;
      }

      &:hover {
        background-color: rgb(240, 242, 243);
        border-radius: 10px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
          0 6px 20px 0 rgba(0, 0, 0, 0.2);

        .material-icons,
        .text {
          color: rgb(77, 77, 77);
        }
      }

      &.router-link-exact-active {
        background-color: rgb(141, 109, 201);
        border-right: 5px solid var(--primary);
        border-radius: 10px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
          0 6px 20px 0 rgba(0, 0, 0, 0.2);

        .material-icons,
        .text {
          color: white;
        }
      }
    }
  }

  .footer {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;

    p {
      font-size: 0.875rem;
      color: var(--grey);
    }
  }

  &.is-expanded {
    width: 290px;

    .menu-toggle-wrap {
      top: -3.5rem;
      // left: 10px;
      margin: 0 0 0 0;
      .menu-toggle {
        transform: rotate(-180deg);
      }
    }

    h3,
    .button .text {
      opacity: 1;
    }

    .button {
      .material-icons {
        margin-right: 1rem;
      }
    }

    .footer {
      opacity: 0;
    }
  }

  @media (max-width: 1366px) {
    position: absolute;
    z-index: 99;
  }
}
</style>
