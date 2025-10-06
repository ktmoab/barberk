import "./globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "The Barber Kalmar",
  description: "Din barberare i Kalmar. Boka din tid enkelt online.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Open+Sans:wght@400;700&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        
        {children}
      </body>
    </html>
  );
}