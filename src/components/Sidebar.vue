<script>
import { ref } from "vue";
import { SidebarMenu } from "vue-sidebar-menu";
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";

export default {
  components: {
    SidebarMenu,
  },

  setup() {
    const menu = ref([

      {
        header: "Dashboard",
        hiddenOnCollapse: true,
      },
      {
        href: "/dashboard",
        title: "Dashboard",
        icon: "fa-solid fa-gauge",
        // child: [
        //   {
        //     href: "/charts/sublink",
        //     title: "Sub Link",
        //   },
        // ],
      },
      {
        href: "/customer",
        title: "Customer",
        icon: "fa fa-user",
        child: [
        //   {
        //     href: "/charts/sublink",
        //     title: "Sub Link",
        //   },
        ],
      },
      {
        href: "/user",
        title: "Charts",
        icon: "fa fa-chart-area",
        child: [
          // {
          //   href: "/charts/sublink",
          //   title: "Sub Link",
          // },
        ],
      },
    ]);

    const menuOptions = {
      onCollapseChange: handleCollapseChange,
    };

    function handleCollapseChange(collapsed) {
      console.log("Collapsed state");
      // You can perform additional actions based on the collapsed state if needed.
    }

    return {
      menu,
      menuOptions,
    };
  },
};
</script>
<template>
  <div>
    <SidebarMenu :menu="menu"/>
  </div>
</template>

<style>
.v-sidebar-menu {
  --vsm-primary-color: #ffffff;
  --vsm-base-bg: #ffffff;
  --vsm-item-color: grey;
  --vsm-item-active-color: #ffff;
  --vsm-item-active-bg: #7600fd;
  --vsm-item-active-line-color: black;
  --vsm-item-open-color: white;
  --vsm-item-hover-color: rgb(0, 0, 0);
  --vsm-item-open-bg: grey;
  --vsm-item-hover-bg: rgb(216, 216, 216);
  --vsm-icon-color: var(--vsm-item-color);
  --vsm-icon-bg: transparent;
  --vsm-icon-active-color: white;
  --vsm-icon-active-bg: transparent;
  --vsm-icon-hover-color: rgb(177, 23, 23);
  --vsm-icon-open-color: white;
  --vsm-icon-open-bg: transparent;
  --vsm-mobile-item-color: white;
  --vsm-mobile-item-bg: grey;
  --vsm-mobile-icon-color: var(--vsm-mobile-item-color);
  --vsm-mobile-icon-bg: transparent;
  --vsm-dropdown-bg: rgb(240, 240, 240);
  --vsm-header-item-color: black;
  --vsm-toggle-btn-color: black;
  --vsm-toggle-btn-bg: #fcfcfc;
  --vsm-item-font-size: 14px;
  --vsm-item-line-height: 35px;
  --vsm-item-padding: 8px 10px;
  --vsm-item-margin: 10px;
  --vsm-icon-height: 30px;
  --vsm-icon-width: 30px;
}
</style>
