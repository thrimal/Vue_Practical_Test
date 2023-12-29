<template>
  <div class="main-outer">
    <div class="header-content d-flex">
      <h6 class="header">
        Hello Evano <span style="font-size: 18px">&#128075;,</span>
      </h6>
      <i class="fa-solid fa-circle-plus icon"></i>
    </div>

    <div class="row p-0 m-0 top-content">
      <div class="top">
        <div class="col-4 t-col">
          <div class="content">
            <div class="icon-wrapper">
              <i class="fa-solid fa-user-group icons"></i>
            </div>
            <div class="text-wrapper">
              <p class="sub-content sub-content-1">Total Customers</p>
              <h5 class="sub-content sub-content-2">5,423</h5>
              <p class="sub-content sub-content-3">
                <span style="color: green; font-weight: bolder"
                  ><i class="fa-solid fa-arrow-up m-1"></i>50%</span
                >
                this month
              </p>
            </div>
          </div>
        </div>
        <div class="col-4 t-col">
          <div class="content">
            <div class="icon-wrapper">
              <i class="fa-solid fa-user-check icons"></i>
            </div>
            <div class="text-wrapper">
              <p class="sub-content sub-content-1">Members</p>
              <h5 class="sub-content sub-content-2">1893</h5>
              <p class="sub-content sub-content-3">
                <span style="color: red"
                  ><i class="fa-solid fa-arrow-down m-1"></i>2%</span
                >
                this month
              </p>
            </div>
          </div>
        </div>
        <div class="col-4 t-col">
          <div class="content">
            <div class="icon-wrapper">
              <i class="fa-solid fa-desktop"></i>
            </div>
            <div class="text-wrapper">
              <p class="sub-content sub-content-1">Active Now</p>
              <h5 class="sub-content sub-content-2">189</h5>
              <p class="sub-content sub-content-3">
                <img
                  class="active-users"
                  src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                />
                <img
                  class="active-users"
                  src="https://www.shutterstock.com/image-photo/young-brazilian-man-isolated-on-260nw-2242569333.jpg"
                />
                <img
                  class="active-users"
                  src="data:image/jpeg;base64,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"
                />
                <img
                  class="active-users"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOOCbdtj6zShcYWW9lzJzRhvkUcil_QZC3VvG-aRgHC7oLT6bFYKRXcwn50g&s"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row p-0 m-0 bottom-content"></div>
  </div>
</template>
<script setup></script>
<style lang="scss">
.main-outer {
  position: relative;
  width: 100%;
  height: 100vh;
  background: rgb(243, 251, 253);

  .header-content {
    display: flex;
    position: relative;
    height: 50px;
    .header {
      position: absolute;
      padding: 15px 50px 10px 50px;
      text-align: center;
      margin-top: 5px;
      font-weight: bolder;
      left: 0;
    }

    .icon {
      position: absolute;
      padding: 15px 50px 10px 50px;
      margin: auto;
      right: 0;
      font-size: 30px;
      color: green;
    }

    .icon:hover {
      color: rgb(101, 197, 101);
      cursor: pointer;
    }
  }

  .top-content {
    width: 100%;
    height: 15%;
    // background: red;
    display: flex;
    align-items: center;
    justify-content: center;

    .top {
      width: 90%;
      height: 80%;
      background: white;
      border-radius: 20px;
      display: flex;
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2),
        0 5px 10px 0 rgba(0, 0, 0, 0.2);

      .t-col {
        // border: 1px solid black;

        .content {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          width: 100%;
          .icon-wrapper {
            width: 50px;
            height: 50px;
            border-radius: 100px;
            background: rgb(217, 245, 217);
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 30px;

            .icons {
              font-size: 20px;
              color: green;
            }
          }

          .text-wrapper {
            // margin: 0 10px 0 10px;
            display: flex;
            flex-direction: column;
            padding: 0;

            .sub-content {
              margin: 0;
              padding: 0;
            }
            .sub-content-1 {
              color: darkgray;
              font-size: 10px;
              font-weight: bolder;
            }

            .sub-content-2 {
              font-size: 20px;
              font-weight: bolder;
            }

            .sub-content-3 {
              color: grey;
              font-size: 12px;

              .active-users {
                width: 20px;
                height: 20px;
                border-radius: 100px;
                object-fit: cover;
                margin-top: 2px;
                margin-right: -6px;
              }
            }
          }
        }
      }
    }
  }
  .bottom-content {
    width: 100%;
    height: 70%;
    // background: green;
  }
}
</style>
