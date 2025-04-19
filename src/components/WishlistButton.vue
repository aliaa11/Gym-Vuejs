<template>
  <button 
    @click="toggleWishlist"
    class="wishlist-btn"
    :class="{ active: isInWishlist }"
  >
    <i class="fa-solid fa-heart"></i>
  </button>
</template>

<script>
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';
import { computed } from 'vue';

export default {
  name: 'WishlistButton',
  props: {
    classItem: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const authStore = useAuthStore();
    const router = useRouter();

    const isInWishlist = computed(() => {
      return authStore.user?.wishlist?.some(item =>
        item.className === props.classItem.className &&
        item.trainer === props.classItem.trainer
      );
    });

    const toggleWishlist = async () => {
      if (!authStore.isAuthenticated) {
        router.push({ name: 'Login' });
        return;
      }

      try {
        if (isInWishlist.value) {
          const item = authStore.user.wishlist.find(item =>
            item.className === props.classItem.className &&
            item.trainer === props.classItem.trainer
          );
          if (item?.id) {
            await authStore.removeFromWishlist(item.id);
          }
        } else {
          await authStore.addToWishlist(props.classItem);
        }
      } catch (err) {
        console.error('Wishlist error:', err);
      }
    };

    return { isInWishlist, toggleWishlist };
  }
};
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
.wishlist-btn i {
  transition: all 0.3s ease;
  color: rgb(219 167 167 / 80%);
}
.wishlist-btn:hover i {
  color: #eb3c5a;
  transform: scale(1.1);
}
.wishlist-btn.active i {
  color: #eb3c5a;
}
</style>
