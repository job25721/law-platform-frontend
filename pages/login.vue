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
                  <div class="col-lg-5">
                    <label>รหัส OTP ยืนยัน</label>
                    <input type="password" class="form-control" />
                  </div>
                  <div class="col-7 but float-right set">
                    <button type="submit" class="btn btn-primary mr-1 ml-4">
                      ส่งอีกครั้ง
                    </button>
                    <button type="submit" class="btn btn-danger ml-3">
                      ยืนยัน
                    </button>
                  </div>
                  <small class="form-text text-muted mb-5"
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
img.center {
  display: block;
  margin: 0 auto;
  width: 150px;
  height: 150px;
}
.btn {
  font-size: 22px;
  font-weight: bold;
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
