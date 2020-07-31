<template>
  <nav class="navbar navbar-expand-lg navbar-dark" style="background: #800000;">
    <div class="container-fluid">
      <span class="navbar-brand d-flex align-items-center">
        <img
          src="/logo.svg"
          class="d-inline-block mr-3 p-1"
          width="60px"
          alt=""
        />
        <span style="font-family: Sarabun-bold; font-size: 30px;"
          >โหวตและเข้าชื่อเสนอกฎหมาย</span
        ></span
      >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a
              class="nav-link"
              :class="currentPath === 'index' ? 'active' : ''"
              aria-current="page"
              href="/"
              >รายชื่อกฎหมายที่เปิดโหวต</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              :class="currentPath === 'mylaw' ? 'active' : ''"
              href="/mylaw"
              >กฎหมายที่เข้าชื่อเสนอของฉัน</a
            >
          </li>
        </ul>
        <div class="buttons">
          <button class="btn btn-warning">ริเริ่มร่างกฎหมาย</button>
          <button class="btn btn-light">ลงชื่อเข้าใช้</button>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  computed: {
    currentPath() {
      return this.$route.name
    },
  },
  created() {
    console.log(this.currentPath)
  },
}
</script>
