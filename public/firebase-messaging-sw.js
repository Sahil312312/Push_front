/* eslint-disable no-undef */
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
    apiKey: "AIzaSyC1R3UF17w9FGk-DF7wM_u4q_DhI95r_xI",
    authDomain: "pushinh-6699f.firebaseapp.com",
    projectId: "pushinh-6699f",
    storageBucket: "pushinh-6699f.appspot.com",
    messagingSenderId: "723374669208",
    appId: "1:723374669208:web:832af6a49b30023c6dbfed"
  };
  firebase.initializeApp(firebaseConfig);


  // // eslint-disable-next-line no-restricted-globals
  // self.addEventListener('notificationclick', event => {
  //   event.notification.close(); // Close the notification
  
  //   const payload = event.notification.data; // Assuming you attach the data to the notification
  
  //   if (payload && payload.postUrl) {
  //     // Open the post URL when the notification is clicked
  //     clients.openWindow(payload.postUrl);
  //   }
  // });

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
    data:{
      url:`https://zoop-v1-beta.vercel.app/single_post/${payload.notification.id}`
    }
  };

  // eslint-disable-next-line no-restricted-globals
  self.registration.showNotification(notificationTitle, notificationOptions);
});