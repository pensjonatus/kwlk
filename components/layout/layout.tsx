import Head from "next/head";
import { ReactNode } from "react";
import styles from "./layout.module.css";

type LayoutProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export default function Layout({ title, description, children }: LayoutProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{`${title} | kwlk`}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
