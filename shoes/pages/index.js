import Head from 'next/head';
import Header from '../components/nav';
import Sidebar from '../components/sidebar';

export default function Home() {
	return (
		<div className='wrapper'>
			<Header />
			<Sidebar />
		</div>
	)
}
