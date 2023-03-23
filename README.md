23-React1 김해찬
===========
03.23 4주차 수업내용
------------
### 1. JSX란
```
    * 자바스크립트의 확장 문법
    const element = <h1>Hello, world</h1>;
```
### 2, JSX의 역할
#### 1번 코드
```
    class Hello extends React.Componet{
        render(){
            return <div>Hello {this.props.toWhat}</div>;
        }
    }

    ReactDOM.render(
        <Hello toWhat="World" />,
        document.getElementById('root')
    );
```
#### 2번 코드
```
    class Hello extends React.Component{
        render(){
            return React.createElemnet('div', null, `Hello ${this.props.toWhat}`);
        }
    }

    ReactDOM.render(
        React.createElement(Hello, { toWhat: `World` }, null),
        document.getElementById('root')
    );
```
03.16 3주차 수업내용
------------
### 1. 리액트의 장점
```
    * 빠른 업데이트와 렌더링 속도
    * 컴포넌트 기반 구조
    * 재사용성
    * 모바일 앱 개발 가능
```
### 2. 리액트의 단점
```
    * 방대한 학습량
    * 높은 상태 관리 복잡도
```
### 3. 웹사이트에 React.js 추가하기
```
    <!-- 리액트 가져오기 -->
    <script src="https://unpkg.com/react@18/umd/react.development.js"crossorigin>
    </script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin>
    </script> 
    <!-- 리액트 컴포넌트 가져오기 -->
```
### 4. create-react-app
#### 4-1. 사용법
![react-app](/images/img6.png)
```
    $ npx create-react-app <your-project-name>
```
#### 4-2. npm start
![img7](/images/img7.png)
```
    $ cd my-app
    $ npm start
```
#### 4-3. React App 시작됨
![img8](/images/img8.png)
03.9 2주차 수업내용
------------
### 1. git 사용자 설정
```
    $ git config --global user.name "user.name"
    $ git config --global user.email "email@example.com"
```
### 2. 프로젝트 폴더 Git으로 초기화
```
    * git init 명령으로 초기화
    * 'source control > Initialize Repository'
    * .git 숨김 폴더 생성
```
![레포지트리 초기화](/images/img1.gif)
### 3. 커밋
```
    * 파일이 생성되거나, 내용이 변경되면 Git에서 추적
    * 변환된 파일의 숫자 만큼 source control에 표시
    * source control에서 commit을 원하는 파일을 stage로 이동
```
![커밋](/images/img2.gif)
### 4. 커밋 2
```
    * 원하는 파일을 stage에 올린 뒤 commit 제목과 설명 입력
    * 프로젝트의 히스토리를 저장하여 버전관리에 활용
```
![커밋2](/images/img3.png)
### 5. GitHub로 push하기 1
```
    * 변경된 내용 중 일부 파일만 commit후 push하는 경우
    * 케밥 메뉴 클릭 후 'Push' 선택
    * Add Remote 버튼을 클릭한 후 원하는 repository 선택
```
![Push1](/images/img4.png)
### 6. GitHub로 push하기 2
```
    * 변경된 내용 모두 commit 후 push하는 경우
    * 'Publish Branch' 버튼으로 Push
```
![Push2](/images/img5.png)
### 7. 마크다운 주요 문법
#### 7.1 헤더
* 큰제목: 문서 제목
```
    Headers
    =======
```
Headers
=======
* 작은제목: 문서 부제목
```
    SubTitle
    --------
```
SubTitle
--------
* 글머리: 1~6까지
```
    # This is a H1
    ## This is a H2
    ### This is a H3
    #### This is a H4
    ##### This is a H5
    ###### This is a H6
```
# This is a H1
## This is a H2
### This is a H3
#### This is a H4
##### This is a H5
###### This is a H6

