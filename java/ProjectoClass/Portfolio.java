package ProjectoClass;

import java.util.ArrayList;

public class Portfolio {

    private ArrayList<Project> projects;

    public Portfolio() {
        this.projects = new ArrayList<Project>();
    }

    public Portfolio(ArrayList<Project> projects) {
        this.projects = projects;
    }

    public int getPortfolioCost() {
        int total = 0;
        for (Project project : projects) {
            total += project.getInitialCost();
        }
        return total;
    }

    public void showPortfolio() {
        System.out.println("Portafolio:");
        for (Project project : projects) {
            System.out.println(project.elevatorPitch());
        }
    }

    public void setProjects(ArrayList<Project> projects) {
        this.projects = projects;
    }

    public ArrayList<Project> getProjects() {
        return projects;
    }
}
