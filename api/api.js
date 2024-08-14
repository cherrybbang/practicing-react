const express = require('express');
const app = express();
const port = 8090;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


app.get('/content', (req, res) => {
    // res.send('안녕 지유!');
    const content = [
        { id: 1, name : 'Alice' },
        { id: 2, name : 'Bob' },
        { id: 3, name : 'Charlie' }
    ]

    res.send(content);
});








// 리액트는 port가 3000에서 실행되기 때문에 port 번호를 다르게 설정해준다. 여기서는 8080으로 해주었다.
// 또한, 서버를 실행시켜 줄 때는 해당 파일이 있는 폴더로 디렉토리 이동을 한 후 실행한다. api.js 는 api 폴더 안에 있기 때문에 api 폴더로 디렉토리 이동한 후 node api.js 해준다.