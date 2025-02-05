import { ChangeEvent } from "react";

type DateSelectorProps = {
  id: string;
  date: string;
  setDate: (newDate: string) => void;
  label: string;
};

export function DateSelector({ id, date, setDate, label }: DateSelectorProps) {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setDate(event.target.value);
  }

  return (
    <form className="flex flex-col gap-3 mt-8 mx-auto py-4 px-10 dark:bg-slate-900 bg-slate-400 rounded-lg">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type="date"
        className="px-6 py-4"
        onChange={handleChange}
        value={date}
      />
    </form>
  );
}
