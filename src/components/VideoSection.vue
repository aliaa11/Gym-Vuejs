<template>
  <section class="video-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ title }}</h2>
      </div>
      
      <div class="video-content">
        <div class="video-container" >
          <img :src="video.thumbnail" alt="Video thumbnail" class="video-thumbnail position-relative">
          <i class="fa-regular fa-circle-play position-absolute icon" @click="playVideo"></i>
        </div>

        <div class="text-content">
          <p v-for="(paragraph, index) in content" :key="index">{{ paragraph }}</p>
          <div class="signature">{{ signature }}</div>
        </div>
      </div>
      
      <div class="video-modal" v-if="showVideo">
        <div class="modal-overlay" @click="closeVideo"></div>
        <div class="modal-content">
          <button class="close-button" @click="closeVideo">&times;</button>
          <iframe 
            width="100%" 
            height="100%" 
            :src="videoUrl" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'VideoSection',
  props: {
    title: {
      type: String,
      default: 'STORY ABOUT US'
    },
    content: {
      type: Array,
      default: () => []
    },
    signature: {
      type: String,
      default: ''
    },
    video: {
      type: Object,
      default: () => ({
        thumbnail: '',
        youtubeId: ''
      })
    }
  },
  data() {
    return {
      showVideo: false
    }
  },
  computed: {
    videoUrl() {
      return `https://www.youtube.com/embed/JYNa_9pYLGw?si=cvveXHV3wGBH1IYp"?autoplay=1`
    }
  },
  methods: {
    playVideo() {
      this.showVideo = true
      document.body.style.overflow = 'hidden'
    },
    closeVideo() {
      this.showVideo = false
      document.body.style.overflow = 'auto'
    }
  }
}
</script>

<style scoped>
.video-section {
  padding: 80px 0;
  background-color: #f8f8f8;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
.icon
{
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 70px;
    color: #bd581d;
    cursor: pointer;
}
.section-header {
  text-align: center;
  margin-bottom: 50px;
}

.section-title {
  font-size: 2.5rem;
  color: #333;
  position: relative;
  display: inline-block;
  padding-bottom: 15px;
  font-weight: bold;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: linear-gradient(to right, #eb3c5a, #f67831);
}

.video-content {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  align-items: center;
}

.text-content {
  flex: 1;
  min-width: 300px;
}

.text-content p {
  color: #666;
  line-height: 1.8;
  margin-bottom: 20px;
  font-size: 1.1rem;
}

.signature {
  font-weight: bold;
  font-style: italic;
  margin-top: 30px;
  color: #333;
}

.video-container {
  flex: 1;
  min-width: 300px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}


.video-thumbnail {
  width: 100%;
  height: auto;
  display: block;
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background-color: rgba(235, 60, 90, 0.8);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.play-button i {
  color: white;
  font-size: 30px;
  margin-left: 5px;
}

.video-container:hover .play-button {
  background-color: rgba(235, 60, 90, 1);
  transform: translate(-50%, -50%) scale(1.1);
}

.video-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
}

.modal-content {
  position: relative;
  width: 90%;
  max-width: 900px;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  z-index: 1001;
}

.modal-content iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.close-button {
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 30px;
  cursor: pointer;
  z-index: 1002;
}

@media (max-width: 768px) {
  .video-content {
    flex-direction: column;
  }
  
  .section-title {
    font-size: 2rem;
  }
}
</style>