import React, { useState } from "react";
import PropTypes from "prop-types";
import PokemonCards from "./PokemonCards";
import Stats from "./Stats";

function Starter({ pokemonStarter }) {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [showPokemonStat, setShowPokemonStat] = useState(false);

  const handlePokemonSelect = (pokemon) => {
    setSelectedPokemon(pokemon);
    setShowPokemonStat(true);
  };

  return (
    <>
      {!showPokemonStat && (
        <div>
          <h1 className="title">
            CHOOSE YOUR <br />
            <span>STARTER</span>
          </h1>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {pokemonStarter.map((pokemon) => (
              <div key={pokemon.name} style={{ margin: "10px" }}>
                <PokemonCards
                  pokemon={pokemon}
                  onClick={() => handlePokemonSelect(pokemon)}
                />
              </div>
            ))}
          </div>
          <button type="button">START</button>
        </div>
      )}
      {showPokemonStat && <Stats pokemon={selectedPokemon} />}
    </>
  );
}

Starter.propTypes = {
  pokemonStarter: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Starter;