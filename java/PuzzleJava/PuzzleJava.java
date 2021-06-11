package PuzzleJava;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Random;

public class PuzzleJava {

    public static void main(String[] args) {
        System.out.println("1.");
        int[] numbers = { 3, 5, 1, 2, 7, 9, 8, 13, 25, 32 };
        System.out.println(printSum(numbers).toString());

        System.out.println("\n2.");
        String[] names = { "Nancy", "Jinichi", "Fujibayashi", "Momochi", "Ishikawa" };
        System.out.println(printNames(names).toString());

        System.out.println("\n3.");
        char[] letters = { 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
                's', 't', 'u', 'v', 'w', 'x', 'y' };
        shuffleArray(letters);

        System.out.println("\n4.");
        System.out.println(randomArray());

        System.out.println("\n5.");
        System.out.println(randomArray());

        System.out.println("\n6.");
        System.out.println("Cadena aleatoria: " + randomString());

        System.out.println("\n7.");
        System.out.println("Array de cadenas: " + stringArray());
    }

    public static String[] stringArray() {
        String[] strArray = new String[10];
        for (int i = 0; i < 10; i++) {
            strArray[i] = randomString();
        }
        return strArray;
    }

    public static String randomString() {
        Random rd = new Random();
        char[] letters = { 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
                's', 't', 'u', 'v', 'w', 'x', 'y' };
        String rdString = "";
        for (int i = 0; i < 5; i++) {
            rdString += letters[rd.nextInt(26)];
        }
        return rdString;
    }

    public static void sortArray(int[] array) {
        ArrayList<Integer> sortedArray = new ArrayList<Integer>();
        for (int i = 0; i < array.length; i++) {
            sortedArray.add(array[i]);
        }
        Collections.sort(sortedArray);
        System.out.println("Array ordenado: " + sortedArray.toString());
        max(array);
        min(array);
    }

    public static void max(int[] array) {
        int max = array[0];
        for (int i = 0; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i];
            }
        }
        System.out.println("Valor máximo: " + max);
    }

    public static void min(int[] array) {
        int min = array[0];
        for (int i = 0; i < array.length; i++) {
            if (array[i] < min) {
                min = array[i];
            }
        }
        System.out.println("Valor mínimo: " + min);
    }

    public static int[] randomArray() {
        Random rd = new Random();
        int[] rdArray = new int[10];
        for (int i = 0; i < rdArray.length; i++) {
            rdArray[i] = rd.nextInt(100 - 55) + 55;
        }
        return rdArray;
    }

    public static ArrayList<Character> shuffleArray(char[] array) {
        ArrayList<Character> letters = new ArrayList<Character>();
        for (int i = 0; i < array.length; i++) {
            letters.add(array[i]);
        }
        Collections.shuffle(letters);
        if ('a' == letters.get(0) || 'e' == letters.get(0) || 'i' == letters.get(0) || 'o' == letters.get(0)
                || 'u' == letters.get(0)) {
            System.out.println("La primera letra es una vocal");
        }
        System.out.println("Primera letra: " + letters.get(0));
        System.out.println("Ultima letra: " + letters.get(letters.size() - 1));
        return letters;
    }

    public static ArrayList<String> printNames(String[] array) {
        System.out.println("Nombres:");
        ArrayList<String> graterThanFive = new ArrayList<String>();
        for (int i = 0; i < array.length; i++) {
            System.out.println(array[i]);
            if (array[i].length() > 5) {
                graterThanFive.add(array[i]);
            }
        }
        return graterThanFive;
    }

    public static ArrayList<Integer> printSum(int[] array) {
        int sum = 0;
        ArrayList<Integer> graterThanTen = new ArrayList<Integer>();
        for (int i = 0; i < array.length; i++) {
            sum += array[i];
            if (array[i] > 10) {
                graterThanTen.add(array[i]);
            }
        }
        System.out.println("Suma del arreglo: " + sum);
        return graterThanTen;
    }

}
