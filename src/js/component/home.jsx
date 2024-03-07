import React from "react";
import Card from './Card.jsx'
import Navbar from './Navbar.jsx'
import Jumbotron from "./Jumbotron.jsx";
import Footer from "./Footer.jsx";

//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<div className='container'>
				
				<Jumbotron />

				<Card 
					title='Card Title'
					text='Texto de algo'
					button='Find Out More!' 
				/>

				<Footer />
			</div>
		</div>
	);
};

export default Home;
