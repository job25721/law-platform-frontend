<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-6">
        <h2 class="text-center">ข้อมูลส่วนตัว</h2>

        <div class="bg-white p-4 card-container">
          <div class="row">
            <div class="col-6">
              <div>
                <div class="form-group">
                  <label>ชื่อ</label>
                  <input type="text" class="form-control" placeholder="Auto" />
                </div>
              </div>
            </div>
            <div class="col-6"></div>
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
