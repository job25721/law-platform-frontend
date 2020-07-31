<template>
  <div class="camera">
    <video autoplay class="feed"></video>
    <button @click="$emit('takePicture')">ถ่ายรูป</button>
  </div>
</template>

<script>
export default {
  beforeMount() {
    this.init()
  },
  methods: {
    init() {
      if (
        'mediaDevices' in navigator &&
        'getUserMedia' in navigator.mediaDevices
      ) {
        const constraints = {
          video: {
            width: {
              min: 640,
              ideal: 1280,
              max: 1920,
            },
            height: {
              min: 360,
              ideal: 720,
              max: 1080,
            },
          },
        }
        navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
          // navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
          const videoPlayer = document.querySelector('video')
          videoPlayer.srcObject = stream
          videoPlayer.play()
        })
      } else {
        alert('Cannot get media Devices')
      }
    },
  },
}
</script>

<style>
.camera {
  width: '100vw';
  height: '100vh';
}
.camera .feed {
  display: block;
  margin: auto;
  width: 50%;
  max-width: 1280px;
  box-shadow: 4px 4px 12px 0px rgba(0, 0, 0, 0.25);
}
</style>
