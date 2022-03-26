# didactic-giggle

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


http://localhost:3000/ 에서 결과물을 확인하실 수 있습니다.
![image](https://user-images.githubusercontent.com/68271159/160223904-17b5f822-13fd-40c7-ba82-55d13da778ee.png)
