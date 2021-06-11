package Hashmatique;

import java.util.HashMap;
import java.util.Set;

public class Hashmatique {

    public static void main(String[] args) {
        HashMap<String, String> trackList = new HashMap<String, String>();

        trackList.put("El noa noa", "Vamos al noa noa");
        trackList.put("No se tu", "No se tu, pero yo");
        trackList.put("Atado a tu amor", "Mira lo que has hecho que he caido preso");
        trackList.put("Pavo real", "Numerao, numerao, viva la numeracion");

        System.out.println("");
        System.out.println("Pavo real: " + trackList.get("Pavo real"));
        System.out.println("");

        Set<String> songs = trackList.keySet();
        for (String songName : songs) {
            System.out.println(songName + ": " + trackList.get(songName));
        }
    }
}
