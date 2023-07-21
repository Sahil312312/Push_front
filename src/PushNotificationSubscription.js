import React, { useEffect, useState } from 'react';

const PushNotificationSubscription = () => {
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    registerServiceWorker();
  }, []);

  const registerServiceWorker = async () => {
    try {
      // Register the service worker
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('Service Worker registered:', registration);

      // Get the push manager
      const serviceWorker = await navigator.serviceWorker.ready;
      const pushManager = serviceWorker.pushManager;

      // Request permission from the user to receive notifications
      const permission = await Notification.requestPermission();
      if (permission !== 'granted') {
        throw new Error('Notification permission denied');
      }

      // Subscribe to push notifications
      const subscription = await pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: 'YOUR_PUBLIC_KEY', // Replace with your VAPID public key
      });

      console.log('Push notification subscribed:', subscription);
      setSubscription(subscription);

      // Send the push subscription object to the backend server
      sendSubscriptionToServer(subscription);
    } catch (error) {
      console.error('Error registering service worker:', error);
    }
  };

  const sendSubscriptionToServer = (subscription) => {
    // Send a POST request to your backend server to store the subscription
    fetch('https://push-410c.onrender.com/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(subscription),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Push subscription sent to the server');
        } else {
          console.error('Failed to send push subscription to the server');
        }
      })
      .catch((error) => {
        console.error('Error sending push subscription to the server:', error);
      });
  };

  return (
    <div>
      {subscription ? (
        <p>Push notifications are enabled!</p>
      ) : (
        <p>Click the button to enable push notifications</p>
      )}
    </div>
  );
};

export default PushNotificationSubscription;
