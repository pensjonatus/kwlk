import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
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
      <header className={styles.header}>
        <Link href="/">
          <a>
            <Image
              src="/kwlk.png"
              alt="Link do strony domowej"
              width={32}
              height={32}
            />
          </a>
        </Link>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <Link href="https://github.com/pensjonatus/kwlk">
          <a>Github</a>
        </Link>
        <Link href="https://www.linkedin.com/in/pawel-kowaluk/">
          <a>Autor</a>
        </Link>
      </footer>
    </div>
  );
}
