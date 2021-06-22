package MaestroObjetos;

public class Samurai extends Human {

    public Samurai() {
        this.health = 200;
    }

    public void deathBlow(Human attackedHuman) {
        attackedHuman.setHealth(0);
        this.health = this.health - (this.health / 2);
    }

    public void meditate() {
        this.health = this.health + (this.health / 2);
    }

    public String howMany() {
        return "Número actual del samurai (?)";
    }
}
