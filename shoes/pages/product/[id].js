import Product from "../../components/productPage";
import Header from "../../components/nav";
import Sidebar from "../../components/sidebar";
import Footer from "../../components/footer";

export default function Home() {
	return (
		<div className="wrapper">
			<Header />
			<Product />
			<Sidebar />
			<Footer />
		</div>
	);
}
