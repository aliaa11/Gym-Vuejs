<template>
  <div class="fitness-schedule-container">
    <div class="fitness-schedule">
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
      
      <div class="schedule-wrapper">
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeFilter: 'ALL CLASS',
      filters: ['ALL CLASS', 'GYM', 'CROSSFIT', 'CARDIO', 'BODY', 'YOGA', 'RUNNING', 'BOX'],
      days: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
      timeSlots: [
        { time: '10.00' },
        { time: '14.00' },
        { time: '16.00' },
        { time: '18.00' },
        { time: '20.00' }
      ],
      classes: [
        { day: 'TUE', startTime: '10.00', endTime: '11.00', type: 'GYM', trainer: 'John Smith', timeSlot: '10.00' },
        { day: 'THU', startTime: '10.00', endTime: '12.00', type: 'YOGA', trainer: 'John Smith', timeSlot: '10.00' },
        { day: 'FRI', startTime: '10.00', endTime: '12.00', type: 'BODY', trainer: 'John Smith', timeSlot: '10.00' },
        { day: 'SUN', startTime: '10.00', endTime: '11.00', type: 'CARDIO', trainer: 'John Smith', timeSlot: '10.00' },
        
        { day: 'WED', startTime: '14.00', endTime: '16.00', type: 'RUNNING', trainer: 'John Smith', timeSlot: '14.00' },
        { day: 'THU', startTime: '14.00', endTime: '15.00', type: 'BOX', trainer: 'John Smith', timeSlot: '14.00' },
        { day: 'SAT', startTime: '14.00', endTime: '16.00', type: 'GYM', trainer: 'John Smith', timeSlot: '14.00' },
        
        { day: 'MON', startTime: '16.00', endTime: '18.00', type: 'CARDIO', trainer: 'John Smith', timeSlot: '16.00' },
        { day: 'THU', startTime: '16.00', endTime: '19.00', type: 'GYM', trainer: 'John Smith', timeSlot: '16.00' },
        { day: 'FRI', startTime: '16.00', endTime: '18.00', type: 'YOGA', trainer: 'John Smith', timeSlot: '16.00' },
        { day: 'SUN', startTime: '16.00', endTime: '20.00', type: 'GYM', trainer: 'John Smith', timeSlot: '16.00' },
        
        { day: 'MON', startTime: '18.00', endTime: '22.00', type: 'BOX', trainer: 'John Smith', timeSlot: '18.00' },
        { day: 'WED', startTime: '18.00', endTime: '20.00', type: 'BODY', trainer: 'John Smith', timeSlot: '18.00' },
        { day: 'THU', startTime: '18.00', endTime: '21.00', type: 'CROSSFIT', trainer: 'John Smith', timeSlot: '18.00' },
        { day: 'SAT', startTime: '18.00', endTime: '22.00', type: 'CARDIO', trainer: 'John Smith', timeSlot: '18.00' },
        
        { day: 'WED', startTime: '20.00', endTime: '22.00', type: 'GYM', trainer: 'John Smith', timeSlot: '20.00' },
        { day: 'THU', startTime: '20.00', endTime: '21.00', type: 'BODY', trainer: 'John Smith', timeSlot: '20.00' },
        { day: 'FRI', startTime: '20.00', endTime: '22.00', type: 'CARDIO', trainer: 'John Smith', timeSlot: '20.00' },
        { day: 'SUN', startTime: '20.00', endTime: '21.00', type: 'CROSSFIT', trainer: 'John Smith', timeSlot: '20.00' },
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
.fitness-schedule-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  background-color: #f8f9fa;
}

.fitness-schedule {
  font-family: Arial, sans-serif;
  width: 100%;
  max-width: 1200px;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.filter-tabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
  gap: 5px;
}

.filter-btn {
  padding: 8px 12px;
  border: none;
  background-color: #f5f5f5;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: bold;
  font-size: 12px;
  border-radius: 4px;
}

.filter-btn:hover {
  background-color: #e0e0e0;
}

.filter-btn.active {
  background-color: #ff6b6b;
  color: white;
}

.schedule-wrapper {
  overflow-x: auto;
}

.schedule-table {
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
  min-width: 600px;
}

.schedule-header {
  display: flex;
  background-color: #f5f5f5;
  font-weight: bold;
}

.time-column {
  width: 80px;
  min-width: 80px;
  padding: 15px 5px;
  text-align: center;
  border-right: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  font-weight: bold;
}

.day-column {
  flex: 1;
  min-width: 100px;
  padding: 15px 5px;
  text-align: center;
  border-right: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  font-size: 14px;
}

.day-column:last-child {
  border-right: none;
}

.schedule-row {
  display: flex;
}

.class-cell {
  flex: 1;
  min-width: 100px;
  height: 100px;
  padding: 5px;
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
  padding: 5px;
  border-radius: 4px;
  color: white;
  text-align: center;
  transition: all 0.3s ease;
  border: #ff6b6b 2px solid;
  background-color: rgb(129, 129, 129);
  cursor: pointer;
  font-size: 12px;
}

.class-item:hover {
  transform: scale(1.05);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  background-color: #ff6b6b;
}

.class-type {
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 3px;
}

.class-time {
  margin-bottom: 3px;
  font-size: 11px;
}

.class-trainer {
  font-size: 11px;
}

/* Responsive styles */
@media (max-width: 768px) {
  .fitness-schedule {
    padding: 15px;
  }
  
  .filter-btn {
    padding: 6px 10px;
    font-size: 11px;
  }
  
  .time-column {
    width: 60px;
    min-width: 60px;
    padding: 10px 3px;
    font-size: 12px;
  }
  
  .day-column {
    min-width: 80px;
    padding: 10px 3px;
    font-size: 12px;
  }
  
  .class-cell {
    height: 80px;
    min-width: 80px;
  }
  
  .class-item {
    padding: 3px;
    font-size: 11px;
  }
  
  .class-time, .class-trainer {
    font-size: 10px;
  }
}

@media (max-width: 480px) {
  .fitness-schedule {
    padding: 10px;
  }
  
  .filter-tabs {
    gap: 3px;
  }
  
  .filter-btn {
    padding: 5px 8px;
    font-size: 10px;
  }
  
  .time-column {
    width: 50px;
    min-width: 50px;
    padding: 8px 2px;
    font-size: 11px;
  }
  
  .day-column {
    min-width: 70px;
    padding: 8px 2px;
    font-size: 11px;
  }
  
  .class-cell {
    height: 70px;
    min-width: 70px;
  }
  
  .class-item {
    font-size: 10px;
  }
  
  .class-time, .class-trainer {
    font-size: 9px;
  }
}
</style>