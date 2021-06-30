package CuentaBanco;

public class BankAccount {

    private String accountNumber;
    private double cheqAccountBalance = 0;
    private double savingAccountBalance = 0;

    private static int accountsCount = 0;
    private static double accountsBalance = 0;

    public BankAccount() {
        this.accountNumber = generateAccoutnNumber();
        accountsCount++;
    }

    private static String generateAccoutnNumber() {
        String accNumber = "";
        for (int i = 0; i < 10; i++) {
            accNumber += (int) Math.floor(Math.random() * 10);
        }
        return accNumber;
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public double getCheqAccountBalance() {
        return this.cheqAccountBalance;
    }

    public double getSavingAccountBalance() {
        return this.savingAccountBalance;
    }

    public static int getAccountsCount() {
        return accountsCount;
    }

    public static double getAccountsBalance() {
        return accountsBalance;
    }

    public void deposit(String accountType, double amount) {
        if ("corriente".equals(accountType)) {
            this.cheqAccountBalance += amount;
            accountsBalance += amount;
            System.out.println(
                    "Se han depositado $" + amount + " en su cuenta corriente. N° de cuenta: " + accountNumber + ".");
        } else if ("ahorro".equals(accountType)) {
            this.savingAccountBalance += amount;
            accountsBalance += amount;
            System.out.println(
                    "Se han depositado $" + amount + " en su cuenta de ahorros. N° de cuenta: " + accountNumber + ".");
        } else {
            System.out.println("Tipo de cuenta invalido.");
        }
    }

    public void withdraw(String accountType, double amount) {
        if ("corriente".equals(accountType)) {
            if (this.cheqAccountBalance >= amount) {
                this.cheqAccountBalance -= amount;
                accountsBalance -= amount;
                System.out.println(
                        "Se han retirado $" + amount + " de su cuenta corriente. N° de cuenta: " + accountNumber + ".");
            } else {
                System.out.println("Fondos insuficientes.");
            }
        } else if ("ahorro".equals(accountType)) {
            if (this.savingAccountBalance >= amount) {
                this.savingAccountBalance -= amount;
                accountsBalance -= amount;
                System.out.println("Se han retirado $" + amount + " de su cuenta de ahorros. N° de cuenta: "
                        + accountNumber + ".");
            } else {
                System.out.println("Fondos insuficientes.");
            }
        } else {
            System.out.println("Tipo de cuenta invalido.");
        }
    }

    public void seeAccountBalance() {
        System.out.println("Saldo de cuenta corriente: $" + this.cheqAccountBalance);
        System.out.println("Saldo de cuenta de ahorros: $" + this.savingAccountBalance);
    }
}
