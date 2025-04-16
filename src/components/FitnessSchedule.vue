// FitnessSchedule.vue
<template>

  <div class="fitness-schedule m-5">
    <h2 class="text-4xl font-bold text-center mb-5">Fitness Schedule</h2>
    <div class="filter-tabs">
      <button 
        v-for="filter in filters" 
        :key="filter"
        :class="['filter-btn', { active: activeFilter === filter }]"
        @click="setFilter(filter)"
      >
        {{ filter }}
      </button>
    </div>
    
    <div class="schedule-table">
      <div class="schedule-header">
        <div class="time-column"></div>
        <div v-for="day in days" :key="day" class="day-column">{{ day }}</div>
      </div>
      
      <div v-for="timeSlot in timeSlots" :key="timeSlot.time" class="schedule-row">
        <div class="time-column">{{ timeSlot.time }}</div>
        <div v-for="day in days" :key="day" class="class-cell">
          <div 
            v-if="getClassForTimeAndDay(timeSlot.time, day)" 
            :class="['class-item', getClassForTimeAndDay(timeSlot.time, day).type.toLowerCase()]"
            v-show="shouldShowClass(getClassForTimeAndDay(timeSlot.time, day))"
          >
            <div class="class-type">{{ getClassForTimeAndDay(timeSlot.time, day).type }}</div>
            <div class="class-time">{{ getClassForTimeAndDay(timeSlot.time, day).startTime }} - {{ getClassForTimeAndDay(timeSlot.time, day).endTime }}</div>
            <div class="class-trainer">{{ getClassForTimeAndDay(timeSlot.time, day).trainer }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeFilter: 'ALL CLASS',
      filters: ['ALL CLASS', 'GYM', 'CROSSFIT', 'CARDIO', 'BODY', 'YOGA', 'RUNNING', 'BOX'],
      days: ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'],
      timeSlots: [
        { time: '10.00' },
        { time: '14.00' },
        { time: '16.00' },
        { time: '18.00' },
        { time: '20.00' }
      ],
      classes: [
        { day: 'TUESDAY', startTime: '10.00', endTime: '11.00', type: 'GYM', trainer: 'John Smith', timeSlot: '10.00' },
        { day: 'THURSDAY', startTime: '10.00', endTime: '12.00', type: 'YOGA', trainer: 'John Smith', timeSlot: '10.00' },
        { day: 'FRIDAY', startTime: '10.00', endTime: '12.00', type: 'BODY', trainer: 'John Smith', timeSlot: '10.00' },
        { day: 'SUNDAY', startTime: '10.00', endTime: '11.00', type: 'CARDIO', trainer: 'John Smith', timeSlot: '10.00' },
        
        { day: 'WEDNESDAY', startTime: '14.00', endTime: '16.00', type: 'RUNNING', trainer: 'John Smith', timeSlot: '14.00' },
        { day: 'THURSDAY', startTime: '14.00', endTime: '15.00', type: 'BOX', trainer: 'John Smith', timeSlot: '14.00' },
        { day: 'SATURDAY', startTime: '14.00', endTime: '16.00', type: 'GYM', trainer: 'John Smith', timeSlot: '14.00' },
        
        { day: 'MONDAY', startTime: '16.00', endTime: '18.00', type: 'CARDIO', trainer: 'John Smith', timeSlot: '16.00' },
        { day: 'THURSDAY', startTime: '16.00', endTime: '19.00', type: 'GYM', trainer: 'John Smith', timeSlot: '16.00' },
        { day: 'FRIDAY', startTime: '16.00', endTime: '18.00', type: 'YOGA', trainer: 'John Smith', timeSlot: '16.00' },
        { day: 'SUNDAY', startTime: '16.00', endTime: '20.00', type: 'GYM', trainer: 'John Smith', timeSlot: '16.00' },
        
        { day: 'MONDAY', startTime: '18.00', endTime: '22.00', type: 'BOX', trainer: 'John Smith', timeSlot: '18.00' },
        { day: 'WEDNESDAY', startTime: '18.00', endTime: '20.00', type: 'BODY', trainer: 'John Smith', timeSlot: '18.00' },
        { day: 'THURSDAY', startTime: '18.00', endTime: '21.00', type: 'CROSSFIT', trainer: 'John Smith', timeSlot: '18.00' },
        { day: 'SATURDAY', startTime: '18.00', endTime: '22.00', type: 'CARDIO', trainer: 'John Smith', timeSlot: '18.00' },
        
        { day: 'WEDNESDAY', startTime: '20.00', endTime: '22.00', type: 'GYM', trainer: 'John Smith', timeSlot: '20.00' },
        { day: 'THURSDAY', startTime: '20.00', endTime: '21.00', type: 'BODY', trainer: 'John Smith', timeSlot: '20.00' },
        { day: 'FRIDAY', startTime: '20.00', endTime: '22.00', type: 'CARDIO', trainer: 'John Smith', timeSlot: '20.00' },
        { day: 'SUNDAY', startTime: '20.00', endTime: '21.00', type: 'CROSSFIT', trainer: 'John Smith', timeSlot: '20.00' },
      ]
    };
  },
  methods: {
    setFilter(filter) {
      this.activeFilter = filter;
    },
    getClassForTimeAndDay(time, day) {
      return this.classes.find(c => c.timeSlot === time && c.day === day);
    },
    shouldShowClass(classItem) {
      if (!classItem) return false;
      return this.activeFilter === 'ALL CLASS' || classItem.type === this.activeFilter;
    }
  }
};
</script>

<style scoped>
.fitness-schedule {
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
}

.filter-tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  gap: 5px;
}

.filter-btn {
  padding: 10px 15px;
  border: none;
  background-color: #f5f5f5;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: bold;
}

.filter-btn:hover {
  background-color: #e0e0e0;
}

.filter-btn.active {
  background-color: #ff6b6b;
  color: white;
}

.schedule-table {
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
}

.schedule-header {
  display: flex;
  background-color: #f5f5f5;
  font-weight: bold;
}

.time-column {
  width: 80px;
  padding: 15px;
  text-align: center;
  border-right: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  font-weight: bold;
}

.day-column {
  flex: 1;
  padding: 15px;
  text-align: center;
  border-right: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
}

.day-column:last-child {
  border-right: none;
}

.schedule-row {
  display: flex;
}

.class-cell {
  flex: 1;
  height: 120px;
  padding: 10px;
  border-right: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
}

.class-cell:last-child {
  border-right: none;
}

.schedule-row:last-child .class-cell {
  border-bottom: none;
}

.class-item {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  border-radius: 4px;
  color: white;
  text-align: center;
  transition: all 0.3s ease;
  background-color:darkgray;
  cursor: pointer;
}

.class-item:hover {
  transform: scale(1.05);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  background-color: #ff6b6b;
}

.class-type {
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 5px;
}

.class-time {
  margin-bottom: 5px;
}

.class-trainer {
  font-size: 14px;
}

</style>