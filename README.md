23-React1 김해찬
===========
04.06 6주차 수업내용
------------
### 1. 컴포넌트의 종류
* 함수 컴포넌트
* 클래스 컴포넌트
### 2. 함수 컴포넌트
```js
    function Welcome(props){
        return <h1>안녕, {props.name}</h1>;
    }
```
* props객채를 받아 엘리먼트를 리턴하기 때문에 함수 컴포넌트라고 할 수 있음.
### 3. 클래스 컴포넌트
```js
    class Welcome extends React.Component{
        render(){
            return <h1>안녕, {this.props.name}</h1>;
        }
    }
```
* 모든 클래스 컴포넌트는 React.Component를 상속 받음.
### 4. 컴포넌트 이름 짓기
* 컴포넌트의 이름은 항상 대문자로 시작해야 한다.
```js
    // HTML div 태그로 인식
    const element = <div />;

    // Welcome이라는 리액트 컴포넌트로 인식
    const element = <Welcome name="인제" />;
```
### 5. 컴포넌트 랜더링
```js
    function Welcome(props){
        return <h1>안녕, {props.name}</h1>;
    }

    const element = <Welcome name="인제" />;
    ReactDOM.render(
        element,
        document.getElementById('root');
    );
```
* Welcome이라는 함수 컴포넌트를 선언
* <Welcome name="인제" /> 라는 값을 가진 엘리먼트를 생성
* 생성된 엘리먼트를 파라미터로 ReactDOM.reander()를 호출
* Welcome 컴포넌트에 {name: "인제" }라는 props를 넣어 호출
* React DOM 을 통해 브러우저로 출력
### 5. 컴포넌트 합성
* 여러 개의 컴포넌트를 합쳐서 하나의 컴포넌트를 만드는 것.
```js
    function Welcome(props){
        return <h1>Hello, {props.name}</h1>;
    }

    function App(props){
        return(
            <div>
                <Welcome name="Mike"/>
                <Welcome name="Steve" />
                <Welcome name="Jane" />
            </div>
        )
    }

    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
```
* Welcome 이라는 컴포넌트 세개를 합쳐 App이라는 새로운 컴포넌트를 생성
* 이러한 구조는 React가 컴포넌트 기반 이라는 특성을 잘 보여줌.
### 6. 컴포넌트 추출
* 큰 컴포넌트에서 일부를 추출해서 새로운 컴포넌트를 만듬
```js
    function Comment(props){
        return(
            <div className="comment">
                <div className="user-info">
                    <img className="avatar"
                        src={props.author.avatarUrl}
                        alt={props.author.name}
                    />
                    <div className="user-info-name">
                        {props.author.name}
                    </div>
                </div>

                <div className="comment-text">
                    {props.text}
                </div>

                <div className="comment-date">
                    {formatDate(props.date)}
                </div>
            </div>
        );
    }
```
* Avatar 컴포넌트 추출
```js
    function Avatar(props){
        return (
            <img className="avatar"
                src={props.user.avatarUrl}
                alt={props.user.name}
            />
        )
    }
```
* 추출된 Avatar 컴포넌트를 Comment 컴포넌트에 적용
```js
    function Comment(props){
        return(
            <div className="comment">
                <div className="user-info">
                    <Avatar user={props.author} />
                    <div className="user-info-name">
                        {props.author.name}
                    </div>
                </div>

                <div className="comment-text">
                    {props.text}
                </div>

                <div className="comment-date">
                    {formatDate(props.date)}
                </div>
            </div>
        );
    }
```
* UserInfo 컴포넌트도 추출
```js
    function UserInfo(props){
        return(
            <div className="user-info">
                <Avatar user={props.user} />
                <div className="user-info-name">
                    {props.user.name}
                </div>
            </div>
        );
    }
```
* 추출된 UserInfo 컴포넌트를 Comment 컴포넌트에 반영
```js
    function Comment(props){
        return(
            <div className="comment">
                <UserInfo user={props.author} />
                <div className="comment-text">
                    {props.text}
                </div>
                <div className="comment-date">
                    {formatDate(props.date)}
                </div>
            </div>
        );
    }
```
### 7. 댓글 컴포넌트 만들기(실습)
```js
// Comment.jsx
import React from "react";

function Comment(props){
    return(
        <div style={styles.wrapper}>
        <div style={styles.imageContainer}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                style={styles.image}
            />
        </div>

        <div style={styles.contentContainer}>
            <span style={styles.nameText}>{props.name}</span>
            <span style={styles.commentText}>{props.comment}</span>
        </div>
    </div>
    );
}

export default Comment;
```
```js
//CommentList.jsx
import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "이인재",
        comment: "안녕하세요, 소플입니다.",
    },
    {
        name: "유재석",
        comment: "리액트 재미있어요~!",
    },
    {
        name: "강민경",
        comment: "저도 리액트 배워보고 싶어요!!",
    },
]

function CommentList(props){
    return(
        <div>
            {comments.map((comment) => {
                return(
                    <Comment name={comment.name} comment={comment.comment} />
                )
            })}
        </div>
    )
}

export default CommentList;
```
* 결과
![comment](./images/image10.png)
03.30 5주차 수업내용
------------
### 1. 엘리먼트의 정의
* 엘리먼트는 리액트 앱의 가장 작은 빌딩 블록들
* 화면에 나타나는 내용을 기술한 자바스크립트 객체
* 리액트 엘리먼트는 DOM 엘리먼트의 가상 표현
![element](./images/image9.png)
### 2. 앨리먼트의 생김새
* 리액트 엘리먼트는 자바스크립트 객체 형태로 존재
```python
{
    type: 'button',
    props: {
        className: 'bg-green',
        children:{
            type: 'b',
            props:{
                children: 'Hello, element!'
            }
        }
    }
}
```
### 3. 앨리먼트의 특징
* 불변성(변하지 않는 성질)
* 엘리먼트 생성 후에는 children이나 attributes를 바꿀 수 없다.
* 이 때문에 기존 엘리먼트를 변경하려면 새로운 엘리먼트를 만들어 기존의 것과 바꿔야함.

### 4. 엘리먼트 렌더링
```html
    <div id="root"></div>
```
```js
    const element = <h1>안녕, 리액트!</h1>;
    ReactDOM.render(element, document.getElementById('root'));
```

### 5. 렌더링된 엘리먼트 업데이트하기
```h
    function tick(){
        const element = (
            <div>
                <h1>안녕, 리액트!</h1>
                <h2>현재 시간: {new Date().toLocaleTimeString()}<h2>
            </div>
        );

        ReactDOM.render(element, document.getElementById('root'));
    }

    setInterval(tick, 1000);
```
### 6. 시계 만들기(react-app)
```js
//Clock.jsx
import React from "react";

function Clock(props){
    return(
        <div>
            <h1>안녕, 리액트!<h1>
            <h2>현재 시간: {new Date().toLocaleTimeString()}<h2>
        </div>
    );
}

export default Clock;
```
```js
//index.js
import Clock from './chapter_04/Clock';

setInterval(() => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <Clock />
    </React.StrictMode>,
  );
}, 1000);
```
### 7. 리액트 컴포넌트란
* 입력값을 props로, 출력값을 컴포넌트로 반환해주는 함수같은 역할
* 컴포넌트에 전달할 다양한 정보를 담고 있는 자바스크립트 객체
```python
    Props
    image: "서울.jpg"
    color:"#de3151"
    title:"서울"
    distance:2
```
### 8. Props의 특징
* 읽기 전용(Reand-only)
* 입력값을 변경하지 않으며, 같은 입력값에 대해서는 항상 같은 출력값을 낸다
* 모든 리액트 컴포넌트는 그들의 props에 관해서는 Pure 함수 같은 역할을 해야 한다.
* 모든 리액트 컴포넌트는 props를 직접 바꿀 수 없고, 같은 props에 대해서는 항상 같은 결과를 보여줄 것.

### 9. Props 사용법
```js
    function App(props){
        return(
            <Profile
                name="소플"
                introducation="안녕하세요, 소플입니다."
                viewCount={1500}
            />
        );
    }
```
03.23 4주차 수업내용
------------
### 1. JSX란
```js
    * 자바스크립트의 확장 문법
    const element = <h1>Hello, world</h1>;
```
### 2. JSX의 역할 1
* 1번코드와 2번코드의 차이점에서 확인 할 수 있음.
* Hello 컴포넌트 내부에서 JSX를 사용했던 부분이 React.createElement() 함수로 대채됨.
* JSX 문법을 사용하면 리액트 내부적으로 모두 createElement라는 함수를 사용하도록 변경.
* JSX를 사용하지 않고 순수한 자바스크립트 코드만을 사용하여 완전히 동일한 역할 수행.
#### 1번 코드
```js
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
```js
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
```js
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
```js
    const element = {
        type: 'h1',
        props: {
            className: 'greeting',
            children: 'Hello, world!'
        }
    }
```
```js
    React.createElement(
        type,
        [props],
        [...children]
    )
```

* 첫 번째 파라미터는 엘리먼트의 유형(type)을 나타냄.
* 두 번째 파라미터는 props가 들어가게됨.
* 세 번째 파라미터는 children이 들어가게 됨. 현재 엘리먼트가 포함하고 있는 자식 엘리먼트.
### 4. JSX의 장점
#### 4-1. 코드가 간결해짐
```js
    <!--JSX 사용함-->
    <div>Hello, {name}</div>

    <!--JSX 사용 안 함>
    React.createElement('div', null, `Hello, ${name}`);
```
#### 4-2. 가독성이 향상됨
* 코드를 작성할 때뿐만 아니라 유지보스 관점에서도 중요함.
* 가독성이 높을수록 코드상에 존재하는 버그 또한 쉽게 발견되기 때문.
#### 4-3. 보안성이 올라감(Injection Attack을 방어)
```js
    const title = response.potentiallyMaliciousInput;
    //이 코드는 안전합니다.
    const element = <h1>{title}</h1>;
```
* 위 코드에는 title 변수에 잠재적으로 보안 위험의 가능성이 있는 코드가 삽입
* ReactDOM은 렌더링하기 전에 임베딩된 값을 모두 문자열로 변환.
* 결과적으로 XSS라 불리는 cross-site-scripting attaks을 방어
### 5. JSX 사용법
* 기본적으로 JSX는 자바스크립트 문법을 확장시킨 것이기 때문에, 모든 자바스크립트 문법을 지원.
```js
    const name = '소플'
    const element = <h1>안녕, {name}</h1>;

    ReactDOM.render(
        element,
        document.getElementById('root')
    );
```
* HTML 코드 사이에 괄호를 사용해 변수가 아닌 formatUser()라는 자바 스크립트 함수를 호출
```js
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

* 빠른 업데이트와 렌더링 속도
* 컴포넌트 기반 구조
* 재사용성
* 모바일 앱 개발 가능

### 2. 리액트의 단점

* 방대한 학습량
* 높은 상태 관리 복잡도

### 3. 웹사이트에 React.js 추가하기
```js
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
```bash
    $ npx create-react-app <your-project-name>
```
#### 4-2. npm start
![img7](/images/img7.png)
```bash
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

* git init 명령으로 초기화
* 'source control > Initialize Repository'
* .git 숨김 폴더 생성

![레포지트리 초기화](/images/img1.gif)
### 3. 커밋

* 파일이 생성되거나, 내용이 변경되면 Git에서 추적
* 변환된 파일의 숫자 만큼 source control에 표시
* source control에서 commit을 원하는 파일을 stage로 이동

![커밋](/images/img2.gif)
### 4. 커밋 2

* 원하는 파일을 stage에 올린 뒤 commit 제목과 설명 입력
* 프로젝트의 히스토리를 저장하여 버전관리에 활용

![커밋2](/images/img3.png)
### 5. GitHub로 push하기 1

* 변경된 내용 중 일부 파일만 commit후 push하는 경우
* 케밥 메뉴 클릭 후 'Push' 선택
* Add Remote 버튼을 클릭한 후 원하는 repository 선택

![Push1](/images/img4.png)
### 6. GitHub로 push하기 2

* 변경된 내용 모두 commit 후 push하는 경우
* 'Publish Branch' 버튼으로 Push

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

