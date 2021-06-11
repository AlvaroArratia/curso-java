package ListaSimpleEnlazada;

public class SinglyLinkedList {

    public Node head;

    public SinglyLinkedList() {
        this.head = null;
    }

    public void add(int value) {
        Node newNode = new Node(value);
        if (head == null) {
            head = newNode;
        } else {
            Node runner = head;
            while (runner.next != null) {
                runner = runner.next;
            }
            runner.next = newNode;
        }
    }

    public void remove() {
        if (head != null) {
            Node currentNode = head, previousNode = head;
            while (true) {
                if (currentNode.next == null) {
                    previousNode.next = null;
                    break;
                } else {
                    previousNode = currentNode;
                    currentNode = currentNode.next;
                }
            }
        } else {
            System.out.println("No hay nodos en la lista");
        }
    }

    public void removeAt(int index) {
        if (head != null && index == 0) {
            head = head.next;
        } else if (head != null && index >= 0) {
            Node currentNode = head, previousNode = head;
            int count = 0;
            while (true) {
                if (count == index) {
                    previousNode.next = currentNode.next;
                    break;
                } else if (currentNode.next != null) {
                    previousNode = currentNode;
                    currentNode = currentNode.next;
                } else {
                    System.out.println("No se encontro el nodo a eliminar");
                    break;
                }
                count++;
            }
        } else {
            System.out.println("No hay nodos en la lista");
        }
    }

    public Node find(int value) {
        if (head != null) {
            Node currentNode = head;
            while (true) {
                if (currentNode.value == value) {
                    break;
                } else if (currentNode.next != null) {
                    currentNode = currentNode.next;
                } else {
                    currentNode = null;
                    break;
                }
            }
            return currentNode;
        } else {
            return null;
        }
    }

    public void printValues() {
        if (head != null) {
            Node runner = head;
            System.out.print("Lista: " + runner.value + " --> ");
            while (runner.next != null) {
                runner = runner.next;
                System.out.print(runner.value + " --> ");
            }
            System.out.println("");
        } else {
            System.out.println("No hay nodos en la lista");
        }
    }
}
