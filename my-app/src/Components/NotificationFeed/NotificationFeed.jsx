import React, { useEffect, useState } from "react";
import { getNotifications } from "../../Api/Notifications";
import NotificationCard from "../NotificationCard/NotificationCard";

function NotificationFeed() {
  const [loading, setLoading] = useState(true);
  const [notificationData, setNotificationData] = useState();

  useEffect(() => {
    getNotifications(
      setLoading,
      setNotificationData,
      `?user_id=${localStorage.getItem("user_id")}`
    );
  }, []);

  if (!loading) {
    console.log(notificationData);
  }

  return (
    <div>
      <NotificationCard
        name="mark"
        tweet_text="this is a testweet"
        img="https://media.elcinema.com/uploads/_315x420_2268328b39ea214e6ed4d52eb7e1ef3a4d600c27dc40aecc08d937effc307389.jpg"
        user_id="1"
        action="reply"
      />
    </div>
  );
}

export default NotificationFeed;
