package ProjectoClass;

import java.util.ArrayList;

public class ProjectTest {

    public static void main(String[] args) {
        Project project1 = new Project();
        project1.setName("Projecto 1");
        project1.setDescription("Este es el projecto 1");
        project1.setInitialCost(2000);

        Project project2 = new Project("Projecto 2", "Este es el projecto 2", 3000);

        System.out.println(project1.elevatorPitch());
        System.out.println(project2.elevatorPitch()+"\n");

        ArrayList<Project> projects = new ArrayList<Project>();

        Portfolio myPortfolio = new Portfolio();

        projects.add(project1);
        projects.add(project2);

        myPortfolio.setProjects(projects);

        myPortfolio.showPortfolio();

        System.out.println("Costo total portafolio: " + myPortfolio.getPortfolioCost());
    }
}
