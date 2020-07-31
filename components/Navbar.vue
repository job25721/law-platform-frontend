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
              href="#"
              >รายชื่อกฎหมายที่เปิดโหวต</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">กฎหมายที่เข้าชื่อเสนอของฉัน</a>
          </li>
          <li class="nav-item dropdown">
            <a
              id="navbarDropdown"
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              ข้อมูลส่วนตัว
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <button class="btn btn-light">ลงชื่อเข้าใช้</button>
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
