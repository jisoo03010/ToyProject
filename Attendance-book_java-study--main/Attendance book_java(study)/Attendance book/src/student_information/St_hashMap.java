package student_information;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map.Entry;
import java.util.Scanner;
import java.util.Set;

public class St_hashMap {
	//     선택사항 
	// 1. 학생 정보 추가
	// 2. 학생 정보 수정
	// 3. 학생 정보 삭제
	// 4. 학생 정보 조회
	
	static HashMap<String,String> map  = new HashMap<String,String>();
	
	public static void initialize() {
			map.put("name1 : ","박종하");
			map.put("name2 : ","김지수");
			map.put("name3 : ","박종하");
	}
	
	//조회
	public static void select() {
		Collection<String> values = map.values();
		System.out.println(values);
	}
//	삭제
	public static void delete() {
		Scanner sc = new Scanner(System.in);

		System.out.print("삭제할 이름을 입력해주세요\n");
		int rm_choice = sc.nextInt();  
		map.remove(rm_choice);
		System.out.println("성공적으로 삭제되었습니다!");
	}
	//추가
	public static void create() {
		Scanner sc = new Scanner(System.in);
		
		System.out.println("이름을 입력해주세요\n");
		String name = sc.next();  
		map.put("name : ", name);

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
