import { useState } from "react";

type DateSelectorProps = {
  setDate: (newDate: Date) => void;
};

export function DateSelector({ setDate }: DateSelectorProps) {
  const [dateString, setDateString] = useState("");
  const id = "retirement-date-selector";

  return (
    <form
      className="flex flex-col gap-3 mt-8 mx-auto py-4 px-10 dark:bg-slate-900 bg-slate-400 rounded-lg"
      onSubmit={(event) => {
        event.preventDefault();
        setDate(new Date(dateString));
      }}
    >
      <label htmlFor={id}>When do you want to retire?</label>
      <input
        id={id}
        type="date"
        value={dateString}
        className="px-6 py-4"
        onChange={(event) => setDateString(event.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Set
      </button>
    </form>
  );
}
