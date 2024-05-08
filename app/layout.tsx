import "tailwindcss/tailwind.css";
import "./globals.css";

function Layout({ children }: any) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{`quochuydev's portfolio`}</title>
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}

export default Layout;
