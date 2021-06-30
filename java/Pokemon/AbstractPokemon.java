package Pokemon;

public abstract class AbstractPokemon implements PokemonInterface {

    @Override
    public Pokemon createPokemon(String name, int health, String type) {
        Pokemon newPokemon = new Pokemon(name, health, type);
        return newPokemon;
    }

    @Override
    public String pokemonInfo(Pokemon pokemon) {
        return "Nombre: " + pokemon.getName() + "\nVida: " + pokemon.getHealth() + "\nTipo: " + pokemon.getType();
    }
}
