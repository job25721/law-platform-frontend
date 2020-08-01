<template>
  <div class="p-4">
    <div class="row">
      <div class="col-lg-3">
        <h3>{{ law.title }}</h3>
        <h5>
          วันที่เข้าชื่อเสนอ
          {{
            new Date(law.createdDate).toLocaleDateString('th-TH', {
              weekday: 'long',
              month: 'long',
              day: 'numeric',
            })
          }}
          {{ createdYear }}
        </h5>
        <button type="button" class="btn btn-sm btn-info" disabled>
          จำนวนคนเข้าชื่อเสนอ : {{ law.voteNumber }} คน
        </button>
        <img
          :src="`http://103.3.60.239:8000${law.image}`"
          class="center mt-3"
          style="width: 100%;"
        />
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                deserunt expedita voluptate quam delectus facere ut maiores
                quidem debitis animi voluptas voluptates, minima et rerum
                cupiditate quia hic itaque laudantium.
              </p>
              <p>เหตุผล</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                deserunt expedita voluptate quam delectus facere ut maiores
                quidem debitis animi voluptas voluptates, minima et rerum
                cupiditate quia hic itaque laudantium.
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
                  >มาตรา {{ i + 1 }}
                </span>
                <span>{{ sec }}</span>
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
              laudantium in, vitae, earum illum nihil a dolorum aliquid tempore
              quaerat sed, nostrum quas laborum. Aliquam doloribus sit laborum
              quae ipsa?
            </div>
          </div>
        </LawPaper>
      </div>
      <!--  -->
      <div class="col-3">
        <div class="float-right">
          <button
            type="button"
            class="btn btn-sm btn-success"
            style="font-family: Sarabun; font-size: 22px;"
          >
            โหวตให้กฎหมายนี้
          </button>
        </div>
      </div>
      <!--  -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      law: {},
      createdYear: '',
    }
  },
  async created() {
    const res = await this.$axios.$get(`/laws/5f22d083f9d163056d7aec47`)
    this.law = res.data.law
    this.createdYear = new Date(this.law.createdDate).toLocaleDateString(
      'th-TH',
      {
        year: 'numeric',
      }
    )
    console.log(this.law)
    console.log(this.$route.params.id)
  },
}
</script>
<style scoped>
h5 {
  font-family: Sarabun;
  color: rgb(192, 192, 192);
  font-size: 24px;
}
</style>
