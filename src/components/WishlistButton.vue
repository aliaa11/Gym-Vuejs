<template>
    <button 
      @click="toggleWishlist"
      class="wishlist-btn"
      :class="{ active: isInWishlist }"
    >
      ♥
    </button>
  </template>
  
  <script>
  import { useAuthStore } from '@/stores/auth'
  import { computed } from 'vue'
  
  export default {
    name: 'WishlistButton',
    props: {
      classItem: {
        type: Object,
        required: true
      }
    },
    setup(props) {
      const authStore = useAuthStore()
      
      const isInWishlist = computed(() => {
        return authStore.user?.wishlist?.some(item => 
          item.className === props.classItem.className && 
          item.trainer === props.classItem.trainer
        )
      })
      
      const toggleWishlist = async () => {
        if (!authStore.isAuthenticated) return;
        
        if (isInWishlist.value) {
          const itemToRemove = authStore.user.wishlist.find(item => 
            item.className === props.classItem.className && 
            item.trainer === props.classItem.trainer
          );
          if (itemToRemove?.id) {
            await authStore.removeFromWishlist(itemToRemove.id);
          }
        } else {
          await authStore.addToWishlist(props.classItem);
        }
      }
      
      return { isInWishlist, toggleWishlist }
    }
  }
  </script>
  
  <style scoped>
  .wishlist-btn {
    position: absolute;
    top: 15px;
    right: 15px;
    background: rgba(255, 255, 255, 0.8);
    border: none;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    font-size: 16px;
    color: #ccc;
    cursor: pointer;
    z-index: 2;
    transition: all 0.3s ease;
  }
  
  .wishlist-btn:hover {
    color: #eb3c5a;
    transform: scale(1.1);
  }
  
  .wishlist-btn.active {
    color: #eb3c5a;
  }
  </style>