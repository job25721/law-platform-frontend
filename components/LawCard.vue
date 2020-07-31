<template>
  <div class="card">
    <div class="card-body row align-items-center">
      <div class="col-lg-2 justify-content-center d-flex">
        <img src="/logo.svg" width="70%" alt="" />
      </div>
      <div class="col-lg-7">
        <div>
          <h1 style="font-size: 35px;" class="m-0">{{ $props.name }}</h1>
          <span style="font-size: 25px; color: #a8a8a8;"
            >เสนอโดย : {{ $props.owner }}</span
          >
        </div>
        <div class="w-100">
          <p style="font-size: 25px;">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            laudantium at ad totam corporis atque eveniet earum corrupti, animi
            consequuntur placeat fugiat aut deserunt dignissimos asperiores
            molestias dolorem non laborum.
          </p>
          <div class="status">
            <span class="badge bg-info">จำนวนคนโหวตขณะนี้ 2000 คน</span>
            <span
              v-if="$props.option === 'lawOwner'"
              class="badge"
              :class="`bg-${$props.status.color}`"
              >สถานะ : {{ $props.status.text }}</span
            >
          </div>
        </div>
      </div>
      <div class="col d-flex justify-content-center">
        <div v-if="$props.option !== 'lawOwner'">
          <button class="btn btn-outline-success" @click="vote">
            โหวตให้กฎหมายนี้
          </button>
        </div>
        <div v-else>
          <button class="btn btn-success">เริ่มเปิดโหวต</button>
          <button class="btn btn-warning">ส่งร่างให้รัฐสภา</button>
          <button class="btn btn-primary">
            <i class="fas fa-edit"></i>
          </button>
          <button class="btn btn-danger">
            <i class="fas fa-trash"></i>
          </button>
        </div>
        <button class="btn btn-light inspect">
          <i class="fas fa-search"></i>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  props: ['name', 'owner', 'content', 'option', 'status'],
  data() {
    return {
      voted: false,
    }
  },
  methods: {
    ...mapActions({
      vote: 'law/vote',
    }),
  },
}
</script>
<style lang="scss" scoped>
button {
  margin: 5px;
}
.inspect {
  display: none;
}
.card {
  cursor: pointer;
  margin: 10px;
  border-radius: 8px;
  transition: 0.2s;
}
.card:hover {
  box-shadow: 2px 2px 5px #00000050;
  .inspect {
    display: inline;
  }
}
.badge {
  font-size: 20px;
}
</style>
