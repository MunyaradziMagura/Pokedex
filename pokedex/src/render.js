const URL = 'https://pokeapi.co/api/v2/pokemon/'
// query selectors 
const search = document.querySelector('#search');
const pokemonType = document.querySelector('#pokemonType');
const pokemonWeakness = document.querySelector('#pokemonWeakness');
const pokemonName = document.querySelector('#pokemonName');
const pokemonID = document.querySelector('#pokemonID');
const pokemonImage = document.querySelector('#pokemonImage')

// pokemon colour types
const typeColors = {
    "rock":     [182, 158,  49],
    "ghost":    [112,  85, 155],
    "steel":    [183, 185, 208],
    "water":    [100, 147, 235],
    "grass":    [116, 203,  72],
    "psychic":  [251,  85, 132],
    "ice":      [154, 214, 223],
    "dark":     [117,  87,  76],
    "fairy":    [230, 158, 172],
    "normal":   [170, 166, 127],
    "fighting": [193,  34,  57],
    "flying":   [168, 145, 236],
    "poison":   [164,  62, 158],
    "ground":   [222, 193, 107],
    "bug":      [167, 183,  35],
    "fire":     [245, 125,  49],
    "electric": [249, 207,  48],
    "dragon":   [112,  55, 255]
}

// pokemon attributes
var type = 'Electric'
var number = '45'
// Health
var Health = 35
// Attack
var Attack = 55
// Defence
var Defence = 40
// Sp. Atk
var SpAtk = 50
// Sp. Def
var SpDef = 50
// Speed
var Speed = 90

// fetch pokemon

const fetchApi = async (pokemon) => {
    // request pokemon data
    const response = await fetch(URL + pokemon);
       
    // get the pokemon json
    const pokemonData = await response.json(); 
    console.log(pokemonData)
    return pokemonData;
}

// Search event listner 
search.addEventListener('change', async (event) =>{
    const selectedPokemon = await fetchApi(event.target.value)
    setPokemon(selectedPokemon);
} )

// this function is for setting the pokemon attribues within the card
function setPokemon(pokemon){
    // set pokemon name and id 
    pokemonName.innerHTML = 'Name: ' + pokemon.name
    pokemonID.innerHTML = 'ID: ' + '#' + pokemon.id
    // add image 
    pokemonImage.src = pokemon.sprites.front_default
    
    // set pokemon stats





    // render pokemon stats in plotly 

  var data = [
    {
      x: ['Health', 'Attack', 'Defence', 'Sp. Atk','Sp. Def','Speed'],
      y: [Health, Attack, Defence, SpAtk, SpDef, Speed],
      marker:{
        color: ['rgb(6, 214, 160)','rgb(239, 71, 111)','rgb(17, 138, 178)','rgb(174, 32, 18)','rgb(0, 95, 115)','rgb(255, 190, 11)']
      },
      type: 'bar'    
    }
  ];
  
  var layout = { 
    title: `Identification #${number}`,
    font: {size: 20}
  };
  Plotly.newPlot('pokemonStats', data, layout);
}

