import { Route, Routes } from 'react-router-dom';
import ShowSlider from './components/showSlider'
import List from './components/List'

function App() {
    return (
        <Routes>
            <Route path="/" element={<ShowSlider />} />
            <Route path="/list" element={<List />} />
        </Routes>

        // <Routes> 안에 <Route>를 선언해주고 path(경로), element(해당 컴포넌트명)
        // 중첩라우트라는 것도 있다! ex) path="/list:id"
        // 리액트 : navigate(-1) = Vue : this.$router.go(-1) 
        // https://velog.io/@wjddma1202/React-Router%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%B4-%ED%8E%98%EC%9D%B4%EC%A7%80%EB%A5%BC-%EC%9D%B4%EB%8F%99%ED%95%B4%EB%B3%B4%EC%9E%90  : 라우터 참고자료
    )
}

export default App;


// App.js : 컴포넌트 정의. 실제 화면에서 표시되는 내용은 여기서 정의.