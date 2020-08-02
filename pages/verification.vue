<template>
  <div class="container-fluid">
    <div class="text-center mt-5">
      <h4>ยืนยันตัวตนด้วยเลขหลังบัตรประชาชน</h4>
    </div>
    <div class="row justify-content-center">
      <div class="col-6 bg-white">
        <img src="/veri.svg" style="margin-left: 22%;" />
        <div class="row">
          <div class="col-4 ml-2"><p>เลขหลังบัตรประจำตัวประชาชน</p></div>
          <div class="col-5">
            <input type="text" class="form-control" />
          </div>
          <div class="col-2">
            <button class="btn btn-primary" type="submit">ยืนยัน</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
img {
  height: 400px;
  width: 400px;
}
p {
  font-family: Sarabun;
  font-size: 24px;
}

button {
  font-family: Sarabun;
  font-weight: bold;
  font-size: 18px;
}
</style>
