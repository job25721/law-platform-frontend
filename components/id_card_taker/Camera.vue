<template>
  <div
    class="camera d-flex justify-content-center align-items-center flex-column"
  >
    <div
      style="position: relative;"
      class="w-50 h-50 d-flex justify-content-center align-items-center"
    >
      <div class="test">
        <h4
          class="d-flex justify-content-center"
          style="color: white; margin-top: -40px;"
        >
          บัตรประชาชน
        </h4>
      </div>

      <div class="person">
        <h4
          class="d-flex justify-content-center"
          style="color: #82caff; margin-top: -40px;"
        >
          ใบหน้า
        </h4>
      </div>
      <video autoplay class="feed"></video>
    </div>

    <div>
      <button
        type="button"
        class="btn btn-primary m-4"
        data-toggle="modal"
        data-target="#exampleModal"
        @click="$emit('takePicture')"
      >
        ถ่ายรูปหน้าคู่กับบัตรประชาชน
      </button>

      <!-- Modal -->
      <div
        id="exampleModal"
        class="modal fade"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body d-flex justify-content-center">
              <div>
                <canvas></canvas>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                ถ่ายใหม่อีกรอบ
              </button>
              <button
                type="button"
                class="btn btn-primary"
                data-dismiss="modal"
                @click="$router.push('/verification')"
              >
                ถัดไป
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- <button class="button" @click="$emit('takePicture')">ถ่ายรูป</button> -->
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
.person {
  border: 5px solid #82caff;
  border-radius: 10px;
  margin-right: 300px;
  width: 30%;
  height: 80%;
  position: absolute;
  z-index: 1;
}

.test {
  border: 5px solid white;
  margin-top: 130px;
  margin-left: 200px;
  border-radius: 10px;
  width: 50%;
  height: 40%;
  position: absolute;
  z-index: 1;
}

.camera .feed {
  display: block;
  margin: auto;
  width: 100%;
  max-width: 1280px;
  box-shadow: 4px 4px 12px 0px rgba(0, 0, 0, 0.25);
  position: relative;
  transform: scaleX(-1);
}

.feed {
  width: 100% !important;
  height: 100% !important;
}
</style>
