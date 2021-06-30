package Calculadora1;

public class Calculator {

    private double operandOne;
    private double operandTwo;
    private String operation;
    private double result;

    public Calculator() {

    }

    public double getResult() {
        performOperation();
        System.out.println(operandOne + " " + operation + " " + operandTwo);
        return result;
    }

    private void performOperation() {
        if ("+".equals(this.operation)) {
            this.result = operandOne + operandTwo;
        } else if ("-".equals(this.operation)) {
            this.result = operandOne - operandTwo;
        }
    }

    public void setOperandOne(double operandOne) {
        this.operandOne = operandOne;
    }

    public double getOperandOne() {
        return operandOne;
    }

    public void setOperandTwo(double operandTwo) {
        this.operandTwo = operandTwo;
    }

    public double getOperandTwo() {
        return operandTwo;
    }

    public void setOperation(String operation) {
        this.operation = operation;
    }

    public String getOperation() {
        return operation;
    }
}
