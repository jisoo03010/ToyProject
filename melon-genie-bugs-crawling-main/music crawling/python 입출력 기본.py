#!/usr/bin/env python
# coding: utf-8

# In[1]:


# 파이썬 코드 입력 및 실행

print("안녕하세요")

print('안녕', '하세요', '김지수', '입니다.', sep='!')

# 문자열 포매팅
month = '2월'
day = '26일'
print("{} {}은 토요일입니다.".format(month, day))

print("%s 안녕" % '지수야')

t1 = "  hp010-0000-0000"
print(t1)
t2 = t1.strip()
print(t2)
t3 = t2.replace('hp', '')
print(t3)
t4 = t3.split('-')
print(t4)