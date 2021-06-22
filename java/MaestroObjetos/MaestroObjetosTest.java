package MaestroObjetos;

public class MaestroObjetosTest {

    public static void main(String[] args) {
        Human humano1 = new Human();
        Human humano2 = new Human();

        humano1.attack(humano2);

        System.out.println("Vida del humano1 atacante: " + humano1.getHealth());
        System.out.println("Vida del humano2 atacado: " + humano2.getHealth());

        Wizard mago = new Wizard();

        mago.fireBall(humano1);
        
        System.out.println("Vida del humano1 atacado por el mago: " + humano1.getHealth());

        mago.heal(humano2);

        System.out.println("Vida del humano2 curado por el mago: " + humano2.getHealth());
    }
}
