import React, { useState } from "react";
import Autosuggest from "react-autosuggest";

export default function Rsvp() {
  const [name, setName] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isAttending, setIsAttending] = useState(true);
  const [message, setMessage] = useState("");

  const attendees = [
    "Rick & Mimi Goc",
    "Remy Goc",
    "Griff, Caitlyn, Atlas and Beckham Goc",
    "Manette",
    "Michelle",
    "Jack",
    "Andy",
    "Cindy",
    "Ren",
    "Eric",
    "Riki Swindler",
    "Scott Swindler",
    "Tai",
    "Ash",
    "Chih",
    "Matt",
    "Jordan",
    "Elizabeth",
    "Noah",
    "Ben",
    "Calder",
    "Paula & Jerry Sklar",
    "Kelley, Britt, Beckett, Claire Grace, & Charlie Anne Dougherty",
    "Cassidy & Britton Eastburn",
    "Ken Sklar & David",
    "Alan & Robin Windtz",
    "Janelle, Chris and Braden Hussey",
    "Alan & Derek Sklar",
    "John, Laura and Caroline Kelley",
  ];

  const theme = {
    suggestionsList: "",
    suggestion:
      "bg-[var(--black) hover:bg-[var(--accent)] hover:text-white rounded-md mt-2 border-black text-[var(--white)]) cursor-pointer",
    suggestionHighlighted: "",
  };

  function getSuggestions(value) {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength < 3
      ? []
      : attendees.filter((attendee) =>
          attendee.toLowerCase().includes(inputValue)
        );
  }

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const inputProps = {
    placeholder: "Your name",
    value: name,
    onChange: (_, { newValue }) => setName(newValue),
    className: "w-full p-2 border rounded-xl",
  };

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
    <div
      id="rsvp"
      className="p-8 flex flex-col items-center bg-gray-100 dark:bg-gray-900 cactus"
    >
      <h1 className="text-4xl font-bold mb-0 josefin">RSVP</h1>
      <p className="text-center">
        Please select your name, family, or party members who will be
        celebrating with us!
      </p>
      {/* <p className="mb-6 text-2xl text-center">
        The Stakeout In Taos, New Mexico - April 12, 2025
      </p> */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md text-[var(--black)] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 shadow-lg rounded-xl px-8 pt-6 pb-8 mb-4"
      >
        <Autosuggest
          suggestions={suggestions}
          theme={theme}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={(suggestion) => suggestion}
          renderSuggestion={(suggestion) => (
            <div className="py-2 px-3">{suggestion}</div>
          )}
          inputProps={{
            ...inputProps,
            className:
              "shadow appearance-none border rounded text-[var(--black)] bg-[var(--white)] w-full py-2 px-3  focus:outline-none focus:shadow-outline",
          }}
        />{" "}
        <label htmlFor="message"></label>
        <textarea
          id="message"
          value={message}
          placeholder="Message (optional)"
          className="py-2 px-3 w-full p-2 border mt-4 rounded text-[var(--black)] bg-[var(--white)]"
          onChange={(e) => setMessage(e.target.value)}
        />
        <p className="text-center">
          Please let us know if everyone in your party will be attending, only
          some people, and whether there are any dietary restrictions.
        </p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center mr-4">
            <input
              type="radio"
              id="attending"
              name="attendance"
              checked={isAttending}
              onChange={(e) => setIsAttending(e.target.checked)}
              className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label
              htmlFor="attending"
              className="text-gray-700 dark:text-gray-300"
            >
              Attending
            </label>
          </div>
          <div className="flex items-center ">
            <input
              type="radio"
              id="notAttending"
              name="attendance"
              checked={!isAttending}
              onChange={(e) => setIsAttending(!e.target.checked)}
              className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label
              htmlFor="notAttending"
              className="text-gray-700 dark:text-gray-300"
            >
              Not Attending
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 w-full p-2 bg-[var(--accent)]  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
        {message && <p className="mt-4 text-center">{message}</p>}
      </form>
    </div>
  );
}
