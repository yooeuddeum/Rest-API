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

// load 이벤트가 request 객체가 발생할때 실행할 이벤트 핸들러 코드 구성
req.addEventListener("load", () => {
  const superHeroes = req.response;
  MainHeader(superHeroes);
  Heroes(superHeroes);
});

// 요청의 대한 응답을 superHeroes 변수에 대입한다
// superHeroes은 이제 JSON 데이터 기반 javascript 객체를 포함함

// ★--header태그--★
// 매개변수를 object로 설정하고 javascript 객체가 JSON으로 부터 생겨난 걸 상기 시켜주기 위함
// h1변수에 h1태그를 만들어서 할당시켜줌
// h1의 textContent가 squadName이라는 객체의 프로퍼티와 일치하게끔 만들어주고 header태그에 자식요소로 넣어줌
// p변수에 p태그를 만들어서 할당시켜줌
// p의 textContent가 Hometown , formed 라는 객체의 프로퍼티와 같게 끔 만들어주고 동일하게 header태그에 자식요소로 넣어줌
function MainHeader(object) {
  const h1 = document.createElement("h1");
  h1.textContent = object["squadName"];

  const p = document.createElement("p");
  p.textContent =
    "Hometown: " + object["homeTown"] + " // Formed: " + object["formed"];

  header.appendChild(h1);
  header.appendChild(p);
}

// ★--section태그--★
// 매개변수를 object로 설정
// heroes 변수에 javascript 객체의 프로퍼티 members를 대입 시켜줌
// 각각 빈 박스 변수를 만들고 article, h2 ,span, pre, p, ul 태그를 만들어서 대입 시켜줌
// 만들어준 h2의 이름을 히어로의 name 가지도록 만들어줌
// 각각 만들어준 span, pre , p 태그에 secretIdentity , age , Superpowers: 문장을 넣어줌
// 새로운 빈 박스 superPowers에 powers라는 프로퍼티를 대입 시켜줌
// superpowers에 해당하는 배열을 반복시켜줄 반복문 코드를 만들어줌
// 만든 반복문에 listItem이라는 빈박스 변수안에 li태그를 만들어서 할당 시켜줌
// 위에 만들어준 ul 태그의 자식 요소로 반복 실행 시켜준 li 태그를 넣어줌
// 만들어놓은 article 태그에 html에 보여지고 싶은 순서대로 자식요소로 넣어줌
// 마지막으로 section 태그에 자식요소로 article을 넣어줌
function Heroes(object) {
  const heroes = object["members"];

  for (let i = 0; i < heroes.length; i++) {
    const article = document.createElement("article");
    const h2 = document.createElement("h2");
    const span = document.createElement("span");
    const pre = document.createElement("pre");
    const p = document.createElement("p");
    const List = document.createElement("ul");

    h2.textContent = heroes[i].name;
    span.textContent = "Secret identity:" + heroes[i].secretIdentity;
    pre.textContent = "Age: " + heroes[i].age;
    p.textContent = "Superpowers:";

    const superPowers = heroes[i].powers;
    for (let j = 0; j < superPowers.length; j++) {
      const listItem = document.createElement("li");
      listItem.textContent = superPowers[j];
      List.appendChild(listItem);
    }

    article.appendChild(h2);
    article.appendChild(span);
    article.appendChild(pre);
    article.appendChild(p);
    article.appendChild(List);
    section.appendChild(article);
  }
}
header.style.display = "none";
section.style.display = "none";

btn.addEventListener("click", () => {
  if (MainHeader) {
    header.style.display = "none";
    section.style.display = "none";
    MainHeader = false;
  } else {
    header.style.display = "block";
    section.style.display = "block";
    MainHeader = true;
  }
});
