export const state = () => ({
  laws: [],
})

export const mutations = {
  SET_LAWS(state, payload) {
    state.laws = payload
  },
}

export const actions = {
  async getLaws({ commit }) {
    try {
      const res = await this.$axios.$get('/laws')
      console.log(res)
      commit('SET_LAWS', res.data.laws)
    } catch {}
  },
  voteConfirm({ dispatch }, lawId) {
    console.log(`lawId ${lawId}`)
    this.$swal({
      title: 'ต้องการเข้าชื่อเสนอกฎหมายนี้',
      text: 'สามารถกดโหวตได้ครั้งเดียวเท่านั้นไม่สามารถยกเลิกผลโหวตได้',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ตกลง',
      cancelButtonText: 'ยกเลิก',
    }).then(async (result) => {
      if (result.value) {
        try {
          await dispatch('vote', lawId)
          this.$swal('โหวตสำเร็จ!', 'คุณได้โหวคให้กฎหมายนี้แล้ว', 'success')
        } catch {
          this.$swal('ผิดพลาด', 'โหวตไปแล้ว', 'error')
        }
      }
    })
  },
  async vote(context, lawId) {
    try {
      await this.$axios.$post(`/person/vote/${lawId}`)
    } catch (err) {
      console.log(err)
      throw err
    }
  },
  async add(
    context,
    { sections, principle, reason, description, conslusion, type, title }
  ) {
    const sec = sections.map((section) => {
      let str = `หมวดที่ ${section.id} ${section.content} `
      section.subSection.forEach((sub) => {
        str += `มาตรา ${sub.id} ${sub.content} `
      })
      return str
    })
    console.log(conslusion)
    try {
      // eslint-disable-next-line unicorn/error-message
      if (type === -1) throw new Error()
      else {
        await this.$axios.$post('/person/laws', {
          title,
          type,
          description,
          section: sec,
          principle,
          reason,
          conslusion,
        })
        this.$swal('Success', 'ริเริ่มสำเร็จ', 'success')
        this.$rouer.push('/mylaw')
      }
    } catch {
      this.$swal('Error', 'ริเริ่มไม่สำเร็จ', 'error')
    }
  },
  async sendToAdmin(context, lawId) {
    try {
      await this.$axios.$post(`/person/send-admin-allow/${lawId}`)
      this.$swal('สำเร็จ', 'ส่งให้เจ้าหน้าสภาตรวจสอบ รอการยืนยัน', 'success')
      this.$rouer.push('/mylaw')
    } catch (error) {
      this.$swal('ผิดพลาด', 'คุณต้องเป็นเจ้าของกฎหมายนี้', 'error')
    }
  },
  async sendToSubmit(content, lawId) {
    try {
      await this.$axios.$post(`/person/send-admin-submit/${lawId}`)
      this.$swal('สำเร็จ', 'ส่งให้เจ้าหน้าสภาตรวจสอบ รอการยืนยัน', 'success')
      this.$rouer.push('/mylaw')
    } catch (error) {
      this.$swal('ผิดพลาด', 'คุณต้องเป็นเจ้าของกฎหมายนี้', 'error')
    }
  },
}
