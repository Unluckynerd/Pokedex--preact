import { useEffect, useState } from "preact/hooks";
import { Link } from "preact-router";
import Stats from "./stats";
import Profile from "./profile";
import Moves from "./moves";

const Pokemon = ({ id }) => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await (
        await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      ).json();
      setLists(res);
    })();
  }, []);

  

  return (
    <>
    <Link href="/pokemons"><button className="button" type="button"><img src="https://www.seekpng.com/png/detail/155-1554127_arrow-back-android-back-button-png.png" /></button></Link>

      <div className="d-flex">
        <div className="mx-auto con text-capitalize overflow-auto">
          <h3 className="text-center bg-info p-3">{lists.name}</h3>

          <div className="d-flex">
            <img src={lists.sprites?.front_default} alt={lists.name} />

            <Stats lists={lists} />

          </div>

          <Profile lists={lists} />
          
          <Moves lists={lists}/>

        </div>
      </div>
      
    </>
  );
};

export default Pokemon;
