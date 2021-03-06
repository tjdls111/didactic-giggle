# 과제형 코딩 테스트

사이트 메인 페이지의 UI를 구현하는 테스트였음.


## 실행 방법

![image](https://user-images.githubusercontent.com/68271159/160223776-e848afa7-6a19-47de-8d1d-1347890c66dd.png)
- 위와 같이 터미널을 분할

### 백엔드

- 백엔드 폴더로 이동: cd back

- 가상 환경 생성 : python -m venv venv

- 가상 환경 활성화(윈도우 기준) : source venv/Scripts/activate

- 필요한 라이브러리 설치 : pip install -r requirements.txt

- DB에 설계도(migrations) 적용 : python manage.py migrate

- 서버 실행 : python manage.py runserver

### 프론트엔드
- 프론트엔드 폴더로 이동: cd front/with-typescript-app/

- 필요한 라이브러리 설치: npm i

- 서버 실행 npm run dev


위 작업을 완료한 이후, http://localhost:3000/ 에서 결과물을 확인하실 수 있습니다.

![image](https://user-images.githubusercontent.com/68271159/160223904-17b5f822-13fd-40c7-ba82-55d13da778ee.png)
----
## 사용한 프레임워크 및 라이브러리

### 프론트엔드: React, TypeScript, Emotion, Next.js, Axios
### 백엔드: Django, django-cors-headers
(따로 크롤링하거나 DB를 사용하지는 않고, 하드코딩한 데이터를 API로 제공하는 용도로만 사용)
