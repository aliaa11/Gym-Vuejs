<template>
    <section class="story-about-us">
      <div class="container">
        <div class="story-content">
          <!-- Video/Image Section -->
          <div class="story-media">
            <div class="video-container">
              <img :src="storyData.videoThumbnail" alt="Fitness video thumbnail" class="video-thumbnail">
              <div class="play-button" @click="playVideo">
                <div class="play-icon"></div>
              </div>
            </div>
          </div>
          
          <!-- Text Content Section -->
          <div class="story-text">
            <h2 class="story-title">{{ storyData.title }}</h2>
            
            <div class="story-paragraphs">
              <p v-for="(paragraph, index) in storyData.paragraphs" :key="index" class="story-paragraph">
                {{ paragraph }}
              </p>
            </div>
            
            <div class="founder-info">
              <img :src="storyData.signatureImage" alt="Signature" class="signature-image">
              <h3 class="founder-name">{{ storyData.founderName }}</h3>
              <p class="founder-title">{{ storyData.founderTitle }}</p>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Video Modal -->
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
    </section>
  </template>
  
  <script>
  export default {
    name: 'StoryAboutUs',
    data() {
      return {
        showVideo: false,
        storyData: {
          title: 'STORY ABOUT US',
          paragraphs: [
            'Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean pretium sollicitudin, nascetur auci elit consequat ipsutissem niuis sed odio sit amet nibh vulputate cursus a amet.',
            'Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, gravida quam semper libero sit amet.'
          ],
          videoThumbnail: '/img/about-pic.jpg',
          signatureImage: '/img/about-signature.png',
          founderName: 'Lettie Chavez',
          founderTitle: 'CEO - Founder'
        }
      }
    },
    computed: {
      videoUrl() {
        // Adding autoplay=1 to automatically play when modal opens
        return 'https://www.youtube.com/embed/JYNa_9pYLGw?si=cvveXHV3wGBH1IYp&autoplay=1'
      }
    },
    methods: {
      playVideo() {
        this.showVideo = true
        // Prevent scrolling when modal is open
        document.body.style.overflow = 'hidden'
      },
      closeVideo() {
        this.showVideo = false
        // Re-enable scrolling when modal is closed
        document.body.style.overflow = 'auto'
      }
    }
  }
  </script>
  
  <style scoped>
  .story-about-us {
    padding: 5rem 0;
    background-color: #fff;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }
  
  .story-content {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 2rem;
  }
  
  .story-media {
    flex: 1;
    min-width: 300px;
  }
  
  .video-container {
    position: relative;
    overflow: hidden;
    border-radius: 4px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  .video-thumbnail {
    width: 100%;
    display: block;
    transition: transform 0.5s ease;
  }
  
  .video-container:hover .video-thumbnail {
    transform: scale(1.03);
  }
  
  .play-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 80px;
    background-color: rgba(255, 94, 94, 0.9);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .play-button:hover {
    background-color: rgba(255, 61, 61, 1);
    transform: translate(-50%, -50%) scale(1.1);
  }
  
  .play-icon {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 15px 0 15px 25px;
    border-color: transparent transparent transparent #ffffff;
    margin-left: 5px;
  }
  
  .story-text {
    flex: 1;
    min-width: 300px;
  }
  
  .story-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: #333;
  }
  
  .story-paragraph {
    font-size: 1rem;
    line-height: 1.7;
    color: #666;
    margin-bottom: 1.5rem;
  }
  
  .founder-info {
    margin-top: 2rem;
  }
  
  .signature-image {
    max-width: 150px;
    margin-bottom: 1rem;
  }
  
  .founder-name {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 0 0.3rem;
    color: #333;
  }
  
  .founder-title {
    font-size: 1rem;
    color: #ff5e5e;
    margin: 0;
  }
  
  /* Video Modal Styles */
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
    border-radius: 4px;
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
    transition: transform 0.2s ease;
  }
  
  .close-button:hover {
    transform: scale(1.1);
  }
  
  @media (max-width: 992px) {
    .story-content {
      flex-direction: column;
    }
    
    .story-media,
    .story-text {
      width: 100%;
    }
    
    .story-title {
      font-size: 2.2rem;
    }
  }
  
  @media (max-width: 768px) {
    .story-about-us {
      padding: 3rem 0;
    }
    
    .story-title {
      font-size: 2rem;
    }
    
    .play-button {
      width: 60px;
      height: 60px;
    }
    
    .play-icon {
      border-width: 12px 0 12px 20px;
    }
    
    .close-button {
      top: -35px;
      font-size: 26px;
    }
  }
  </style>