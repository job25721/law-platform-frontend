<template>
  <div class="login">
    <div class="container">
      <div
        class="row justify-content-center align-items-center"
        style="height: 100vh;"
      >
        <div class="col-4 box">
          <div class="">
            <div class="">
              <img src="/logo.svg" class="center" />
              <!-- form -->
              <form>
                <div class="form-group formmargin">
                  <label>รหัสประจำตัวประชาชน</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="form-group row formmargin">
                  <div class="col-sm-8">
                    <label>เบอร์โทรศัพท์</label>
                    <input type="text" class="form-control" />
                  </div>
                  <div class="col-sm-4 otpbutton">
                    <button
                      type="submit"
                      class="btn btn-primary float-right otpbutton2"
                    >
                      รับรหัส OTP
                    </button>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-5">
                    <label>รหัส OTP ยืนยัน</label>
                    <input type="password" class="form-control" />
                  </div>
                  <div class="col-7 but float-right">
                    <button type="submit" class="btn btn-primary subbtn">
                      ส่งอีกครั้ง
                    </button>
                    <button type="submit" class="btn btn-danger subbtn">
                      ยืนยัน
                    </button>
                  </div>
                  <small class="form-text text-muted"
                    >*เฉพาะผู้ที่มีสิทธิ์เลือกตั้งที่อายุไม่ต่ำกว่า 18
                    ปีเท่านั้น</small
                  >
                </div>
                <button
                  type="submit"
                  class="btn btn-success float-right submitbtn"
                >
                  ลงชื่อเข้าใช้งาน
                </button>
              </form>
              <!--  -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'login',
}
</script>

<style scoped>
.fixbox {
  width: 140px;
}
input {
  box-shadow: 5px 5px 5px #aaaaaa;
}
img {
  margin-top: 20%;
  margin-bottom: 10%;
  width: 150px;
  height: 150px;
}
img.center {
  display: block;
  margin: 0 auto;
}
.subbtn {
  width: 90px;
  height: 40px;
}
.btn {
  font-size: 22px;
  font-weight: bold;
}
.submitbtn {
  width: 150px;
  margin-top: 50px;
}
small {
  font-size: 18px;
  color: red !important;
}
.formmargin {
  margin-bottom: 30px;
  margin-top: 20px;
}
label {
  font-size: 24px;
  font-weight: bold;
}
.otpbutton {
  padding-top: 35px;
}
.otpbutton2 {
  width: 100px;
  height: 40px;
}
.but {
  padding-top: 35px;
}
.login {
  font-family: Sarabun;
  src: url('/fonts/THSarabunNew.ttf');
  background-color: whitesmoke;
}
.box {
  width: 380px;
}

.icon {
  width: 20%;
  height: 20%;
  margin-bottom: 5%;
  margin-top: 5%;
}
</style>
