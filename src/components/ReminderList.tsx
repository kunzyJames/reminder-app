import React from "react";
import Reminder from "../models/reminder";

//declaring reminder list props and setting the initial items to empty array
interface ReminderListProps {
  items: Reminder[];
  header: string;
  date: any;
  completeTask: string;
  time: any;
  onRemoveReminder: (id: number) => void;
}

//declaring a function that accepts reminder items list props
function ReminderList({
  items,
  onRemoveReminder,
  date,
  time,
}: ReminderListProps) {
  return (
    <>
      <div className="top-part mx-3">
        <h5 className="setdate mx-3">{date}</h5>
        <h6 className="settime">{time}</h6>

        <div className="tasks">
          {/* <h6>Incomplete Tasks</h6> <h6>{completeTask}</h6>{" "} */}
        </div>
      </div>

      <ul className="added_tasks">
        {items.map((item) => (
          <li className="list-group-item" key={item.id}>
            {item.title}
            <button
              onClick={() => onRemoveReminder(item.id)}
              className="btn  mx-2 rounded-pill"
            >
              <span>
                <i className="fa fa-trash"></i>
              </span>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ReminderList;
