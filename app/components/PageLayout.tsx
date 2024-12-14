import { ReactNode } from "react";

type PageLayoutProps = {
  title: string;
  children: ReactNode;
};

export function PageLayout({ title, children }: PageLayoutProps) {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16">
        <header className="flex flex-col items-center gap-9">
          <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
            {title}
          </h1>
        </header>
        <main className="flex flex-col items-center gap-2">{children}</main>
      </div>
    </div>
  );
}
