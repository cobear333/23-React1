23-React1 김해찬
===========
03.23 4주차 수업내용
------------
### 1. JSX란
```
    * 자바스크립트의 확장 문법
    const element = <h1>Hello, world</h1>;
```
### 2. JSX의 역할 1
    * 1번코드와 2번코드의 차이점에서 확인 할 수 있음.
    * Hello 컴포넌트 내부에서 JSX를 사용했던 부분이 React.createElement() 함수로 대채됨.
    * JSX 문법을 사용하면 리액트 내부적으로 모두 createElement라는 함수를 사용하도록 변경.
    * JSX를 사용하지 않고 순수한 자바스크립트 코드만을 사용하여 완전히 동일한 역할 수행.
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
### 2. JSX의 역할 2
    * 아래 코드를 통해 JSX를 사용한 코드와 사용하지 않은 코드 모두 동일한 역할을 수행함.
    * JSX를 사용한 코드도 내부적으로는 createElement() 함수를 사용하도록 변환되기 때문.
    * createElement() 함수의 호출 결과로 자바스크립트 객체 생성
    * React에서는 이 객체를 엘리먼트라고 부름
```
    const element = (
        <h1 className="greeting">
        Hello, world!
        </h1>
    )

    const element = React.createElement(
        'h1',
        { className: 'greeting'},
        'Hello, world!'
    )
```
### 3. createElement() 함수의 파라미터
```
    const element = {
        type: 'h1',
        props: {
            className: 'greeting',
            children: 'Hello, world!'
        }
    }
```
```
    React.createElement(
        type,
        [props],
        [...children]
    )
```

    * 첫 번째 파라미터는 엘리먼트의 유형(type)을 나타냄.
    * 두 번째 파라미터는 props가 들어가게됨.
    * 세 번째 파라미터는 children이 들어가게 됨. 현재 엘리먼트가 포함하고 있는 자식 엘리먼트
### 4. JSX의 장점
#### 4-1. 코드가 간결해짐
```
    <!--JSX 사용함-->
    <div>Hello, {name}</div>

    <!--JSX 사용 안 함>
    React.createElement('div', null, `Hello, ${name}`);
```
#### 4-2. 가독성이 향상됨
    * 코드를 작성할 때뿐만 아니라 유지보스 관점에서도 중요함.
    * 가독성이 높을수록 코드상에 존재하는 버그 또한 쉽게 발견되기 때문.
#### 4-3. 보안성이 올라감(Injection Attack을 방어)
```
    const title = response.potentiallyMaliciousInput;
    //이 코드는 안전합니다.
    const element = <h1>{title}</h1>;
```
    * 위 코드에는 title 변수에 잠재적으로 보안 위험의 가능성이 있는 코드가 삽입
    * ReactDOM은 렌더링하기 전에 임베딩된 값을 모두 문자열로 변환.
    * 결과적으로 XSS라 불리는 cross-site-scripting attaks을 방어
### 5. JSX 사용법
    * 기본적으로 JSX는 자바스크립트 문법을 확장시킨 것이기 때문에, 모든 자바스크립트 문법을 지원.
```
    const name = '소플'
    const element = <h1>안녕, {name}</h1>;

    ReactDOM.render(
        element,
        document.getElementById('root')
    );
```
    * HTML 코드 사이에 괄호를 사용해 변수가 아닌 formatUser()라는 자바 스크립트 함수를 호출
```
    function formatName(user){
        return user.firstName + ' ' + user.lastName;
    }

    const user = {
        firstName: 'Inje',
        lastName: 'Lee'
    };

    const element = (
        <h1>
            Hello, {formatUser(user)}
        </h1>
    );

    ReactDOM.render(
        element,
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

