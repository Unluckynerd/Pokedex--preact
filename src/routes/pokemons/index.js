import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { Link } from "preact-router";

const Pokemons = () => {
  const [pokeArray, setpokeArray] = useState([]);
  const [search ,setSearch] = useState('');
  const colors = {
    grass: '#69C23D',
    poison: '#923A92',
    fire: '#ED6D12',
    flying: '#8E6FEB',
    water: '#4578ED',
    bug: '#97A51D',
    normal: '#9C9C63',
    electric: '#F6C913',
    ground: '#DBB54D',
    fairy: '#E87890',
    fighting: '#AE2424',
    psychic: '#F73670',
    steel: '#A0A0C0',
    ice: '#7ECECE',
    ghost: '#644E88',
    rock: '#A48F32',
    dark: '#644E40',
  };

  useEffect(() => {
    (async () => {
      const res = [];
      for (let i = 1; i <= 100; i++) {
        res[i] = await (
          await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        ).json();
      }
      setpokeArray(res);
    })();
  }, []);

  const poke_id = (id) => {
    return `/pokemons/${id}`;
  };

  const getColors = (types) => {
    let color1 = types[0].type.name;
    let color2 = types[1]?.type.name;
    if(types.length == 2){
      return `background: linear-gradient(90deg, ${colors[color1]} 50%, ${colors[color2]} 50%)`;
    }
    return `background: ${colors[color1]}`;
  }

  

  return (
    <div className="container index">
      <input
        className="w-100"
        id="search_value"
        type="search"
        placeholder="Search..."
        value={search}
        onInput={(e) => setSearch(e.target.value)}
      />
      <div className="d-flex flex-wrap justify-content-evenly" >
        {pokeArray.filter((pokemon) => {
            const name = pokemon.name.includes(search?.toLowerCase());
            if(search == ""){
                return pokemon;
            }
            else if(name){
                return pokemon;
            }
         }).map((poke) => (

          <Link className="btn" style={getColors(poke.types)} href={poke_id(poke.id)}>
               <img src={poke.sprites.front_default} alt={poke.name} />
               <span class="text-center">{poke.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Pokemons;
