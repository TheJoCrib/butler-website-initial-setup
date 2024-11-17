import type { Metadata } from 'next';
import './globals.css';
import { Maven_Pro } from 'next/font/google';
// import Main from './Main';
import Navbar from '@/components/Navbar';

const mavenPro = Maven_Pro({
  style: 'normal',
  subsets: ['latin']
});
export const metadata: Metadata = {
  title: 'Butler',
  description: 'Butler app'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={mavenPro.className}>
        <div className="flex flex-col relative h-full">
          <header className="fixed w-full h-16 bg-gray-800 z-10">
            <Navbar />
          </header>
          <main className="mt-[65px] w-full" style={{ height: 'calc(100% - 64px)' }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
