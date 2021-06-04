package Pitagoras;

public class Pitagoras {

    public double calcularHipotenusa(int catetoA, int catetoB) {
        double suma = Math.pow(catetoA, 2) + Math.pow(catetoB, 2);
        double hipotenusa = Math.sqrt(suma);
        return hipotenusa;
    }
}