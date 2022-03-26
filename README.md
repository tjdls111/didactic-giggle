# didactic-giggle

## 실행 방법

### 백엔드

- 백엔드 폴더로 이동: cd back

- 가상 환경 생성 : python -m venv venv

- 가상 환경 활성화(윈도우 기준) : source venv/Scripts/activate

- 필요한 라이브러리 설치 : pip install -r requirements.txt

- DB에 설계도(migrations) 적용 : python manage.py migrate

- 서버 실행 : python manage.py runserver

### 프론트엔드

- 필요한 라이브러리 설치: npm i

- 서버 실행 npm run dev
