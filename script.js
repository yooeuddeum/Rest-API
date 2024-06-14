const root = document.getElementById("root");
// console.log(root);
const header = document.createElement("header");
// console.log(header);
const section = document.createElement("section");
// console.log(section);
const btn = document.createElement("button");
console.log(btn);

btn.textContent = "button";

root.appendChild(header);
root.appendChild(section);
root.appendChild(btn);

const reqURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

const req = new XMLHttpRequest();
// XMLHttpRequest 생성자로 부터 새로운 request 인스턴스 생성

req.open("GET", reqURL);
// open 메서드를 사용해서 새로운 요청을 만듬
// http 메서드는 네크워크 요청 방식은 GET방식으로
// URL의 요청을 하는데 저장해둔 requestURL JSON파일의 URL을 지정

req.responseType = "json";
// responseType을 json으로 설정 XHR 하여금 서버가 JSON 데이터를 반환
// javascript 객체로써 변환될꺼라는걸 알기 위해서
req.send();
// send 메서드로 요청처리
