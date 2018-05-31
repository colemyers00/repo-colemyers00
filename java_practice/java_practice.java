import java.util.LinkedList;
import java.util.List;
import java.util.NoSuchElementException;

// Find last element of a list

public class PO1 {

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

        List<Integer> numList = {1,2,3,4,2,5};

    }
}