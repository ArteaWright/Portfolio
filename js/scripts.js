const txt = document.querySelector('.animate');
const strTxt = txt.textContent;
const seperateTxt = strTxt.split("");
txt.textContent = "";

for (let i=0; i < seperateTxt.length; i++) {
    txt.innerHTML += "<span>" + seperateTxt[i] + "</span>";
}

onTick = () => {
    const span = txt.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if(char === seperateTxt.length) {
        complete();
        return;
    }
}

let char = 0;
let timer = setInterval(onTick, 50);


complete =() => {
    clearInterval(timer);
    timer = null;
}