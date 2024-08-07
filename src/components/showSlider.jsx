import one from '../assets/1.jpg';
import two from '../assets/2.jpg';
import three from '../assets/3.jpg';
import four from '../assets/4.jpg';
import five from '../assets/5.jpg';
import ImgSlider from '../components/imgSlider';
import { Link } from "react-router-dom";

function ShowSlider() {
    const images = [one, two, three, four, five];
    const intervalTime = 3000;

    return (
        <div>
            <ImgSlider image={images} intervalTime={intervalTime}></ImgSlider>

            <Link to="/list">List로 이동</Link>
        </div>
    )
}

export default ShowSlider;