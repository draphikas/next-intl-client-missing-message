import 'antd/dist/reset.css';
import '../styles/scss/globals.scss';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={undefined}>
      <body>{children}</body>
    </html>
  );
}
