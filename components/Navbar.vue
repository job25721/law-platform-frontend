<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
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
            <button
              class="btn"
              :class="
                currentPath === 'index' ? 'active btn-light' : 'text-white'
              "
              aria-current="page"
              @click="$router.push('/')"
            >
              รายชื่อกฎหมายที่เปิดโหวต
            </button>
          </li>
          <li v-if="$auth.loggedIn" class="nav-item">
            <button
              class="btn"
              :class="
                currentPath === 'mylaw' ? 'active btn-light' : 'text-white'
              "
              @click="$router.push('/mylaw')"
            >
              กฎหมายที่เข้าชื่อเสนอของฉัน
            </button>
          </li>
        </ul>
        <div v-if="$auth.loggedIn" class="text-white mr-3">
          <i class="fas fa-user-alt pr-1"></i>
          <span
            >{{ $auth.user.person.name.first }}
            {{ $auth.user.person.name.last }}</span
          >
        </div>
        <div class="buttons">
          <button class="btn btn-info">ริเริ่มร่างกฎหมาย</button>
          <button
            v-if="!$auth.loggedIn"
            class="btn btn-success"
            @click="$router.push('/login')"
          >
            ลงชื่อเข้าใช้
          </button>
          <button v-if="$auth.loggedIn" class="btn btn-danger" @click="logout">
            ออกจากระบบ
          </button>
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
    console.log(this.$auth.user)
  },
  methods: {
    logout() {
      this.$auth.logout()
      this.$swal('Logout successful', 'ออกจากระบบสำเร็จ', 'success')
      location.reload()
    },
  },
}
</script>
