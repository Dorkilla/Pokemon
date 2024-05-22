import Pokemon from "./Pokemon.js"

const pokemon2 = new Pokemon("Lucario","https://pokeapi.co/api/v2/ability/154.png", $(".pokemonok"))
const pokemon = new Pokemon("Ditto","https://pokeapi.co/api/v2/pokemon-species/132.png", $(".pokemonok"))

pokemon.beszel()

console.log(pokemon.nev)
console.log(pokemon.mondat)
pokemon.harciero=2
delete pokemon.nev
console.log(pokemon)

//privat adattagok elérése getterrel
//ehhez csak getter van, nem tudom átírni
//pokemon.nev="Dorka"
pokemon.mondat="Szép napunk van!"
pokemon.beszel()