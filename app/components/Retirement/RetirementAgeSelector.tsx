type RetirementAgeSelectorProps = {
  age: number;
  setAge: (age: number) => void;
  label: string;
};

export function RetirementAgeSelector({
  age,
  setAge,
  label,
}: RetirementAgeSelectorProps) {
  const id = "age-selector";

  return (
    <form className="flex flex-col gap-3 mt-8 mx-auto py-4 px-10 dark:bg-slate-900 bg-slate-400 rounded-lg">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type="number"
        className="px-6 py-4"
        onChange={(event) => setAge(parseInt(event.target.value))}
        value={age}
      />
    </form>
  );
}
