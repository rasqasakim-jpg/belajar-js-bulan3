import React, { createContext, useState } from "react";

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState(3); // default 3 notif

  const addNotification = () => setNotifications((prev) => prev + 1);
  const clearNotification = () => setNotifications(0);

  return (
    <NotificationContext.Provider
      value={{ notifications, addNotification, clearNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
