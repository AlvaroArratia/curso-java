package CuentaBanco;

public class BankAccountTest {

    public static void main(String[] args) {
        BankAccount cuentaBancaria1 = new BankAccount();

        System.out.println("Numero de cuenta 1: " + cuentaBancaria1.getAccountNumber());

        cuentaBancaria1.seeAccountBalance();

        cuentaBancaria1.deposit("corriente", 70000);
        cuentaBancaria1.deposit("ahorro", 40000);

        cuentaBancaria1.seeAccountBalance();

        cuentaBancaria1.withdraw("corriente", 2000);
        cuentaBancaria1.withdraw("ahorro", 3000);

        cuentaBancaria1.seeAccountBalance();

        System.out.println("//////////////////////////////////////////");

        BankAccount cuentaBancaria2 = new BankAccount();

        System.out.println("Numero de cuenta 2: " + cuentaBancaria2.getAccountNumber());

        cuentaBancaria2.seeAccountBalance();

        cuentaBancaria2.deposit("corriente", 7000);
        cuentaBancaria2.deposit("ahorro", 4000);

        cuentaBancaria2.seeAccountBalance();

        System.out.println("//////////////////////////////////////////");

        System.out.println("Cuentas creadas: " + BankAccount.getAccountsCount());
        System.out.println("Monto total de todas las cuentas: $" + BankAccount.getAccountsBalance());
    }
}
