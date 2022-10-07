package student_information;

import java.util.ArrayList;
import java.util.Scanner;

public class St_update {
	//     선택사항 
	// 1. 학생 정보 추가
	// 2. 학생 정보 수정
	// 3. 학생 정보 삭제
	// 4. 학생 정보 조회
	
	static ArrayList<String> st = new ArrayList<>();
	
	public static void initialize() {
		st.add("박종하");
		st.add("김지수");
	}
	
	//수정
	public static void update() {
		
	}
	//조회
	public static void select() {
		for(int i = 0; i < st.size(); i++) {
			System.out.println((i+1) + "번 "+ st.get(i));
		}
	}
//	삭제
	public static void delete() {
		Scanner sc = new Scanner(System.in);

		System.out.print("삭제할 이름을 입력해주세요\n");
		String rm_choice = sc.next();  
		st.remove(rm_choice);
		System.out.println("성공적으로 삭제되었습니다!");
	}
	//추가
	public static void create() {
		Scanner sc = new Scanner(System.in);
		
		System.out.println("이름을 입력해주세요\n");
		String name = sc.next();  
		st.add(name);

		System.out.println(name+" 학생이 입력 완료되었습니다.");
	}
	
	public static void main(String[] args) {
		initialize();
		
		while(true) {
		System.out.println("==========  선택  ==========");
		System.out.println("      1. 학생 정보 추가\r\n" + 
				"      2. 학생 정보 수정\r\n" + 
				"      3. 학생 정보 삭제\r\n" + 
				"      4. 학생 정보 조회\r\n");

		System.out.print("선택 : ");
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
