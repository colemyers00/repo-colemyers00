import java.util.LinkedList;
import java.util.List;
import java.util.ArrayList;
import java.util.NoSuchElementException;

// Find last element of a list

public class P01 {

    public static <T> T last(List<T> els) {
        int numOfEls = els.size();
        return els.get(numOfEls - 1);
    }

    public static <T> T last(LinkedList<T> els) {
        return els.getLast();
    }

    public static <T> T lastRecurse(List<T> els) {
        if (els == null || els.isEmpty()) {
            throw new NoSuchElementException();
        } if (els.size() == 1) {
            return els.get(0);
        }
        return lastRecurse(els.subList(1, els.size()));
    }

    public static void main (String[] args) {

        List<Integer> numList = new ArrayList<Integer>();
        numList.add(1);
        numList.add(2);
        numList.add(4);

        LinkedList<Integer> numLList = new LinkedList<Integer>();
        numLList.add(1);
        numLList.add(2);
        numLList.add(5);

        System.out.println(last(numList));
        System.out.println(last(numLList));



    }
}