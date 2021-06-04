package StringManipulator;

public class StringManipulator {
    public String trimAndConcat(String stringA, String stringB) {
        return stringA.trim() + stringB.trim();
    }

    public int getIndexOrNull(String string, char stringChar) {
        return string.indexOf(stringChar);
    }

    public int getIndexOrNull(String string, String subString) {
        return string.indexOf(subString);
    }

    public String concatSubstring(String stringA, int start, int end, String stringB) {
        return stringA.substring(start,end) + stringB;
    }
}
