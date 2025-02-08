// background.js
chrome.alarms.create('quoteAlarm', {
  periodInMinutes: 60 // Show new quote every hour
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'quoteAlarm') {
    chrome.notifications.create({
      type: 'basic',
      iconUrl: 'icon48.png',
      title: 'Daily Motivation',
      message: quotes[Math.floor(Math.random() * quotes.length)].text
    });
  }
});
