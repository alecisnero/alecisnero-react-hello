import React from "react";
import Card from './Card.jsx'
import Navbar from './Navbar.jsx'
import Jumbotron from "./Jumbotron.jsx";
import Footer from "./Footer.jsx";

/* IMAGENES */
import Paris from '../../img/pexels-paris.jpg'
import Sydney from '../../img/pexels-sydney.jpg'
import Vzla from '../../img/pexels-venezuela.jpg'
import Pavoreal from '../../img/pexels-pavoreal.jpg'

//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div>
			<div /* className='position-fixed' */>
				<Navbar />
			</div>

			<div className='prin container-fluid mt-3'>

				<div className='prin-2'>
					<Jumbotron
						title='A Warm Welcome'
						text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est ex corrupti soluta reprehenderit harum iusto odio beatae hic eaque pariatur dignissimos dolor, ut, impedit aut temporibus sit esse facilis vel.'
						button='Call to Action!'
					/>
				</div>

				<div className='row'>
					<div className='col'>
						<Card
							imgUrl={Paris}
							imagenAlt='Paris'
							title='Paris France Card'
							text='Texto de algo'
							button='Find Out More!'
						/>
					</div>
					<div className='col'>
						<Card
							imgUrl={Sydney}
							imagenAlt='Sydney'
							title='Sydney Australia Card'
							text='Texto de algo'
							button='Find Out More!'
						/>
					</div>
					<div className='col'>
						<Card
							imgUrl={Vzla}
							imagenAlt='Venezuela'
							title='Canaima Venezuela Card'
							text='Texto de algo'
							button='Find Out More!'
						/>
					</div>
					<div className='col'>
						<Card
							imgUrl={Pavoreal}
							imagenAlt='pavoreal'
							title='Pavoreal South Africa Card'
							text='Texto de algo'
							button='Find Out More!'
						/>
					</div>
				</div>
			</div>

			<div className='footer mt-3'>
				<Footer />
			</div>
		</div>
	);
};

export default Home;
