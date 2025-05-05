import './globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Rottomold',
  description: 'Proyecto multilenguaje',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
