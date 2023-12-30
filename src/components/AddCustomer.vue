<template>
  <div class="popup">
    <div class="popup-inner">
      <div class="icon" @click="TogglePopup()">
        <i class="fa-regular fa-circle-xmark"></i>
      </div>
      <div class="context">
        <h4 class="header">Add New Customer</h4>
        <div class="row m-0 p-0 content">
          <div class="col-12 mt-2">
            <div data-mdb-input-init class="form-outline">
              <input type="text" id="name" class="form-control field" />
              <label class="form-label" for="name">Customer Name</label>
            </div>
          </div>

          <div class="col-12 mt-2">
            <div data-mdb-input-init class="form-outline">
              <input type="text" id="company" class="form-control field" />
              <label class="form-label" for="company">Company</label>
            </div>
          </div>

          <div class="col-12 mt-2">
            <div data-mdb-input-init class="form-outline">
              <input type="text" id="contact" class="form-control field" />
              <label class="form-label" for="contact">Contact</label>
            </div>
          </div>

          <div class="col-12 mt-2">
            <div data-mdb-input-init class="form-outline">
              <input type="email" id="email" class="form-control field" />
              <label class="form-label" for="email">Email</label>
            </div>
          </div>
          <div class="col-12 mt-2">
            <div data-mdb-input-init class="form-outline">
              <input type="text" id="country" class="form-control field" />
              <label class="form-label" for="country">Country</label>
            </div>
          </div>
        </div>

        <h6 class="mid-content mt-3">Address Details:</h6>

        <div class="row m-0 p-0 content" v-for="(input, k) in inputs" :key="k">
          <div class="col-12">
            <!-- Name input -->
            <div data-mdb-input-init class="form-outline">
              <input
                type="text"
                id="address"
                class="form-control field"
                v-model="input.address"
                disabled
              />
              <!-- <label class="form-label" for="address">Address</label> -->
            </div>
          </div>
          <div class="col-3 mt-2">
            <!-- Name input -->
            <div data-mdb-input-init class="form-outline">
              <input
                type="text"
                id="no"
                class="form-control field"
                v-model="input.no"
              />
              <label class="form-label" for="no">No</label>
            </div>
          </div>
          <div class="col-9 mt-2">
            <!-- Email input -->
            <div data-mdb-input-init class="form-outline">
              <input
                type="text"
                id="street"
                class="form-control field"
                v-model="input.street"
              />
              <label class="form-label" for="street">Street</label>
            </div>
          </div>
          <div class="col-12 mt-2">
            <!-- Name input -->
            <div data-mdb-input-init class="form-outline">
              <input
                type="text"
                id="city"
                class="form-control field"
                v-model="input.city"
              />
              <label class="form-label" for="city">City, State</label>
            </div>
          </div>
          <div class="sub-buttons">
            <button
              type="button"
              class="btn btn-outline-success mt-2 add-btn"
              data-mdb-ripple-init
              data-mdb-ripple-color="dark"
              @click="add(k)"
              v-show="shouldShowAddIcon(k)"
            >
              Add
            </button>
            <button
              type="button"
              class="btn btn-outline-danger mt-2 delete-btn"
              data-mdb-ripple-init
              data-mdb-ripple-color="dark"
              @click="remove(k)"
              v-show="shouldShowRemoveIcon(k)"
            >
              Delete
            </button>
          </div>
        </div>
        <div class="row m-0 p-0 content">
          <div class="col-12">
            <button
              type="button"
              class="btn btn-success submit"
              data-mdb-ripple-init
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const { TogglePopup } = defineProps(["TogglePopup"]);
let num = 1;

const inputs = ref([
  {
    address: num,
    no: "",
    street: "",
    city: "",
  },
]);

const add = (index) => {
    ++num;
  inputs.value.push({ address: num, no: "", street: "", city: "" });
};

const remove = (index) => {
  inputs.value.splice(index, 1);
  --num;
};

const shouldShowRemoveIcon = (index) =>
  index || (!index && inputs.value.length > 1);

const shouldShowAddIcon = (index) => index === inputs.value.length - 1;

const addAddresses = () => {
  const jsonData = JSON.stringify(inputs.value);

  axios
    .post("/", {
      my_prop_name: jsonData,
    })
    .then((response) => {})
    .catch((error) => {});
};
</script>

<style lang="scss" scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .popup-inner {
    background: #fff;
    width: 320px;
    height: 540px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 20px;

    .icon {
      position: absolute;
      top: -35px;
      right: -25px;
      color: black;
      font-size: xx-large;
      z-index: 99;
    }

    .icon:hover {
      color: red;
      cursor: pointer;
    }

    .context {
      position: relative;
      width: 100%;
      height: auto;
      overflow-y: scroll;
      overflow-x: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      justify-items: center;
      align-items: center;
      align-content: center;

      .sub-buttons {
        position: relative;
        width: 100%;
        height: 40px;
        margin-bottom: 10px;
        .add-btn {
          position: absolute;
          width: 90px;
          // height: 33px;
          left: 12px;
          font-weight: bolder;
        }

        .delete-btn {
          position: absolute;
          width: 90px;
          // height: 33px;
          right: 12px;
          font-weight: bolder;
        }
      }

      .header {
        font-weight: bolder;
      }

      .mid-content {
        position: relative;
        // margin: auto;
        right: 18%;
        font-weight: bolder;
      }

      .content {
        width: 95%;
        position: relative;

        .field {
          width: 100%;
          position: relative;
          border-bottom: 1px solid lightgray;
          border-radius: 0px;
          font-size: 14px;
          font-weight: bold;
        }

        .submit {
          width: 100%;
          font-weight: bolder;
        }
      }
    }
  }
}
</style>
