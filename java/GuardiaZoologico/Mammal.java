package GuardiaZoologico;

public class Mammal {

    protected int energyLevel;

    public int displayEnergy() {
        System.out.println("El nivel de energia es: " + this.energyLevel);
        return this.energyLevel;
    }

    public void setEnergyLevel(int energyLevel) {
        this.energyLevel = energyLevel;
    }

    public int getEnergyLevel() {
        return this.energyLevel;
    }
}