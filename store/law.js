export const state = () => ({})

export const mutations = {}

export const actions = {
  vote() {
    this.$swal({
      title: 'ต้องการโหวตกฎหมายนี้',
      text: 'สามารถกดโหวตได้ครั้งเดียวเท่านั้นไม่สามารถยกเลิกผลโหวตได้',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ตกลง',
    }).then((result) => {
      if (result.value) {
        this.$swal('โหวตสำเร็จ!', 'คุณได้โหวคให้กฎหมายนี้แล้ว', 'success')
      }
    })
  },
}
