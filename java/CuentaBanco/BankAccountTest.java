package CuentaBanco;

public class BankAccountTest {

    public static void main(String[] args) {
        BankAccount cuentaBancaria1 = new BankAccount();

        System.out.println("Numero de cuenta: " + cuentaBancaria1.getAccountNumber());

        cuentaBancaria1.seeAccountBalance();

        cuentaBancaria1.deposit("corriente", 70000);
        cuentaBancaria1.deposit("ahorro", 40000);

        cuentaBancaria1.seeAccountBalance();

        cuentaBancaria1.withdraw("corriente", 2000);
        cuentaBancaria1.withdraw("ahorro", 3000);

        cuentaBancaria1.seeAccountBalance();

        BankAccount cuentaBancaria2 = new BankAccount();

        System.out.println("Cuentas creadas: " + BankAccount.getAccountsCount());
        System.out.println("Monto total de todas las cuentas: $" + BankAccount.getAccountsBalance());
    }
}
