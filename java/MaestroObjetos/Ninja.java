package MaestroObjetos;

public class Ninja extends Human {

    public Ninja() {
        this.stealth = 10;
    }

    public void steal(Human stealedHuman) {
        stealedHuman.setHealth(stealedHuman.getHealth() - this.stealth);
        this.health = this.health + this.stealth;
    }

    public void runAway() {
        this.health = this.health - 10;
    }
}
