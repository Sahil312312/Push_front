import React from "react";
import PushNotificationSubscription from "../src/PushNotificationSubscription";

function App() {

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/sw.js')
        .then(registration => {
          console.log('Service Worker registered:', registration);
        })
        .catch(error => {
          console.error('Error registering Service Worker:', error);
        });
    });
  }

  const ask = async () => {
   // Request notification permission on component mount or at an appropriate place in your app
if ('Notification' in window) {
  if (Notification.permission !== 'granted') {
    Notification.requestPermission().then(permission => {
      // Handle the user's response to the permission request
      if (permission === 'granted') {
        console.log('Notification permission granted.');
      } else {
        console.log('Notification permission denied.');
      }
    });
  }
}

  }

  return (
    <div className="App">
     <button onClick={PushNotificationSubscription}>sahil</button>
    </div>
  );
}

export default App;
