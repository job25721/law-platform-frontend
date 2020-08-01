<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-6">
        <h2 class="text-center">แบบฟอร์มเสนอชื่อเข้ากฎหมาย</h2>

        <div class="bg-white p-5 card-container">
          <div class="row">
            <div class="col-6">
              <fieldset disabled>
                <div class="form-group">
                  <label>ผู้เสนอชื่อเข้ากฎหมาย</label>
                  <input type="text" class="form-control" placeholder="Auto" />
                </div>
              </fieldset>
            </div>
            <div class="col-6">
              <div class="form-group">
                <label>ประเภทของกฎหมายที่จะเข้าเสนอ</label>
                <select class="browser-default custom-select form-control">
                  <option selected>โปรดเลือก</option>
                  <option value="1">ทั่วไป</option>
                  <option value="2">การเงิน</option>
                  <option value="3">พิเศษ</option>
                </select>
              </div>
            </div>
          </div>
          <!--  -->
          <div class="row mb-2">
            <div class="col-6">
              <fieldset disabled>
                <fieldset disabled>
                  <div class="form-group">
                    <label>เลขบัตรประจำตัวประชาชน</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Auto"
                    />
                  </div>
                </fieldset>
              </fieldset>
            </div>
            <!--  -->
            <div class="col-6">
              <fieldset disabled>
                <div class="form-group">
                  <label>ที่อยู่ที่สามารถติดต่อได้</label>
                  <input type="text" class="form-control" placeholder="Auto" />
                </div>
              </fieldset>
            </div>
          </div>
          <!--  -->
          <div class="row mt-5">
            <div class="col-2"></div>
            <div class="col-2 mt-2"><h4>หัวเรื่อง</h4></div>
            <div class="col-4 setpadding">
              <input type="text" class="form-control" placeholder="Auto" />
            </div>
          </div>
          <!--  -->
          <div class="row mt-4">
            <div class="col-2"></div>
            <div class="col-2 mt-2"><h4>เนื้อหา</h4></div>
            <div class="col-8 setpadding">
              <textarea class="form-control" cols="30" rows="8"></textarea>
            </div>
          </div>
          <!--  -->
          <div class="row mt-4">
            <div class="col-4 mt-2"><h4>อัพโหลดรูปภาพ</h4></div>
            <div class="col-4 setpadding">
              <div class="custom-file">
                <input type="file" class="custom-file-input" />
                <label class="custom-file-label" for="customFile"></label>
              </div>
            </div>
          </div>
          <!--  -->
          <div class="row mt-3">
            <div class="col-2"></div>
            <div class="col-4">
              <button class="btn btn-danger float-right" type="submit">
                ยกเลิก
              </button>
            </div>
            <div class="col-4">
              <button class="btn btn-primary" type="submit">ยืนยัน</button>
            </div>
            <div class="col-2"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.setpadding {
  padding: 0% !important;
}
h4 {
  font-size: 22px;
  font-family: Sarabun;
}
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

.btn-circle.btn-xl {
  width: 70px;
  height: 70px;
  padding: 10px 16px;
  border-radius: 35px;
  font-size: 24px;
  line-height: 1.33;
}

.btn-circle {
  width: 30px;
  height: 30px;
  padding: 6px 0px;
  border-radius: 15px;
  text-align: center;
  font-size: 12px;
  line-height: 1.42857;
}
</style>
