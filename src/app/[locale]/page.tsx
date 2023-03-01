import { Link, NextIntlClientProvider, useLocale, useTranslations } from "next-intl"
import { getTranslations } from "next-intl/server"
import styles from "../../styles/scss/page.module.scss"
import Header from "../../components/Header"

export function LocaleSwitcherServer() {
  const t = useTranslations("LocaleSwitcher")

  const locale = useLocale()
  const otherLocale = locale === "fr" ? "en" : "fr"

  return (
    <Link href="/" locale={otherLocale}>
      Change to {t("switchLocale", { locale: otherLocale })}
    </Link>
  )
}

export default async function Home() {
  /* Fetch function will be here */
  const locale = useLocale()
  const t = await getTranslations()
  return (
    <NextIntlClientProvider locale={locale}>
      <Header />
      <LocaleSwitcherServer />
      <main className={styles.center}>
        <article className={styles.Lechildren}>
          <h1>{t("title")}</h1>
        </article>
      </main>
    </NextIntlClientProvider>
  )
}
