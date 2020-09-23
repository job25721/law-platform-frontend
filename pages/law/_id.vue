<template>
  <div class="p-4">
    {{ law }}
    <div v-if="loading" class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <div v-if="!loading && !showAlert" class="row">
      <div class="col-lg-3">
        <h3>
          {{ law.title }}
        </h3>
        <h4>
          {{
            law.alreadyInitiated ? '(กฎหมายที่คุณริเริ่มหรือร่วมริเริ่ม)' : ''
          }}
        </h4>
        <span style="color: rgb(192, 192, 192);">
          วันที่เข้าชื่อเสนอ
          {{
            new Date(law.createdDate).toLocaleDateString('th-TH', {
              weekday: 'long',
              month: 'long',
              day: 'numeric',
            })
          }}
          {{ createdYear }}
        </span>
        <h5>ประเภท : {{ law.type }}</h5>
        <h6>
          ผู้ริเริ่ม : {{ law.initiatePerson.name.first }}
          {{ law.initiatePerson.name.last }}
        </h6>
        <button type="button" class="btn btn-sm btn-info" disabled>
          จำนวนคนเข้าชื่อเสนอ : {{ law.voteNumber }} คน
        </button>
        <!-- <img
          :src="`http://3.137.208.125/api${law.image}`"
          class="center mt-3"
          style="width: 100%;"
        /> -->
      </div>
      <div class="col-lg-6" style="overflow: auto; height: 80vh;">
        <LawPaper>
          <div class="text-center">
            <p>บันทึกหลักการและเหตุล</p>
            <p>ประกอบร่างพระราชบัญญัติ{{ law.title }}</p>
            <p>
              {{ createdYear }}
            </p>
            <hr />

            <div class="text-left">
              <p>หลักการ</p>
              <p>
                {{ law.principle }}
              </p>
              <p>เหตุผล</p>
              <p>
                {{ law.reason }}
              </p>
            </div>
          </div>
        </LawPaper>
        <LawPaper>
          <div class="text-center">
            <p>ร่าง</p>
            <p>พระราชบัญญัติ{{ law.title }}</p>
            <p>
              {{ createdYear }}
            </p>
            <div class="text-left">
              <p>
                {{ law.description }}
              </p>
              <p v-for="(sec, i) in law.section" :key="i">
                <span style="font-family: Sarabun-bold;"
                  >หมวดที่ {{ i + 1 }}
                </span>
                <span>{{ sec.split(`หมวดที่ ${i + 1} `)[1] }}</span>
              </p>
            </div>
          </div>
        </LawPaper>
        <LawPaper>
          <div class="text-center">
            <p>บันทึกวิเคาระห์สรุปสาระสำคัญ</p>
            <p>ของร่างพระราชบัญญัติ{{ law.title }}</p>
            <p>
              {{ createdYear }}
            </p>
            <div class="text-left">
              {{ law.conslusion }}
            </div>
          </div>
        </LawPaper>
      </div>

      <!--  -->
      <div class="col-3">
        <div class="float-right">
          <button
            v-if="!law.alreadyInitiated && law.alreadyInitiated"
            class="btn btn-success btn-lg"
            :class="law.alreadyVoted ? 'disabled' : ''"
            @click="vote(law._id)"
          >
            {{
              !law.alreadyVoted
                ? 'เข้าชื่อเสนอกฎหมายนี้'
                : 'คุณได้เข้าชื่อเสนอกฎหมายนี้ไปเรียบร้อยแล้ว'
            }}
          </button>
          <div v-if="$route.query.invite" class="buttons m-3 text-left">
            <button class="btn btn-success" @click="acceptInvite">
              ตอบรับคำเชิญริเริ่ม
            </button>
            <button class="btn btn-danger" @click="$router.push('/')">
              ปฏิเสธ
            </button>
          </div>
        </div>
      </div>
      <!--  -->
    </div>
    <div v-if="!loading && showAlert" class="alert alert-danger" role="alert">
      ไม่มีกฎหมายที่ท่านค้นหา
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      law: {},
      createdYear: '',
      loading: true,
      showAlert: false,
    }
  },
  async created() {
    console.log(this.$route.query.invite)
    try {
      const res = await this.$axios.$get(`/laws/${this.$route.params.id}`)
      this.law = res.data.law
      this.createdYear = new Date(this.law.createdDate).toLocaleDateString(
        'th-TH',
        {
          year: 'numeric',
        }
      )
      console.log(this.law)
      console.log(this.$route.params.id)
      this.loading = false
    } catch {
      this.showAlert = true
      this.loading = false
    }
  },
  methods: {
    ...mapActions({
      vote: 'law/voteConfirm',
    }),
    async acceptInvite() {
      try {
        const res = await this.$axios.$post(
          `/person/voteinitiate/${this.$route.params.id}`
        )
        this.$swal(res.data.message)
        this.$router.push('/mylaw')
      } catch {
        this.$swal('ผิดพลาด', 'คุณได้ริเริ่มกฎหมายนี้ไปแล้ว', 'error')
      }
    },
  },
}
</script>
