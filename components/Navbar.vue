<template>
  <nav class="navbar navbar-expand-lg navbar-dark" style="background: #800000;">
    <div class="container-fluid">
      <span
        class="navbar-brand d-flex align-items-center"
        style="cursor: pointer;"
        @click="$router.push('/')"
      >
        <img
          src="/logo.svg"
          class="d-inline-block mr-3 p-1"
          width="60px"
          alt=""
        />
        <span style="font-family: Sarabun-bold; font-size: 30px;"
          >การข้าชื่อเสนอกฎหมายของประชาชน</span
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
              รายชื่อกฎหมายที่เข้าเสนอชื่อ
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
        <!-- <div v-if="$auth.loggedIn" class="text-white mr-3">
          
          <span
            >{{ $auth.user.person.name.first }}
            {{ $auth.user.person.name.last }}</span
          >
        </div> -->
        <div v-if="$auth.loggedIn" class="mx-3 p-2 text-white">
          <p>
            <i class="fas fa-user-alt pr-1"></i> :
            {{ $auth.user.person.name.first }}
            {{ $auth.user.person.name.last }}
          </p>
          <p>รหัสประชาชน : {{ $auth.user.person.idCardNumber }}</p>
        </div>
        <div class="buttons">
          <button class="btn btn-info" @click="$router.push('/add_new')">
            ขอให้ช่วยจัดทำร่างกฎหมาย
          </button>
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
  data() {
    return {
      person: '',
    }
  },
  computed: {
    currentPath() {
      return this.$route.name
    },
  },
  async created() {
    try {
      this.person = await this.$axios.$get('/person/info')
    } catch (error) {
      console.log(error)
    }
    console.log(this.person)
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
