import "../styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>My Medusa Store</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-white text-black text-opacity-100">
        <header className="bg-white p-4 border-b">
          <h1 className="text-2xl font-bold text-black">My Medusa Store</h1>
        </header>
        <main className="p-6">{children}</main>
        <footer className="bg-white p-4 text-center border-t">
          <p className="text-black">© 2025 My Medusa Store</p>
        </footer>
      </body>
    </html>
  );
}