import Navbar from "../components/Navbar";
import "../styles/tailwind.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gray-100 h-full">
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}
