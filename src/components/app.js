import { h } from 'preact';
import { Link, Router } from 'preact-router';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Pokemons from '../routes/pokemons';
import Pokemon  from '../routes/pokemon/index';

const App = () => (
	<div id="app">
		<h1 className="text-center"><Link className="link" href="/">Pokemons</Link></h1>
		<Router>
			<Home path="/" />
			<Pokemons path="/pokemons" />
			<Pokemon path="/pokemons/:id" />
		</Router>
	</div>
)

export default App;
