import React from "react";
import { messaging } from "./firebase";
import { getToken } from "firebase/messaging";
// import { getMessaging, getToken } from "firebase/messaging";
import { useEffect } from "react";
import axios from "axios";

const App = () => {
  // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YzhlMDYwNDM2NjBhMDk2NjQ0MDVmYiIsImlhdCI6MTY5MTc3NjgxNiwiZXhwIjoxNzIzMzEyODE2fQ.b6siMx8hu4GMpwJkQDgllqSjXq6FdMRkTEtda_XN7k4"
  const notification1 = async () => {
    try {
      // const response = await fetch("http://localhost:3000/subscribe");
      // console.log(response);
      await axios
        .get("http://localhost:5000/subscribe")
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }s
  };

  const requestPermission = async () => {
    try {
      const permission = await Notification.requestPermission();

      if (permission === "granted" ) {
        getToken(messaging, {
          vapidKey:
            "BOvkY65xVg_367UU3xbjyqpX9D1NZDgs7j6itPNEaTTQYFKTwHLOSpegRnfNMwXR77e0IzLF-OKKfSwLPk7Kys0",
        })
          .then((res) => {
            // axios.post("http://localhost:3000/subscribe",{web_token:res},
            // {
            //   headers: {
            //     "Content-Type": "application/json",
            //   },
            //   withCredentials: true,
            // }
            // ).then((res)=>{
            //   console.log(res);
            // }
            // ).catch((err)=>{
            //   console.log(err);
            // })
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      } else if (permission === "denied") {
        alert("You will not get like and comment notification");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    requestPermission();
  },[]);

  return (
    <div>
      App
      <button onClick={notification1}>click</button>
    </div>
  );
};

export default App;
