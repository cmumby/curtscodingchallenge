/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-css-tags */
//import '@/app/ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />

        <title>CurtsCode: The Portfolio for Curtis Mumby</title>
        <meta content="" name="description" />
        <meta content="" name="keywords" />

        <link href="assets/img/favicon-me.png" rel="icon" />
        <link href="assets/img/favicon-me.png" rel="apple-touch-icon" />

        <link
          href="assets/vendor/bootstrap/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="assets/vendor/bootstrap-icons/bootstrap-icons.css"
          rel="stylesheet"
        />
        <link
          href="assets/vendor/glightbox/css/glightbox.min.css"
          rel="stylesheet"
        />
        <link
          href="assets/vendor/swiper/swiper-bundle.min.css"
          rel="stylesheet"
        />

        <link href="assets/css/style.css" rel="stylesheet" />
      </head>

      <body>
        {children}

        <script src="assets/vendor/php-email-form/validate.js"></script>

        <script type="module" src="src/main.tsx"></script>
        <script src="assets/js/portfolio.js"></script>
      </body>
    </html>
  );
}
