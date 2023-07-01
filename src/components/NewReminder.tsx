import React, { useState } from "react";

interface NewReminderProps {
  onAddReminder: (title: string) => void;
}

//adding jsx.element the compiler ensures we return a jsx element
function NewReminder({ onAddReminder }: NewReminderProps): JSX.Element {
  const [title, setTitle] = useState("");

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return alert("enter task");
    onAddReminder(title);
    setTitle("");
  };

  return (
    <form onSubmit={submitForm}>
      <div className="addtask mx-3">
        <textarea
          id="title"
          placeholder="Enter a task..."
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></textarea>
        <button type="submit">Add task</button>
      </div>
    </form>
  );
}

export default NewReminder;
