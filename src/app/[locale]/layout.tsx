import { useLocale } from 'next-intl';

export default function LocaleLayout({ children }: { children: React.ReactNode }) {
  const locale = useLocale();
  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
