package Pokemon;

public class PokemonTest {

    public static void main(String[] args) {
        Pokedex pokedex = new Pokedex();

        Pokemon squirtle = pokedex.createPokemon("Squirtle", 100, "Agua");
        Pokemon charmander = pokedex.createPokemon("Charmander", 100, "Fuego");

        squirtle.attackPokemon(charmander);

        pokedex.addPokemon(squirtle);
        pokedex.addPokemon(charmander);

        pokedex.listPokemon();

        System.out.println("Pokemones creados: " + Pokemon.count);
    }
}
