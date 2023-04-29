import "../styles/globals.css";
import Navbar from "./shared/navbar";

export const metadata = {
  title: "Next JS - El futuro es hoy",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Layout({ children }) {
  return (
    <html>
      <body className="wrapper">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
