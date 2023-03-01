'use client'

import { Link, useLocale, useTranslations } from "next-intl"

export default function LocaleSwitcherClient() {
  const t = useTranslations("LocaleSwitcher")

  const locale = useLocale()
  const otherLocale = locale === "fr" ? "en" : "fr"

  return (
    <Link href="/" locale={otherLocale}>
      Change to {t("switchLocale", { locale: otherLocale })}
    </Link>
  )
}
