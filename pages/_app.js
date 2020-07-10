import Navbar from "../components/Navbar";
import "../styles/tailwind.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}
