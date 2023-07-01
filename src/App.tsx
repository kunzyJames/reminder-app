import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ReminderList from "./components/ReminderList";
import Reminder from "./models/reminder";
import reminderservice from "./services/reminder";
import { log } from "console";
import NewReminder from "./components/NewReminder";

// hardcoded reminder
// const[reminders, setReminders] = useState<Reminder[]>([
//      {id:1, title: 'Reminder 1'}
//   ])

function App() {
  //using state hook to to store our reminders in the app component

  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    loadReminders();
  }, []);

  const loadReminders = async () => {
    const reminders = await reminderservice.getReminers();
    setReminders(reminders);
  };

  const removeReminder = (id: number) => {
    setReminders(reminders.filter((reminder) => reminder.id !== id));
  };

  const addReminder = async (title: string) => {
    const newReminder = await reminderservice.addReminder(title);
    //adding new reminders and existing reminders
    setReminders([newReminder, ...reminders]);
  };

  const dates = new Date().toDateString();
  const times = new Date().toLocaleTimeString();

  return (
    <div className="container">
      <div className="card">
        <NewReminder onAddReminder={addReminder} />
        <ReminderList
          completeTask=""
          header="MY TODO APP"
          date={dates}
          items={reminders}
          time={times}
          onRemoveReminder={removeReminder}
        />
      </div>
    </div>
  );
}

export default App;
