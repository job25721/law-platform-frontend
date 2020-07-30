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
                  <input type="email" class="form-control" />
                </div>
                <div class="form-group row formmargin">
                  <div class="col-6">
                    <label>เบอร์โทรศัพท์</label>
                    <input type="password" class="form-control" />
                  </div>
                  <div class="col-6 otpbutton">
                    <button type="submit" class="btn btn-primary">
                      รับรหัส OTP
                    </button>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-6">
                    <label>รหัส OTP ยืนยัน</label>
                    <input type="password" class="form-control" />
                  </div>
                  <div class="col-6 btn-toolbar but">
                    <button type="submit" class="btn btn-primary btn-sm">
                      ส่งอีกครั้ง
                    </button>
                    <button type="submit" class="btn btn-danger btn-sm">
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
                  class="btn btn-success float-right submitbutton setfont"
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
.btn {
  font-size: 20px;
  font-weight: bold;
}
.float-right {
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
  width: 150px;
}
.but {
  padding-top: 40px;
}
.login {
  font-family: Sarabun;
  src: url('/fonts/THSarabunNew.ttf');
}
.box1 {
  width: 300px;
}
.box {
  width: 400px;
}
.login {
  background-color: whitesmoke;
}
.icon {
  width: 20%;
  height: 20%;
  margin-bottom: 5%;
  margin-top: 5%;
}
</style>
