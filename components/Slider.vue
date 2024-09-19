<template>
  <div class="parent-container">
    <!-- Slider Section -->
    <div class="slider-section">
      <img :src="currentImage" id="slider-image" />
   
    </div>
    <img  class="overlayss"src="@/assets/img/Rectangle3103.png">
    <!-- Circle Indicators -->
    <div class="slider-indicators">
      <div
        v-for="(circle, index) in images"
        :key="index"
        :class="['circle', { active: currentSlide === index }]"
        @click="changeSlide(index)"
      >
    

    </div>
    </div>
  </div>
</template>

  
  <script>
import img1 from '@/assets/img/e03b123ac460f3ee2e447b750c0bfc62.png'
import img2 from '@/assets/img/DSC_9086.png'
import img3 from '@/assets/img/e03b123ac460f3ee2e447b750c0bfc62.png'
import img4 from '@/assets/img/e03b123ac460f3ee2e447b750c0bfc62.png'

export default {
  data() {
    return {
      currentSlide: 0,
      images: [img1, img2, img3, img4]
    }
  },
  computed: {
    currentImage() {
      return this.images[this.currentSlide]
    }
  },
  methods: {
    changeSlide(index) {
      this.currentSlide = index
    }
  },
  mounted() {
    this.changeSlide(0)
  }
}

  </script>
  
  <style scoped>
.parent-container {
  position: absolute; /* Positioning the container absolutely */
  top: 344px;
  left: 185px;
  width: 1550px;
  height: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.slider-section {
  width: 100%;
  max-width: 1550px; /* Limits slider width */
  height: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: #f0f0f0;
  border-radius: 30px;
}

.slider-section img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slider-indicators {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px; /* Adds space between slider and indicators */
}

.circle {
  width: 15px;
  height: 15px;
  background-color: #ccc;
  border-radius: 30px;
  margin: 0 10px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.circle.active {
  width: 30px;
  background-color: #333;
}
.overlayss {
  position: absolute; /* Overlay resmini konumlandırmak için kullanılır */
  width: 1550px; /* Limits slider width */
  height: 620px;
  pointer-events: none; /* Kullanıcının overlay'e tıklamasını engeller */
  border-radius: 20px 20px 20px 20px;
  top:0;
}
  </style>
  