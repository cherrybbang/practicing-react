import one from './assets/1.jpg';
import two from './assets/2.jpg';
import three from './assets/3.jpg';
import four from './assets/4.jpg';
import five from './assets/5.jpg';
import ImgSlider from './components/imgSlider';

function App() {
    const images = [one, two, three, four, five];
    const intervalTime = 3000;

    return (
        <div>
            <ImgSlider images={images} intervalTime={intervalTime}></ImgSlider>
        </div>
    )
}

export default App;