package ListaSimpleEnlazada;

public class ListTester {

    public static void main(String[] args) {
        SinglyLinkedList sll = new SinglyLinkedList();

        sll.add(3);
        sll.add(4);
        sll.add(10);
        sll.add(5);
        sll.add(15);
        sll.add(2);

        sll.printValues();

        sll.remove();
        sll.remove();

        sll.printValues();

        Node findedNode = sll.find(5);
        if (findedNode != null) {
            System.out.println("Valor del nodo encontrado: " + findedNode.value);
        } else {
            System.out.println("No se encontro ningun nodo con ese valor");
        }

        sll.removeAt(0);

        sll.printValues();
    }
}