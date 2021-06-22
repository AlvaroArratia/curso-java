package GuardiaZoologico;

public class Gorilla extends Mammal {

    public Gorilla() {
        energyLevel = 100;
    }

    public void throwSomething() {
        System.out.println("¡El gorila ha lanzado algo!");
        setEnergyLevel(energyLevel - 5);
    }

    public void eatBananas() {
        System.out.println("¡Ha aunmentado la satisfaccion del gorila!");
        setEnergyLevel(energyLevel + 10);
    }

    public void climb() {
        System.out.println("¡El gorila ha trepado a la cima de un árbol!");
        setEnergyLevel(energyLevel - 10);
    }
}
