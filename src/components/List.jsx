import { Link, useNavigate, Navigate } from "react-router-dom";
import axios from 'axios';
import Data from './data.jsx';

function List() {

    const navigate = useNavigate();
    const goTo = () => {
        navigate('/wow', {replace:true});
        // 이렇게 설정하면 localhost:3000/wow 로 이동한다.
        // useNavigate은 인자를 2개 받는데, 첫번째 인자는 '주소'고, 두번째 인자는 replace이다.
        // replace : true 면, 뒤로가기를 눌러도 직전 페이지로 가는게 아니라 / 로 설정한 페이지로 이동한다. replace : false는 직전 페이지, 뒤로가기가 가능하다.
    };

    const clickForApi = () => {
        axios.get('http://localhost:8090/content').then(response => {
            console.log(response);
            console.log(response.data);
        })
    }

    // let loginYN = false;
    // if(!loginYN) {
    //     return <Navigate to='/wow' replace={true}/>
    // }
    // Navigate은 렌더링 시에만 사용된다.

    return (
        <>
            <h1>Navigate 연습</h1>

            <Link to="/">메인으로 돌아가기</Link>
            <br/>
            <button><Link to="/">Back</Link></button>

            <p onClick={goTo}>useNavigate로 이동하기</p>
            <button onClick={() => navigate(-1)}>-1 사용하여 뒤로가기</button>

            <h1>다른 컴포넌트에서 데이터 불러오기</h1>
            <Data />

            <h1>axios로 api 연동하기</h1>
            <button onClick={clickForApi}>axios api</button>
        </>
    )
}

export default List;

// Link : 사용자가 클릭해서 페이지를 이동하도록 할 때.
// 특정 주소로 이동하는 태그
// 대부분의 경우 Link 만으로도 충분하다.
// 하이퍼링크 텍스트, 버튼, 이미지 등

// useNavigate : 양식이 제출되거나 특정 event가 발생할때, url를 조작할 수 있는 interface 제공

// Navigate : 렌더링될 때 현재 위치를 변경한다.
// useNavigate()과 비슷해보이지만, useNavigate()은 렌더링 과정에서 사용할 수 없다.