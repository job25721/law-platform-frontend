<template>
  <div>
    <Nav />
    <div class="container">
      <h2>บัตรประชาชน</h2>
      <!-- eslint-disable -->
      <Camera @takePicture="this.takePicture" />
      <!-- eslint-enable -->
      <Gallery />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    takePicture() {
      const ratio = window.innerHeight < window.innerWidth ? 16 / 9 : 9 / 16
      const picture = document.querySelector('canvas')
      // picture.width = window.innerWidth < 1280 ? window.innerWidth : 1280
      // picture.height = window.innerWidth / ratio
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
    },
  },
}
</script>
