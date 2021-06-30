package Pokemon;

public class Pokemon {

    private String name;
    private int health;
    private String type;

    public static int count = 0;

    public Pokemon(String name, int health, String type) {
        this.name = name;
        this.health = health;
        this.type = type;
        count++;
    }

    public void attackPokemon(Pokemon pokemon) {
        pokemon.setHealth(pokemon.getHealth() - 10);
        System.out.println(this.name + " ha atacado a " + pokemon.getName());
        System.out.println("Vida de " + pokemon.getName() + ": " + pokemon.getHealth());
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setHealth(int health) {
        this.health = health;
    }

    public int getHealth() {
        return health;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getType() {
        return type;
    }
}
