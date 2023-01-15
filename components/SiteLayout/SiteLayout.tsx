import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import styles from "./SiteLayout.module.css";

type LayoutProps = {
  title: string;
  description: string;
  children: ReactNode;
  hideHeader?: boolean;
  hideFooter?: boolean;
};

export default function Layout({
  title,
  description,
  children,
  hideHeader,
  hideFooter,
}: LayoutProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{`${title} | kwlk`}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!hideHeader && (
        <header className={styles.header}>
          <Link href="/">
            <Image
              src="/kwlk.png"
              alt="Link do strony domowej"
              width={32}
              height={32}
            />
          </Link>
        </header>
      )}

      <main className={styles.main}>{children}</main>

      {!hideFooter && (
        <footer className={styles.footer}>
          <Link href="https://github.com/pensjonatus/kwlk">Github</Link>
          <Link href="https://www.linkedin.com/in/pawel-kowaluk/">Autor</Link>
        </footer>
      )}
    </div>
  );
}
