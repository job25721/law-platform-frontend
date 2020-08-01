<template>
  <div class="card">
    <div class="card-body row align-items-center">
      <div class="col-lg-2 justify-content-center d-flex">
        <img
          :src="`http://103.3.60.239:8000${$props.imgPath}`"
          width="100%"
          alt=""
        />
      </div>
      <div class="col-lg-7">
        <div>
          <h1 class="m-0" style="font-size: 25px;">{{ $props.name }}</h1>
          <span style="color: #a8a8a8;">เสนอโดย : {{ $props.owner }}</span>
        </div>
        <div class="w-100">
          <p style="font-size: 18px;">
            {{ $props.description }}
          </p>
          <div class="status">
            <span class="badge bg-info"
              >จำนวนคนที่เข้าเชื่อเสนอ : {{ $props.voteNumber }} คน</span
            >
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
          <button
            v-if="$props.canVote"
            class="btn btn-outline-success"
            @click="vote($props.lawId)"
          >
            เข้าเสนอชื่อให้กฎหมายนี้
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
  props: [
    'name',
    'owner',
    'option',
    'status',
    'imgPath',
    'voteNumber',
    'description',
    'lawId',
    'canVote',
  ],
  data() {
    return {
      voted: false,
    }
  },
  methods: {
    ...mapActions({
      vote: 'law/voteConfirm',
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
  font-size: 1rem;
}
</style>
