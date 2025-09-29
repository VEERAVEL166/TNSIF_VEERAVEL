package Tnsif_javabasic;
import java.util.*;
public class Addition_scanner {

	public static void main(String[] args) {
		Scanner s=new Scanner(System.in);
		System.out.println("Enter the Numbers:");
		int a=s.nextInt();
		int b=s.nextInt();
		
		int c=a+b;
		
		System.out.println("Addition of a=" +a+ " and b=" +b+ " is " +c);

	}

}
