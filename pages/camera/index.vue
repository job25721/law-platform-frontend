<template>
  <div>
    <Nav />
    <div class="container p-4">
      <h2>ถ่ายใบหน้าคู่กับบัตรประชาชน</h2>
      <!-- eslint-disable -->
      <Camera @takePicture="this.takePicture" />
      <!-- eslint-enable -->
      <!-- <Gallery /> -->
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    takePicture() {
      const ratio = window.innerHeight < window.innerWidth ? 16 / 9 : 9 / 16
      const picture = document.querySelector('canvas')
      picture.width =
        window.innerWidth < 640 ? window.innerWidth : (640 * 3) / 4
      picture.height =
        window.innerHeight < 360 ? window.innerHeight : (360 * 3) / 4
      const ctx = picture.getContext('2d')
      ctx.imageSmoothingEnabled = true
      ctx.imageSmoothingQuality = 'high'
      ctx.drawImage(
        document.querySelector('video'),
        0,
        0,
        picture.width,
        picture.height
      )
      console.log(picture.toDataURL('image/jpeg', 1.0))

      // h1.textContent = 'hey'
      // this.$swal(picture)
    },
  },
}
</script>
