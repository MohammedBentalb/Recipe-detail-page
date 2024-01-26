import type { Metadata } from 'next';
import { Outfit, Young_Serif } from 'next/font/google';
import './globals.css';

/* const outfit = Outfit({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
});
const youngSerif = Young_Serif({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
  title: 'Recipe Page',
  description: 'Recipe detail page',
}; */

export const metadata: Metadata = {
  title: 'Frontend Mentor | MohammedBentalb',
  description: 'Recipe page detail preview',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, minimum-scale=1.0"
      />
      <link rel="icon" type="image/svg+xml" href="/images/favicon-32x32.png" />
      <body className={``}>{children}</body>
    </html>
  );
}
