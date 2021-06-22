package GuardiaZoologico;

public class Bat extends Mammal {

    public Bat() {
        energyLevel = 300;
    }

    public void fly() {
        System.out.println("Murcielago volando");
        setEnergyLevel(energyLevel - 50);
    }

    public void eatHumans() {
        System.out.println("Bueno, no importa");
        setEnergyLevel(energyLevel + 25);
    }

    public void attackTown() {
        System.out.println("¡Ciudad en llamas!");
        setEnergyLevel(energyLevel - 100);
    }

}