<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-6">
        <h2 class="text-center">ข้อมูลส่วนตัว</h2>

        <div class="bg-white p-4 card-container">
          <div>
            <h3>ข้อมูลทั่วไป</h3>
            <fieldset disabled>
              <div class="form-group">
                <label>ชื่อ</label>
                <input type="text" class="form-control" placeholder="Auto" />
              </div>
              <div class="form-group">
                <label>นามสกุล</label>
                <input type="text" class="form-control" placeholder="Auto" />
              </div>
            </fieldset>
            <div class="form-group row">
              <div class="col-2">
                <fieldset disabled>
                  <label>เพศ</label>
                  <input type="text" placeholder="Auto" class="form-control" />
                </fieldset>
              </div>
              <div class="col-5">
                <fieldset disabled>
                  <label>เชื้อชาติ</label>
                  <input type="text" class="form-control" placeholder="Auto" />
                </fieldset>
              </div>
              <div class="col-5">
                <fieldset disabled>
                  <label>สัญชาติ</label>
                  <input type="text" class="form-control" placeholder="Auto" />
                </fieldset>
              </div>
            </div>
            <div class="form-group row">
              <div class="col-2">
                <fieldset disabled>
                  <label>เพศ</label>
                  <input type="text" placeholder="Auto" class="form-control" />
                </fieldset>
              </div>
              <div class="col-5">
                <fieldset disabled>
                  <label>เกิดวันที่</label>
                  <input type="text" class="form-control" placeholder="Auto" />
                </fieldset>
              </div>
              <div class="col-5">
                <fieldset disabled>
                  <label>เบอร์โทรศัพท์</label>
                  <input type="text" class="form-control" placeholder="Auto" />
                </fieldset>
              </div>
            </div>
          </div>
          <div class="form-group row">
            <h3 class="mt-2">ที่อยู่ตามทะเบียนบ้าน</h3>
            <div class="col-6">
              <fieldset disabled>
                <label>บ้านเลขที่</label>
                <input type="text" class="form-control" placeholder="Auto" />
              </fieldset>
            </div>
            <div class="col-4">
              <fieldset disabled>
                <label>หมู่</label>
                <input type="text" class="form-control" placeholder="Auto" />
              </fieldset>
            </div>
            <div class="col-2">
              <fieldset disabled>
                <label>ซอย</label>
                <input type="text" class="form-control" placeholder="Auto" />
              </fieldset>
            </div>
          </div>

          <div class="form-group row">
            <div class="col-6">
              <fieldset disabled>
                <label>ตำบล/แขวน</label>
                <input type="text" class="form-control" placeholder="Auto" />
              </fieldset>
            </div>
            <div class="col-6">
              <fieldset disabled>
                <label>อำเภอ</label>
                <input type="text" class="form-control" placeholder="Auto" />
              </fieldset>
            </div>
          </div>

          <div class="form-group row">
            <div class="col-4">
              <fieldset disabled>
                <label>จังหวัด</label>
                <input type="text" class="form-control" placeholder="Auto" />
              </fieldset>
            </div>
            <div class="col-4">
              <fieldset disabled>
                <label>รหัสไปษณีย์</label>
                <input type="text" class="form-control" placeholder="Auto" />
              </fieldset>
            </div>
            <div class="col-4"></div>
          </div>

          <div class="text-center" style="margin-top: 10%;">
            <button type="submit" class="btn btn-primary">
              ยืนยัน
            </button>
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
label {
  font-family: Sarabun;
  font-size: 22px;
}
.card-container {
  width: 100% !important;
}
</style>
