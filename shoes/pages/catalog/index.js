import Header from "../../components/nav";
import Sidebar from "../../components/sidebar";
import Catalog from "../../components/catalog";
import Footer from "../../components/footer";

export default function Home() {
  return (
    <div className="wrapper">
      <Header />
      <Catalog />
      <Sidebar />
      <Footer />
    </div>
  );
}
