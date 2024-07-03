document.addEventListener('DOMContentLoaded', () => {
    const currentTimeElement = document.querySelector('[data-testid="current-time"]');
    const currentDayElement = document.querySelector('[data-testid="current-day"]');
  
    function updateTimeAndDay() {
      const now = new Date();
      const utcTime = now.toUTCString().split(' ')[4];
      const dayOfWeek = now.toLocaleString('en-US', { weekday: 'long' });
  
      currentTimeElement.textContent = utcTime;
      currentDayElement.textContent = dayOfWeek;
    }
  
    updateTimeAndDay();
    setInterval(updateTimeAndDay, 60000); // Update every minute
  
    console.log('Website loaded successfully!');
  });
  