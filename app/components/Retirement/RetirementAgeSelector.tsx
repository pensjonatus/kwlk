type RetirementAgeSelectorProps = {
  setAge: (age: number) => void;
  label: string;
};

export function RetirementAgeSelector({
  setAge,
  label,
}: RetirementAgeSelectorProps) {
  return (
    <form className="flex flex-col gap-3 mt-8 mx-auto py-4 px-10 dark:bg-slate-900 bg-slate-400 rounded-lg">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type="date"
        className="px-6 py-4"
        onChange={(event) => setDate(new Date(event.target.value))}
      />
    </form>
  );
}
