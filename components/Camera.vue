<template>
  <div
    class="camera d-flex justify-content-center align-items-center flex-column"
  >
    <div
      style="position: relative;"
      class="w-50 h-50 d-flex justify-content-center align-items-center"
    >
      <div class="test"></div>
      <video autoplay class="feed"></video>
    </div>

    <div>
      <button class="button" @click="$emit('takePicture')">ถ่ายรูป</button>
    </div>
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
.test {
  border: 5px solid white;
  border-radius: 10px;
  width: 80%;
  height: 80%;
  position: absolute;
  z-index: 1;
}

.camera .feed {
  display: block;
  margin: auto;
  width: 50%;
  max-width: 1280px;
  box-shadow: 4px 4px 12px 0px rgba(0, 0, 0, 0.25);
  position: relative;
}

.feed {
  width: 100% !important;
  height: 100% !important;
}
</style>
