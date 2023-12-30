<template>
  <div class="popup">
    <div class="popup-inner">
      <div class="icon" @click="TogglePopup()">
        <i class="fa-regular fa-circle-xmark"></i>
      </div>
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

      <h6 class="mid-content mt-3">Address Details: </h6>

      <div class="row m-0 p-0 content">
        <div class="col-12">
          <!-- Name input -->
          <div data-mdb-input-init class="form-outline">
            <input type="number" id="address" class="form-control field" />
            <label class="form-label" for="address">Address</label>
          </div>
        </div>
        <div class="col-3 mt-2">
          <!-- Name input -->
          <div data-mdb-input-init class="form-outline">
            <input type="text" id="no" class="form-control field" />
            <label class="form-label" for="no">No</label>
          </div>
        </div>
        <div class="col-9 mt-2">
          <!-- Email input -->
          <div data-mdb-input-init class="form-outline">
            <input type="text" id="street" class="form-control field" />
            <label class="form-label" for="street">Street</label>
          </div>
        </div>
        <div class="col-12 mt-2">
          <!-- Name input -->
          <div data-mdb-input-init class="form-outline">
            <input type="text" id="city" class="form-control field" />
            <label class="form-label" for="city">City, State</label>
          </div>
        </div>
      </div>
      <button type="button" class="btn btn-outline-success mt-2 add-btn" data-mdb-ripple-init data-mdb-ripple-color="dark">Add</button>
      <button type="button" class="btn btn-success mt-2 submit" data-mdb-ripple-init>Submit</button>
    </div>
  
  </div>
</template>

<script setup>
const { TogglePopup } = defineProps(["TogglePopup"]);
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
    width: 300px;
    height: auto;
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
      font-size: 30px;
    }

    .add-btn{
        position: relative;
        height: 33px;
        right: 27%;
        font-weight: bolder;
    }

    .submit{
        width: 86%;
        font-weight: bolder;
    }

    .icon:hover {
      color: red;
      cursor: pointer;
    }

    .header {
      font-weight: bolder;
    }

    .mid-content{
        position: relative;
        // margin: auto;
        right: 17%;
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
      }
    }
  }
}
</style>
