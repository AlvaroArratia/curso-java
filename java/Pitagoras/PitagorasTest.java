package Pitagoras;

public class PitagorasTest {

    public static void main(String[] args) {
        Pitagoras pitagoras = new Pitagoras();
        double hipotenusa = pitagoras.calcularHipotenusa(1, 1);
        System.out.println("El valor de la hipotenusa es: " + hipotenusa);
    }
}
