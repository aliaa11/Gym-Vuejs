  
  <template>
    <div class="profile-container">
      <div v-if="userStore.loading" class="loading-container">
        <div class="loading-spinner"></div>
        <p>Loading your profile...</p>
      </div>
      
      <div v-else-if="userStore.error" class="error-container">
        <div class="error-icon">!</div>
        <p>{{ userStore.error }}</p>
        <button @click="userStore.loadUserData(); userStore.fetchSubscription();" class="retry-btn">
          Try Again
        </button>
      </div>
      
      <div v-else-if="!userStore.isLoggedIn" class="not-logged-in">
        <div class="login-icon">🔒</div>
        <h2>Account Access Required</h2>
        <p>Please log in to view your profile information and subscription details</p>
        <button class="login-btn">Log In</button>
      </div>
      
      <div v-else class="profile-content">

        
        <!-- User Information Card -->
        <div class="card user-info-card">
          <div class="card-header">
            <h2>Personal Information</h2>
          </div>
          
          <div v-if="!isEditing" class="card-content">
            <div class="user-info-field">
              <span class="field-label">Full Name:</span>
              <span class="field-value">{{ userStore.fullName }}</span>
            </div>
            <div class="user-info-field">
              <span class="field-label">Email:</span>
              <span class="field-value">{{ userStore.userData.email }}</span>
            </div>
            <div class="user-info-field">
              <span class="field-label">Mobile:</span>
              <span class="field-value">{{ userStore.userData.mobile || 'Not provided' }}</span>
            </div>
          </div>
          
        </div>
        
        <div v-if="userStore.subscription" class="card subscription-card">
          <div class="card-header">
            <h2>My Subscription</h2>
            <div class="status-badge" :style="{ 
              backgroundColor: subscriptionStatus.bgColor, 
              color: subscriptionStatus.color 
            }">
              {{ subscriptionStatus.text }}
            </div>
          </div>
          
          <div class="card-content">
            <div class="plan-name-container">
              <div class="plan-name">{{ userStore.subscription.planName }}</div>
              <div class="plan-price">${{ userStore.subscription.price }} / {{ userStore.subscription.duration }}</div>
            </div>
            
            <div class="progress-container">
              <div class="progress-label">Subscription period</div>
              <div class="progress-bar-container">
                <div class="progress-bar" :style="{ width: Math.min(100 - (daysRemaining / 365 * 100), 100) + '%' }"></div>
              </div>
              <div class="progress-dates">
                <span>{{ userStore.formattedDates.start }}</span>
                <span>{{ userStore.formattedDates.end }}</span>
              </div>
              <div class="progress-days-remaining">{{ daysRemaining }} days remaining</div>
            </div>
            
            <div class="subscription-actions">
                <button class="cancel-subscription-btn" @click="cancelSubscription">
                    Cancel Subscription
                  </button>
            </div>
          </div>
        </div>
        
        <div v-else class="card no-subscription">
          <div class="card-header">
            <h2>No Active Subscription</h2>
          </div>
          
          <div class="card-content">
            <p>You don't currently have an active subscription plan. Upgrade now to access premium features.</p>
          </div>
        </div>
        <div class="card">
            <h2 class="card-title">Messages</h2>
            <ul class="message-list">
              <li v-for="msg in userStore.messages" :key="msg.id" class="message-item">
                <strong>{{ msg.email}}</strong> <br />
                <span class="message-content">{{ msg.message }}</span><br />
              </li>
            </ul>
        </div>
      </div>
    </div>
</template>
<script>
import { defineComponent, onMounted, computed, ref } from 'vue';
import { useUserStore } from '@/stores/userStore';

export default defineComponent({
  setup() {
    const userStore = useUserStore();
    const isEditing = ref(false);
    const editForm = ref({
      firstName: '',
      lastName: '',
      mobile: ''
    });

    onMounted(() => {
      userStore.loadUserData();
      userStore.fetchSubscription();
      userStore.fetchMessages();
    });

    const subscriptionStatus = computed(() => {
      if (!userStore.subscription) return { color: 'gray', text: 'No active plan', bgColor: '#f5f5f5' };
      const status = userStore.subscription.status;
      switch (status) {
        case 'active':
          return { color: '#1e8e3e', text: 'Active', bgColor: '#e6f4ea' };
        case 'expired':
          return { color: '#d93025', text: 'Expired', bgColor: '#fce8e6' };
        case 'pending':
          return { color: '#f29900', text: 'Pending', bgColor: '#fef7e0' };
        default:
          return { color: 'gray', text: status, bgColor: '#f5f5f5' };
      }
    });

    const daysRemaining = computed(() => {
      if (!userStore.subscription) return 0;
      const endDate = new Date(userStore.subscription.endDate);
      const today = new Date();
      const diffTime = endDate - today;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays > 0 ? diffDays : 0;
    });

    const startEditMode = () => {
      if (!userStore.userData) return;
      editForm.value = {
        firstName: userStore.userData.firstName,
        lastName: userStore.userData.lastName,
        mobile: userStore.userData.mobile
      };
      isEditing.value = true;
    };

    const cancelEdit = () => {
      isEditing.value = false;
    };

    const saveUserData = () => {
      const updatedUserData = {
        ...userStore.userData,
        firstName: editForm.value.firstName,
        lastName: editForm.value.lastName,
        mobile: editForm.value.mobile
      };
      localStorage.setItem('user', JSON.stringify(updatedUserData));
      userStore.userData = updatedUserData;
      isEditing.value = false;
    };

    const cancelSubscription = async () => {
      await userStore.cancelSubscription();
    };

    return {
      userStore,
      subscriptionStatus,
      daysRemaining,
      isEditing,
      editForm,
      startEditMode,
      cancelEdit,
      saveUserData,
      cancelSubscription
    };
  }
});
</script>


<style scoped>

  .profile-container {
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #333;
  }
  

  .loading-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .loading-spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 1rem;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  .error-container {
    text-align: center;
    padding: 2rem;
    background-color: #fef1f1;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .error-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background-color: #d93025;
    color: white;
    border-radius: 50%;
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0 auto 1rem;
  }
  
  .retry-btn {
    background-color: #3498db;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
    margin-top: 1rem;
  }
  
  .not-logged-in {
    text-align: center;
    padding: 3rem;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .login-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  .login-btn {
    background-color: #3498db;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
    margin-top: 1.5rem;
    font-size: 1rem;
  }

  .profile-header {
    margin-bottom: 2rem;
  }
  
  .header-main {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .header-main h1 {
    font-size: 2rem;
    font-weight: 600;
    margin: 0;
  }
  
  .header-actions {
    display: flex;
    gap: 1rem;
  }
  
  .edit-btn {
    background-color: #f2f2f2;
    color: #333;
    border: 1px solid #ddd;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
  }
  
  .logout-btn {
    background-color: transparent;
    color: #d93025;
    border: 1px solid #d93025;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
  }
  

  .card {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    margin-bottom: 2rem;
  }
  
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 2rem;
    border-bottom: 1px solid #eee;
  }
  
  .card-header h2 {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
  }
  
  .card-content {
    padding: 1.5rem 2rem;
  }
  

  .user-info-field {
    display: flex;
    margin-bottom: 1.25rem;
  }
  
  .field-label {
    font-weight: 500;
    width: 120px;
    color: #666;
  }
  
  .field-value {
    font-weight: 400;
    flex: 1;
  }
  
  
  /* Subscription Card */
  .status-badge {
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 500;
  }
  
  .plan-name-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }
  
  .plan-name {
    font-size: 1.5rem;
    font-weight: 600;
  }
  
  .plan-price {
    font-size: 1.125rem;
    font-weight: 500;
  }
  
  .progress-container {
    margin-bottom: 2rem;
  }
  
  .progress-label {
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  
  .progress-bar-container {
    height: 8px;
    background-color: #f2f2f2;
    border-radius: 4px;
    margin-bottom: 0.5rem;
    overflow: hidden;
  }
  
  .progress-bar {
    height: 100%;
    background-color: #3498db;
    border-radius: 4px;
  }
  
  .progress-dates {
    display: flex;
    justify-content: space-between;
    font-size: 0.875rem;
    color: #666;
    margin-bottom: 0.5rem;
  }
  
  .progress-days-remaining {
    text-align: right;
    font-weight: 500;
    color: #3498db;
  }
  
  .subscription-actions {
    display: flex;
    gap: 1rem;
  }
  
  
  .cancel-subscription-btn {
    text-align: center;
    background-color: transparent;
    color: #d93025;
    border: 1px solid #d93025;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
  }
  
  /* No Subscription Card */
  .no-subscription .card-content {
    text-align: center;
  }
  
  .plans-preview {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-top: 2rem;
  }
  
  .plan-option {
    width: 180px;
    padding: 1.5rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    position: relative;
  }
  
  .recommended {
    border: 2px solid #3498db;
  }
  
  .recommended-badge {
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #3498db;
    color: white;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 500;
  }
  
  .plan-option h3 {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
  
  .plan-option .plan-price {
    margin-bottom: 1.5rem;
  }
  
  .select-plan-btn {
    width: 100%;
    background-color: #3498db;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
  }
  .message-list {
    list-style: none;
    padding: 0;
    margin-top: 1rem;
  }
  
  .message-item {
    background: #f3f4f6;
    border-radius: 0.5rem;
    padding: 1rem;
    margin-bottom: 1rem;
  }
  
</style>