package EjerciciosBasicos;

import java.util.ArrayList;

public class EjerciciosBasicos {

    public static void main(String[] args) {
        System.out.println("Imprimir 1 - 255: ");
        printFrom1To255();
        System.out.println("\nNúmeros impares entre 1 - 255: ");
        printOdds();
        System.out.println("\nImprimir la Suma: ");
        printSum();
        System.out.print("\nRecorrer un Arreglo: ");
        printArray(new int[] { 1, 3, 5, 7, 9, 13 });
        System.out.println("\n\nNum max del arreglo: " + findMax(new int[] { -3, -5, -7 }));
        System.out.println("\nPromedio del arreglo: " + arrayAvg(new int[] { 2, 10, 3 }));
        System.out.println("\nArreglo de números impares: " + oddArray().toString());
        System.out.print("\nMayor que Y: ");
        greaterThanY(new int[] { 1, 3, 5, 7 }, 3);
        System.out.print("\nValores al Cuadrado: ");
        printArray(squareValues(new int[] { 1, 5, 10, -2 }));
        System.out.print("\n\nEliminar Números Negativos: ");
        printArray(deleteNegative(new int[] { 1, 5, 10, -2 }));
        System.out.print("\n\nMínimo, Máximo y Promedio: ");
        printArray(minMaxAvg(new int[] { 1, 5, 10, -2 }));
        System.out.print("\n\nCambiando los Valores del Arreglo: ");
        printArray(changeValues(new int[] { 1, 5, 10, 7, -2 }));
    }

    public static void printFrom1To255() {
        for (int i = 1; i <= 255; i++) {
            System.out.println(i);
        }
    }

    public static void printOdds() {
        for (int i = 1; i <= 255; i++) {
            if (i % 2 != 0) {
                System.out.println(i);
            }
        }
    }

    public static void printSum() {
        int sum = 0;
        for (int i = 0; i <= 255; i++) {
            sum += i;
            System.out.println("Nuevo numero: " + i + " Suma: " + sum);
        }
    }

    public static void printArray(int[] array) {
        System.out.print("[");
        for (int i = 0; i < array.length; i++) {
            System.out.print(" " + array[i] + " ");
        }
        System.out.print("]");
    }

    public static int findMax(int[] array) {
        int max = array[0];
        for (int i = 0; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i];
            }
        }
        return max;
    }

    public static int arrayAvg(int[] array) {
        int sum = 0, avg = 0;
        for (int i = 0; i < array.length; i++) {
            sum += array[i];
        }
        avg = sum / array.length;
        return avg;
    }

    public static ArrayList<Integer> oddArray() {
        ArrayList<Integer> newArray = new ArrayList<Integer>();
        for (int i = 1; i <= 255; i++) {
            if (i % 2 != 0) {
                newArray.add(i);
            }
        }
        return newArray;
    }

    public static void greaterThanY(int[] array, int y) {
        int count = 0;
        for (int i = 0; i < array.length; i++) {
            if (array[i] > y) {
                count++;
            }
        }
        System.out.println(count);
    }

    public static int[] squareValues(int[] array) {
        for (int i = 0; i < array.length; i++) {
            array[i] = (int) Math.pow(array[i], 2);
        }
        return array;
    }

    public static int[] deleteNegative(int[] array) {
        for (int i = 0; i < array.length; i++) {
            if (array[i] < 0) {
                array[i] = 0;
            }
        }
        return array;
    }

    public static int[] minMaxAvg(int[] array) {
        int max = findMax(array);
        int avg = arrayAvg(array);
        int min = array[0];
        for (int i = 0; i < array.length; i++) {
            if (array[i] < min) {
                min = array[i];
            }
        }
        int[] minMaxAvg = { max, min, avg };
        return minMaxAvg;
    }

    public static int[] changeValues(int[] array) {
        for (int i = 0; i < array.length; i++) {
            if (i == array.length - 1) {
                array[i] = 0;
            } else {
                array[i] = array[i + 1];
            }
        }
        return array;
    }
}
