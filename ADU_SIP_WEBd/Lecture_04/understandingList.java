import java.util.*;
public class understandingList {
    public static void main(String[] args) {
        // List<Integer>list = new ArrayList<>();

        // list.add(10);
        // list.add(50);
        // list.add(30);

        // System.out.println(list);

        //  //Access Elements
        //  System.out.println(list.get(0));  //10

        //  //update element 
        //  list.set(2,5);
        //  System.out.println(list);

        //  Collections.sort(list);  //sort my list
        //  System.out.println(list);

        //  Collections.reverse(list);
        //  System.out.println(list);  //reverse the list

        List<List<Integer>> matrix = new ArrayList<>();

        List<Integer>row1 = new ArrayList<>();
        row1.add(1);
        row1.add(2);
        row1.add(3);  //[1,2,3]

         List<Integer>row2 = new ArrayList<>();
        row2.add(5);
        row2.add(5);
        row2.add(8);  //[5,5,8]

        matrix.add(row1);
        matrix.add(row2);

        System.out.println(matrix);



    }

   
}
