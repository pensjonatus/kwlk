import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "your retirement" },
    {
      name: "description",
      content: "Let kwlk show you a countdown until you can retire",
    },
  ];
};

export default function Retire() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16">
        <header className="flex flex-col items-center gap-9">
          <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
            How long until you can retire?
          </h1>
        </header>        
      </div>
    </div>
  );
}
