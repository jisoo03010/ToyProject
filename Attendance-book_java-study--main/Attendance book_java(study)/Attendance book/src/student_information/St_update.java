package student_information;

import java.util.ArrayList;
import java.util.Scanner;

public class St_update {
	//     ���û��� 
	// 1. �л� ���� �߰�
	// 2. �л� ���� ����
	// 3. �л� ���� ����
	// 4. �л� ���� ��ȸ
	
	static ArrayList<String> st = new ArrayList<>();
	
	public static void initialize() {
		st.add("������");
		st.add("������");
	}
	
	//����
	public static void update() {
		
	}
	//��ȸ
	public static void select() {
		for(int i = 0; i < st.size(); i++) {
			System.out.println((i+1) + "�� "+ st.get(i));
		}
	}
//	����
	public static void delete() {
		Scanner sc = new Scanner(System.in);

		System.out.print("������ �̸��� �Է����ּ���\n");
		String rm_choice = sc.next();  
		st.remove(rm_choice);
		System.out.println("���������� �����Ǿ����ϴ�!");
	}
	//�߰�
	public static void create() {
		Scanner sc = new Scanner(System.in);
		
		System.out.println("�̸��� �Է����ּ���\n");
		String name = sc.next();  
		st.add(name);

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
				update();
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
