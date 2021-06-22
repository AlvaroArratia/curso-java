package GuardiaZoologico;

public class GorillaTest {

    public static void main(String[] args) {
        System.out.println("Clase Gorilla");

        Gorilla gorilla = new Gorilla();

        //gorilla.setEnergyLevel(100);
        gorilla.displayEnergy();
        gorilla.throwSomething();
        gorilla.throwSomething();
        gorilla.throwSomething();
        gorilla.displayEnergy();
        gorilla.eatBananas();
        gorilla.eatBananas();
        gorilla.displayEnergy();
        gorilla.climb();
        gorilla.displayEnergy();

        System.out.println("");
        System.out.println("Clase Bat");

        Bat bat = new Bat();

        bat.displayEnergy();
        bat.attackTown();
        bat.attackTown();
        bat.attackTown();
        bat.displayEnergy();
        bat.eatHumans();
        bat.eatHumans();
        bat.displayEnergy();
        bat.fly();
        bat.fly();
        bat.displayEnergy();
    }
}
