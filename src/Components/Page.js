import Info from "./Info";
import About from "./about";
import Footer from "./footer";
import "./Page.css";

export default function Page() {
  return (
    <div className="card">
      <Info />
      <About />
      <Footer />
    </div>
  );
}
