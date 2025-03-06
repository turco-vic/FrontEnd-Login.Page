import "../styles/globals.css";

export const metadata = {
  title: "Login Page",
};
export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}