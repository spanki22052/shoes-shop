import Header from "../components/nav";
import Sidebar from "../components/sidebar";
import Catalog from "../components/catalog";

export default function Home() {
  return (
    <div className="wrapper">
      <Header />
      <Catalog />
      <Sidebar />
    </div>
  );
}
