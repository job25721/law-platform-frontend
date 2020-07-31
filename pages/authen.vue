<template>
  <div>
    <div class="row justify-content-center align-items-center">
      <div class="col-6">
        <div>
          <h2 class="text-center">ข้อมูลส่วนตัว</h2>
          <div class="">
            <form>
              <h3>ข้อมูลทั่วไป</h3>
              <fieldset disabled>
                <div class="form-group">
                  <label for="exampleFormControlInput1">ชื่อ</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Autofill(disable)"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlInput1">นามสกุล</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Autofill(disable)"
                  />
                </div>
              </fieldset>
              <!--  -->
              <div class="form-group row">
                <div class="col-2">
                  <fieldset disabled>
                    <label for="exampleFormControlInput1">เพศ</label>
                    <input
                      type="text"
                      placeholder="Autofill"
                      class="form-control"
                    />
                  </fieldset>
                </div>
                <div class="col-5">
                  <label for="exampleFormControlInput1">เชื้อชาติ</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="col-5">
                  <label for="exampleFormControlInput1">สัญชาติ</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <!--  -->
              <div class="form-group row">
                <div class="col-2">
                  <fieldset disabled>
                    <label for="exampleFormControlInput1">เพศ</label>
                    <input
                      type="text"
                      placeholder="Autofill"
                      class="form-control"
                    />
                  </fieldset>
                </div>
                <div class="col-5"></div>
                <div class="col-5">
                  <fieldset disabled>
                    <label for="exampleFormControlInput1">เกิดวันที่</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Autofill"
                    />
                  </fieldset>
                </div>
              </div>
              <!--  -->
              <div class="form-group row">
                <div class="col-5">
                  <fieldset disabled>
                    <label for="exampleFormControlInput1">เบอร์โทรศัพท์</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Autofill"
                    />
                  </fieldset>
                </div>
              </div>
              <!--  -->
              <div class="form-group row">
                <div class="col-5">
                  <label for="exampleFormControlInput1"
                    >ที่อยู่ตามทะเบียนบ้าน</label
                  >
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="text-center">
                <button type="submit" class="btn btn-primary">
                  ยืนยัน
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.text-center {
  margin-top: 5%;
}
.form-control {
  margin-bottom: 2%;
}
.input {
  margin-bottom: 2%;
}
.btn {
  margin-top: 2%;
}
.box {
  width: 700px;
  height: 500px;
  background-color: whitesmoke;
}
h2 {
  font-family: Sarabun;
  font-weight: bold;
}
h3 {
  font-family: Sarabun;
  font-weight: bold;
}
label {
  font-family: Sarabun;
  font-size: 22px;
}
</style>
