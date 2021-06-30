package Calculadora1;

public class CalculatorTest {

    public static void main(String[] args) {
        Calculator calculadora = new Calculator();

        calculadora.setOperandOne(10.5);
        calculadora.setOperation("+");
        calculadora.setOperandTwo(5.2);
        System.out.println("Resultado = " + calculadora.getResult());
    }
}
