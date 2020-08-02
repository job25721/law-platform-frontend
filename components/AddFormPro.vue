<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <h2 class="text-center">แบบฟอร์มเสนอชื่อเข้ากฎหมาย</h2>
      {{ sections }}
      <div
        class="bg-white p-5"
        style="height: 70vh; width: 70%; overflow: auto;"
      >
        <div class="row">
          <div class="col-6">
            <fieldset disabled>
              <div class="form-group">
                <label>ผู้เสนอชื่อเข้ากฎหมาย</label>
                <input
                  type="text"
                  class="form-control"
                  :placeholder="`${user.name.first} ${user.name.last}`"
                />
              </div>
            </fieldset>
          </div>
          <div class="col-6">
            <div class="form-group">
              <label>ประเภทของกฎหมายที่จะเข้าเสนอ</label>
              <select
                v-model="type"
                class="browser-default custom-select form-control"
              >
                <option :value="-1" selected>โปรดเลือก</option>
                <option value="ทั่วไป">ทั่วไป</option>
                <option value="การเงิน">การเงิน</option>
                <option value="พิเศษ">พิเศษ</option>
              </select>
            </div>
          </div>
        </div>
        <!--  -->
        <fieldset disabled>
          <div class="row mt-4">
            <div class="col-4 mt-2"><h4>เลขบัตรประจำตัวประชาชน</h4></div>
            <div class="col-4 setpadding">
              <input
                type="text"
                class="form-control"
                :placeholder="user.idCardNumber"
              />
            </div>
          </div>
        </fieldset>
        <!--  -->
        <!-- <fieldset disabled>
          <div class="row mt-4">
            <div class="col-4 mt-2"><h4>ที่อยู่ที่สามารถติดต่อได้</h4></div>
            <div class="col-4 setpadding">
              <input type="text" class="form-control" placeholder="Auto" />
            </div>
          </div>
        </fieldset> -->
        <!--  -->
        <div class="text-center">
          <h4 style="font-weight: bold; font-size: 28px;">ส่วนที่ ๑</h4>
          <h4 style="font-weight: bold;">บันทึกหลักการและเหตุผล</h4>
        </div>
        <div class="row mt-4">
          <div class="col-2"></div>
          <div class="col-2"><h4>หลักการ</h4></div>
          <div class="col-4 setpadding">
            <input v-model="principle" type="text" class="form-control" />
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-2"></div>
          <div class="col-2"><h4>เหตุผล</h4></div>
          <div class="col-8 setpadding">
            <textarea
              v-model="reason"
              class="form-control"
              cols="30"
              rows="5"
            ></textarea>
          </div>
        </div>
        <!--  -->

        <div class="text-center">
          <h4 style="font-weight: bold; font-size: 28px;">ส่วนที่ ๒</h4>
          <h4 style="font-weight: bold;">ร่างพระราชบัญญติ</h4>
        </div>
        <div class="row mt-4">
          <div class="col-2"></div>
          <div class="col-2"><h4>หัวข้อ</h4></div>
          <div class="col-8 setpadding">
            <input v-model="title" class="form-control" type="text" />
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-2"></div>
          <div class="col-2"><h4>เนื้อหา</h4></div>
          <div class="col-8 setpadding">
            <textarea
              v-model="description"
              class="form-control"
              cols="30"
              rows="5"
            ></textarea>
          </div>
        </div>
        <hr />
        <div
          class="p-3 m-3"
          style="overflow: auto; height: 500px; width: 100%;"
        >
          <div v-for="(section, i) in sections" :key="i">
            <div class="row mt-4">
              <div class="col-2 mt-2">
                <h4>หมวดที่ {{ section.id }}</h4>
              </div>
              <div class="col-8 setpadding">
                <textarea
                  v-model="section.content"
                  class="form-control"
                  cols="30"
                  rows="5"
                ></textarea>
              </div>
            </div>
            <div
              v-for="(subSec, j) in section.subSection"
              :key="j"
              class="row mt-4"
            >
              <div class="col-2"></div>

              <div class="col-2">
                <h4>มาตราที่ {{ subSec.id }}</h4>
              </div>
              <div class="col-6 setpadding">
                <textarea
                  v-model="subSec.content"
                  class="form-control"
                  cols="30"
                  rows="5"
                ></textarea>
              </div>
            </div>
            <div class="text-right">
              <button class="btn btn-success" @click="addSubSec(i)">
                เพิ่มมาตรา
              </button>
            </div>
          </div>

          <button class="btn btn-primary m-5" @click="addSection">
            เพิ่มหมวด
          </button>
        </div>
        <!--  -->
        <hr />
        <div class="text-center">
          <h4 style="font-weight: bold; font-size: 28px;">ส่วนที่ ๓</h4>
          <h4 style="font-weight: bold;">บันทึกวิเคราะห์และสรุปสาระสำคัญ</h4>
        </div>
        <div class="row mt-4">
          <div class="col-2"></div>
          <div class="col-2"><h4>เนื้อหา</h4></div>
          <div class="col-8 setpadding">
            <textarea
              v-model="conclusion"
              class="form-control"
              cols="30"
              rows="5"
            ></textarea>
          </div>
        </div>
        <!--  -->
        <div class="row mt-4">
          <div class="col-4 mt-2"><h4>อัพโหลดรูปภาพ</h4></div>
          <div class="col-4 setpadding">
            <div class="custom-file">
              <input type="file" class="custom-file-input" />
              <label class="custom-file-label" for="customFile"></label>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="row mt-3">
          <div class="col-2"></div>
          <div class="col-4">
            <button
              class="btn btn-danger float-right"
              @click="$router.push('/')"
            >
              ยกเลิก
            </button>
          </div>
          <div class="col-4">
            <button class="btn btn-primary" @click="confirmAdd">
              ยืนยัน
            </button>
          </div>
          <div class="col-2"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  middleware: 'auth',
  data() {
    return {
      sections: [{ id: 1, content: '', subSection: [{ id: 1, content: '' }] }],
      principle: '',
      reason: '',
      description: '',
      conclusion: '',
      type: -1,
      title: '',
      user: '',
    }
  },
  created() {
    this.user = this.$auth.user.person
    console.log(this.user)
  },
  methods: {
    ...mapActions({
      addLaw: 'law/add',
    }),
    addSection() {
      this.sections.push({
        id: this.sections[this.sections.length - 1].id + 1,
        content: '',
        subSection: [{ id: 1, content: '' }],
      })
    },
    addSubSec(index) {
      const subsec = this.sections[index].subSection
      this.sections[index].subSection.push({
        id: subsec[subsec.length - 1].id + 1,
        content: '',
      })
    },
    confirmAdd() {
      this.addLaw({
        sections: this.sections,
        principle: this.principle,
        reason: this.reason,
        description: this.description,
        conslusion: this.conclusion,
        type: this.type,
        title: this.title,
      })
    },
  },
}
</script>
<style scoped>
.setpadding {
  padding: 0% !important;
}
h4 {
  font-size: 22px;
  font-family: Sarabun;
}
.text-center {
  margin-top: 5%;
}
.form-control {
  margin-bottom: 2%;
}
.input {
  margin-bottom: 2%;
}
label {
  font-family: Sarabun;
  font-size: 22px;
}
.card-container {
  width: 100% !important;
}

.btn-circle.btn-xl {
  width: 70px;
  height: 70px;
  padding: 10px 16px;
  border-radius: 35px;
  font-size: 24px;
  line-height: 1.33;
}

.btn-circle {
  width: 30px;
  height: 30px;
  padding: 6px 0px;
  border-radius: 15px;
  text-align: center;
  font-size: 12px;
  line-height: 1.42857;
}
</style>
