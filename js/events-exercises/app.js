const input1 = document.getElementById("input-textarea-1"),
    output1 = document.getElementById("output-textarea-1"),
    input2 = document.getElementById("input-textarea-2"),
    output2 = document.getElementById("output-textarea-2");

const Copy = () => {
    output1.value = input1.value;
}
input1.addEventListener('keyup', Copy);

input2.addEventListener('keyup', () => {
    output2.value = input2.value;
});



const btnList = document.querySelectorAll(".clickable-btn");

for(let i = 0; i < btnList.length; i++) {
    btnList[i].addEventListener('click', (e) => {
        const a = parseInt(e.target.innerText);
        e.target.innerText = a + 1;
    });
}



const showHideBtn = document.getElementById("show-hide-btn");

const ToggleBtnHandler = (e) => {
    e.target.innerText = (e.target.innerText === "Hide" ? "Show" : "Hide");
};
showHideBtn.addEventListener('click', ToggleBtnHandler);



const resetBtn = document.getElementById("reset-btn");

const ResetBtnHandler = () => {
    for(let i = 0; i < btnList.length; i++) {
        btnList[i].innerText = "0";
    }
}
resetBtn.addEventListener("click", ResetBtnHandler);