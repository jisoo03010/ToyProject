from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import requests
# from tqdm import tqdm # 얼마나 걸리는지 알려주는 툴
import time
import openpyxl
driver = webdriver.Chrome('C:/chromedriver.exe')

def main():

    idx = 1
    wb = openpyxl.Workbook()
    ws = wb.active  # 현재 활성화된 셀을 보는것
    ws.append(['대분류', '중분류', '소분류'])
    driver.get("https://www.ewangmart.com/goods/category.do?cate=14")

    ctg_list = driver.find_element(By.CLASS_NAME, "ctg_list").find_elements(By.TAG_NAME, "li")

    for i in range(len(ctg_list)):
        time.sleep(1)
        type = driver.find_elements(By.XPATH, '//*[@id="contents"]/div[1]/ul/li')
        # if type[i] == type[4]:
        #     continue
        # else:
        typeValue = type[i].text
        type[i].find_element(By.TAG_NAME, "a").send_keys(Keys.ENTER) # 순서대로 카테고리에 들어감
        page_type = driver.find_elements(By.XPATH, '//*[@id="contents"]/ul/li')  # PAGE에 순서대로 들어가려는
        time.sleep(2)
        content_page_list = driver.find_element(By.CLASS_NAME, "content_page_list").find_elements(By.TAG_NAME, "li")
        # print(len(content_page_list))
        for j in range(len(content_page_list)): #page_type의 길이 만큼 반복
            page_type = driver.find_elements(By.XPATH, '//*[@id="contents"]/ul/li')  # PAGE에 순서대로 들어가려는

            time.sleep(1)
            page_type[j].find_element(By.TAG_NAME, "a").click()
            time.sleep(2)

            itemList = driver.find_element(By.CLASS_NAME, "content_goods_list2").find_elements(By.TAG_NAME, "li")
            for item in itemList:
                title = item.find_element(By.CLASS_NAME, "content_goods_item").find_element(By.CLASS_NAME,"content_goods_txt").find_element(By.CLASS_NAME, "content_goods_name").find_element(By.TAG_NAME, "a").find_element(By.TAG_NAME, "span").text
                print(title)
                result = []
                result.append(typeValue)
                result.append(title)
                ws.append(result)
                idx += 1
        wb.save("생수 음료.xlsx")




if __name__ == '__main__':
    main()