import { ReactNode } from "react";

type PageLayoutProps = {
  title: string;
  children: ReactNode;
};

export function PageLayout({ title, children }: PageLayoutProps) {
  return (
    <div className="h-screen p-2">
      <header className="flex flex-col items-center gap-9">
        <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
          {title}
        </h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
