import React, { useState } from "react";

export default function Rsvp() {
  const [name, setName] = useState("");
  const [isAttending, setIsAttending] = useState(false);
  const [isNotAttending, setIsNotAttending] = useState(false);
  const [message, setMessage] = useState("");

  const attendees = ["John Doe", "Jane Smith"]; // Replace with your actual data

  console.log(isNotAttending);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (attendees.includes(name)) {
      setMessage(
        isAttending ? `${name} is attending` : `${name} is not attending`
      );
    } else {
      setMessage("Name not found in the attendee list");
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="p-6 max-w-xl">
        <h1 className="text-4xl font-bold mb-4">RSVP</h1>
        <p className="mb-6">
          The Stakeout In Taos, New Mexico - April 12, 2025
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 ">
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border bg-transparent rounded"
          />
          <div className="justify-between flex flex-row font-bold">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={isAttending}
                onChange={(e) => setIsAttending(e.target.checked)}
                className="mr-2"
              />
              <span>Attending</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={isNotAttending}
                onChange={(e) => setIsNotAttending(e.target.checked)}
                className="mr-2"
              />
              <span>Not Attending</span>
            </label>
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded"
          >
            Submit
          </button>
        </form>
        {message && <p className="mt-4">{message}</p>}
      </div>
    </div>
  );
}
