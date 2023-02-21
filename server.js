const express = require('express');
//아까 설치한 라이브러리 실행 명령
const path = require('path');

const app = express();

app.use("/static", express.static(path.resolve(__dirname,"frontend", "static")));
//static파일 안에 있으면 어떤 경로로가도 무조건 index__dirname,"frontend", "static" 이 경로의 형태로 리턴

app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname,"frontend", "index.html"));
    });

app.listen(process.env.PORT || 3000, () => {
    console.log("Server started on port 3000");
})
//서버를 위의 포트(8080)에 열도록 설정