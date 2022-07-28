import { h } from 'preact';
import { Link } from 'preact-router';

const Home = () => {


	return(
		<div className="mx-auto load">
			<h3 className="text-center "><Link className="link" href="/pokemons">View Pokemon Characters</Link></h3>
			<figure className="w-100 d-flex justify-content-center">
				<img src="/assets/images/pikachu.png" alt="pikachu"/>
			</figure>
		</div>
	)
}

export default Home;
