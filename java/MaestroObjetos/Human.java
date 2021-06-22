package MaestroObjetos;

public class Human {

    protected int strength;
    protected int stealth;
    protected int intelligence;
    protected int health;

    public Human() {
        this.strength = 3;
        this.stealth = 3;
        this.intelligence = 3;
        this.health = 100;
    }

    public void attack(Human attackedHuman) {
        attackedHuman.setHealth(attackedHuman.getHealth() - this.strength);
    }

    public void setHealth(int health) {
        this.health = health;
    }

    public void setIntelligence(int intelligence) {
        this.intelligence = intelligence;
    }

    public void setStealth(int stealth) {
        this.stealth = stealth;
    }

    public void setStrength(int strength) {
        this.strength = strength;
    }

    public int getHealth() {
        return health;
    }

    public int getIntelligence() {
        return intelligence;
    }

    public int getStealth() {
        return stealth;
    }

    public int getStrength() {
        return strength;
    }
}
