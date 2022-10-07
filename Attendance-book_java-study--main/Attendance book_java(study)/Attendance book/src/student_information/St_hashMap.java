package student_information;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map.Entry;
import java.util.Scanner;
import java.util.Set;

public class St_hashMap {
	//     ���û��� 
	// 1. �л� ���� �߰�
	// 2. �л� ���� ����
	// 3. �л� ���� ����
	// 4. �л� ���� ��ȸ
	
	static HashMap<String,String> map  = new HashMap<String,String>();
	
	public static void initialize() {
			map.put("name1 : ","������");
			map.put("name2 : ","������");
			map.put("name3 : ","������");
	}
	
	//��ȸ
	public static void select() {
		Collection<String> values = map.values();
		System.out.println(values);
	}
//	����
	public static void delete() {
		Scanner sc = new Scanner(System.in);

		System.out.print("������ �̸��� �Է����ּ���\n");
		int rm_choice = sc.nextInt();  
		map.remove(rm_choice);
		System.out.println("���������� �����Ǿ����ϴ�!");
	}
	//�߰�
	public static void create() {
		Scanner sc = new Scanner(System.in);
		
		System.out.println("�̸��� �Է����ּ���\n");
		String name = sc.next();  
		map.put("name : ", name);

		System.out.println(name+" �л��� �Է� �Ϸ�Ǿ����ϴ�.");
	}
	
	public static void main(String[] args) {
		initialize();
		
		while(true) {
		System.out.println("==========  ����  ==========");
		System.out.println("      1. �л� ���� �߰�\r\n" + 
				"      2. �л� ���� ����\r\n" + 
				"      3. �л� ���� ����\r\n" + 
				"      4. �л� ���� ��ȸ\r\n");

		System.out.print("���� : ");
		Scanner sc = new Scanner(System.in);
		int Choice = sc.nextInt();  
		
		switch(Choice) {
			case 1:
				create();
				continue;
			case 2:
				continue;
			case 3:
				delete();
				continue;
			case 4:
				select();
				continue;
		
		}
		
		}
	}
}
