<template>
  <div class="card-container container-fluid">
    <div class="row justify-content-center">
      <div class="col-6">
        <h2 class="text-center">ข้อมูลส่วนตัว</h2>

        <form>
          <h3>ข้อมูลทั่วไป</h3>
          <fieldset disabled>
            <div class="form-group">
              <label>ชื่อ</label>
              <input
                type="text"
                class="form-control"
                placeholder="Autofill(disable)"
              />
            </div>
            <div class="form-group">
              <label>นามสกุล</label>
              <input
                type="text"
                class="form-control"
                placeholder="Autofill(disable)"
              />
            </div>
          </fieldset>
          <div class="form-group row">
            <div class="col-2">
              <fieldset disabled>
                <label>เพศ</label>
                <input
                  type="text"
                  placeholder="Autofill"
                  class="form-control"
                />
              </fieldset>
            </div>
            <div class="col-5">
              <label>เชื้อชาติ</label>
              <input type="text" class="form-control" />
            </div>
            <div class="col-5">
              <label>สัญชาติ</label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-2">
              <fieldset disabled>
                <label>เพศ</label>
                <input
                  type="text"
                  placeholder="Autofill"
                  class="form-control"
                />
              </fieldset>
            </div>
            <div class="col-5">
              <fieldset disabled>
                <label>เกิดวันที่</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Autofill"
                />
              </fieldset>
            </div>
            <div class="col-5">
              <fieldset disabled>
                <label>เบอร์โทรศัพท์</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Autofill"
                />
              </fieldset>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-5">
              <label>ที่อยู่ตามทะเบียนบ้าน</label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="float-right">
            <button type="submit" class="btn btn-primary">
              ยืนยัน
            </button>
          </div>
        </form>
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
label {
  font-family: Sarabun;
  font-size: 22px;
}
</style>
