## useState?
- state : 리액트에서 이벤트에 의해 변경되는 동적인 값
- 어떤 시스템이나 프로그램의 현재 상황이나 정보는 나타내는 것 => 값이 변하면 상태가 변하는 값

- useState : 
1. state를 관리하여 DOM을 업데이트하는 react hook (상태관리 라이브러리)
2. 특정 값을 저장하고 해당 값을 변경하는 함수를 반환해주는 역할
(state 값이 변경되면 리렌더링된다.)

[사용법]
const [기존값, 값변경set함수] = useState<[타입]>([기본설정값]);
[예시]
const [title, setTitle] = useState<string>('');

const [..., set...] = [현재 state, state를 변경하기 위한 함수]
( const [fooBar, setFooBar] = useState() )

fooBar = state 그 자체 / setFooBar = state를 변경할 때 사용하는 함수


## useEffect?
- api 요청과 같은 비동기 관련 작업을 실행하는 역할
- useEffect(fn, [])
- useEffect는 최초 렌더링시에 무조건 실행. 
이후 컴포넌트가 마운트될 때 두번째 인자에 따라 useEffect 실행여부가 달라진다.
- useEffect 내부의 return() : 최초 렌더링시에는 실행되지 않고 무조건 한 번 렌더링이 이루어진 후에 기존 컴포넌트를 언마운트(제거)하고 다시 마운트하면서 return문이 실행된다.