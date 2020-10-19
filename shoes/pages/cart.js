import React from 'react';
import Header from '../components/nav';
import Sidebar from '../components/sidebar';
import Footer from '../components/footer';
import CartPage from '../components/cart';

const Cart = () => {
	return (
		<div className='wrapper'>
			<Header />
			<Sidebar />
			<CartPage />
			<Footer />
		</div>
	)
}

export default Cart