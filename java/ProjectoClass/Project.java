package ProjectoClass;

public class Project {

    private String name;
    private String description;
    private int initialCost;

    public Project() {
        this.name = "";
        this.description = "";
        this.initialCost = 0;
    }

    public Project(String name) {
        this.name = name;
        this.description = "";
        this.initialCost = 0;
    }

    public Project(String name, String description) {
        this.name = name;
        this.description = description;
        this.initialCost = 0;
    }

    public Project(String name, String description, int initialCost) {
        this.name = name;
        this.description = description;
        this.initialCost = initialCost;
    }

    public String elevatorPitch() {
        return getName() + " (" + getInitialCost() + "): " + getDescription();
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDescription() {
        return description;
    }

    public void setInitialCost(int initialCost) {
        this.initialCost = initialCost;
    }

    public int getInitialCost() {
        return initialCost;
    }
}
