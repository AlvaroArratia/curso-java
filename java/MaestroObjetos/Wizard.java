package MaestroObjetos;

public class Wizard extends Human {

    public Wizard() {
        this.health = 50;
        this.intelligence = 8;
    }

    public void heal(Human healedHuman) {
        healedHuman.setHealth(healedHuman.getHealth() + this.intelligence);
    }

    public void fireBall(Human attackedHuman) {
        attackedHuman.setHealth(attackedHuman.getHealth() - (this.intelligence * 3));
    }
}
