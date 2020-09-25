<template>
  <div class="container">
    <div class="justify-content-center">
      <h5 class="text-center mt-5">
        ขอให้ช่วยจัดทำร่างกฎหมาย
      </h5>
      <div class="row mt-5">
        <div class="col-1"></div>
        <div class="col-5">
          <div class="float-right">
            <a href="/form">
              <button class="btn btn-info">
                <p class="m-4">
                  ขอให้ช่วยจัดทำร่างกฎหมาย
                </p>
              </button></a
            >
          </div>
        </div>
        <div class="col-5">
          <a href="/law/add"
            ><button class="btn btn-success">
              <p class="m-4">มีร่างกฎหมายแล้ว</p>
            </button></a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  middleware: 'auth',
}
</script>
<style scoped>
p {
  font-size: 38px;
  font-family: Sarabun;
}
h5 {
  font-size: 42px;
  font-family: Sarabun;
  font-weight: bolder;
}
</style>
