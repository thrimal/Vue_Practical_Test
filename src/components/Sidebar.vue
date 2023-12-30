<template>
  <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
    <div class="header-content">
      <p class="header" id="header" v-if="is_expanded">
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
      <router-link to="/customer" active class="button">
        <span class="material-icons">account_box</span>
        <span class="text">Customer</span>
      </router-link>
      <router-link to="/test" class="button">
        <span class="material-icons">category</span>
        <span class="text">Product</span>
      </router-link>
      <router-link to="/test" class="button">
        <span class="material-icons">account_balance_wallet</span>
        <span class="text">Income</span>
      </router-link>
      <router-link to="/test" class="button">
        <span class="material-icons"> new_releases </span>
        <span class="text">Promote</span>
      </router-link>
      <router-link to="/test" class="button">
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
import { ref } from "vue";
import logoURL from "../assets/vue.svg";

const is_expanded = ref(localStorage.getItem("is_expanded") === "true");
const header = document.getElementById("header");

const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value;
  localStorage.setItem("is_expanded", is_expanded.value);
};
</script>

<style lang="scss" scoped>
aside {
  display: flex;
  flex-direction: column;
  background-color: var(--dark);
  color: var(--light);
  width: calc(2rem + 32px);
  overflow: hidden;
  min-height: 100vh;
  padding: 0 1.6rem;
  // margin: -1.2rem;
  transition: 0.2s ease-in-out;

  .flex {
    flex: 1 1 0%;
  }

  .header-content {
    margin: 0 -1rem;
    width: 270px;
    
    height: 70px;
    .header {
      color: black;
      font-size: 30px;
      display: flex;
      align-items: center;
      width: 270px;
      position: relative;
    }

    .header-icon {
      color: #000000;
      position: relative;
    }
  }

  .menu-toggle-wrap {
    display: flex;
    justify-content: center;
    position: relative;
    transition: 0.2s ease-in-out;
    .menu-toggle {
      transition: 0.2s ease-in-out;
      position: relative;
      border-radius: 100px;
      display: flex;
      align-items: center;
      top: 25px;
      align-items: center;
      border: white;
      box-shadow: 0 0 4px 2px  rgba(0, 0, 0, 0.11);
      .material-icons {
        size: 45px;
        color: rgb(77, 77, 77);
        transition: 0.2s ease-out;
        position: relative;
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
    position: relative;
    top: 40px;
    margin: 0 -1rem;
    width: 300px;
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
    width: var(--sidebar-width);

    .menu-toggle-wrap {
      top: -3rem;

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

  @media (max-width: 1024px) {
    position: relative;
    z-index: 99;
  }
}
</style>
