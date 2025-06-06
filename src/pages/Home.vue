<template>
  <div class="home-page">
    <HeroSection
      v-if="homeData.heroSection"
      :title="homeData.heroSection.title"
      :subtitle="homeData.heroSection.subtitle"
      :backgroundImage="homeData.heroSection.backgroundImage"
      :featureTitle="homeData.heroSection.features[0].title"
      :featureDescription="homeData.heroSection.features[0].description"
    />
    
    <VideoSection
      v-if="homeData.aboutUs"
      :title="homeData.aboutUs.title"
      :content="homeData.aboutUs.content"
      :signature="homeData.aboutUs.signature"
      :video="homeData.aboutUs.video"
    />
    
    <ServicesSection
      v-if="homeData.services"
      :services="homeData.services"
    />
    <ClassesGallery 
      v-if="homeData.classes"
      :classes="homeData.classes"
      :itemsPerPage="6"
    />
    <TrainersGallery 
      v-if="homeData.trainers"
      :trainers="homeData.trainers"
    />
    <TestimonialCarousel 
      v-if="homeData.testimonial"
      :testimonials="homeData.testimonial"
    />
    <GetTrainingToday 
      v-if="homeData.getTrainingToday"
      :title="homeData.getTrainingToday.title"
      :subtitle="homeData.getTrainingToday.subtitle"
      :description="homeData.getTrainingToday.description"
      :buttonText="homeData.getTrainingToday.buttonText"
      :backgroundImage="homeData.getTrainingToday.backgroundImage"
      :personImage="homeData.getTrainingToday.personImage"
      @contact-clicked="handleContact"
    />
    <MembershipPlans 
      v-if="homeData.membershipPlans"
      :plans="homeData.membershipPlans"
      @plan-selected="handlePlanSelection"
    />
    <LatestBlog 
      v-if="homeData.blog"
      :blogPosts="homeData.blog.slice(0, 3)"
    />
    <LastComponentinabout />
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { useHomeStore } from '@/stores/home'
import { storeToRefs } from 'pinia'

import HeroSection from '@/components/HeroSection.vue'
import VideoSection from '@/components/VideoSection.vue'
import ServicesSection from '@/components/ServicesSection.vue'
import TrainersGallery from '@/components/TrainersGallery.vue'
import ClassesGallery from '@/components/ClassesGallery.vue'
import TestimonialCarousel from '@/components/TestimonialCarousel.vue'
import GetTrainingToday from '@/components/GetTrainingToday.vue'
import MembershipPlans from '@/components/MembershipPlans.vue'
import LatestBlog from '@/components/LatestBlog.vue'
import LastComponentinabout from '@/components/LastComponentinabout.vue'

export default {
  name: 'Home',
  components: {
    HeroSection,
    VideoSection,
    ServicesSection,
    TrainersGallery,
    ClassesGallery,
    TestimonialCarousel,
    GetTrainingToday,
    MembershipPlans,
    LatestBlog,
    LastComponentinabout
  },
  setup() {
    const homeStore = useHomeStore()
    const { homeData } = storeToRefs(homeStore)

    onMounted(() => {
      homeStore.fetchHomeData()
    })

    const handleContact = () => {
      console.log('Contact clicked!')
    }

    const handlePlanSelection = (plan) => {
      console.log('Plan selected:', plan)
    }

    return {
      homeData,
      handleContact,
      handlePlanSelection
    }
  }
}
</script>
