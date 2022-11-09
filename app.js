const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

//submit을 했다고 함수가 그냥 실행되는 것이 아닌, 이벤트를 넣어주고 그제야 실행되는 절차
//event는 form의 이름정보, 시간등을 가지고 있음
function onLoginSubmit(event){
    event.preventDefault(); //preventDefault -> 기본 동작이 발생하지 않도록 막음 ()은 아무정보도 받겠지 않다는 의미
    //console.log(event);

    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    
    localStorage.setItem("username", username);
    greeting.innerText = `"Hello ${username}`; /// `` < 백틱 기호로 묶으주면 다음과 같이 표현 가능
    greeting.classList.remove(HIDDEN_CLASSNAME);
}



loginForm.addEventListener("submit",onLoginSubmit); //addEventListener은 브라우저가 대신 실행해주는 것뿐만 아니알 event에 대한 정보도 담아줌
