package Pokemon;

import java.util.ArrayList;

public class Pokedex extends AbstractPokemon {

    private ArrayList<Pokemon> myPokemons = new ArrayList<Pokemon>();

    @Override
    public void listPokemon() {
        System.out.println("");
        System.out.println("Lista de la pokedex:");
        for (Pokemon pokemon : myPokemons) {
            System.out.println(pokemonInfo(pokemon));
            System.out.println("");
        }
    }

    public void addPokemon(Pokemon pokemon) {
        myPokemons.add(pokemon);
    }
}
