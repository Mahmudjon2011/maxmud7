let spaceForm = document.querySelector(".formSpace");
let spaceLogin = document.querySelector(".login");
let spaceParol = document.querySelector(".parol");
let spaceEye = document.querySelector(".koz");
let btn = document.querySelector(".submit");
let errorMsg = document.querySelector(".error-msg");


btn.disabled = true;  
btn.style.opacity = 0.5;  

spaceEye.addEventListener("mousedown", (evt) => {
    evt.preventDefault();
    spaceParol.setAttribute("type", "text");  
});

spaceEye.addEventListener("mouseup", (evt) => {
    evt.preventDefault();
    spaceParol.setAttribute("type", "password");
});

spaceParol.addEventListener("input", () => {
    if (spaceParol.value.trim() !== "") {
        btn.disabled = false;  
        btn.style.opacity = 1; 
    } else {
        btn.disabled = true;  
        btn.style.opacity = 0.5;  
    }
});

function checkLoginAndPassword() {
    let login = Number(spaceLogin.value.trim());
    let parol = Number(spaceParol.value.trim());

    let topilganStudent = null;

    oquvchilar.forEach(oquvchi => {
        if (oquvchi.id === login && oquvchi.password === parol) {
            topilganStudent = oquvchi;
            console.log(topilganStudent);  
            
            alert(`Ism: ${topilganStudent.name} ${topilganStudent.surname}\nCoin: ${topilganStudent.coin}\nHP: ${topilganStudent.hp}\nGruh: ${topilganStudent.group}`);
            window.location.href = './success-page.html';  
        }
    });

    if (!topilganStudent) {
        errorMsg.style.display = "block"; 
    } else {
        errorMsg.style.display = "none";  
}


btn.addEventListener("click", (bot) => {
    bot.preventDefault();
    checkLoginAndPassword();
});

spaceForm.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        checkLoginAndPassword();
    }
});