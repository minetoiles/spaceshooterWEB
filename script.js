const controller = document.getElementById("controller");
const generator = document.getElementById("generator");
const director = document.getElementById("director");

//스크립트 버튼 셋 다 누르면 확인 창 뜨고
//확인 누르면 노션페이지로 연결된 새 창이 열림
//버튼 눌렀다는 표시로 버튼, 글자 색상 바꿈

controller.addEventListener("click", () => {
    const result = confirm('컨트롤러 스크립트 화면으로 이동하시겠습니까?');
    if (result) {
        window.open('https://www.notion.so/2455db776eb98028b564f32bf1089b67', '_blank');
        controller.style.backgroundColor = 'azure';
        controller.style.color = 'rgb(55, 55, 55)';
    }    
});
generator.addEventListener("click",() => {
    const result = confirm('제너레이터 스크립트 화면으로 이동하시겠습니까?');
    if (result) {
        window.open('https://www.notion.so/2455db776eb9801f82ddc2a9d7434132', '_blank');
        generator.style.backgroundColor = 'azure';
        generator.style.color = 'rgb(55, 55, 55)';
    }
});
director.addEventListener("click", () => {
    const result = confirm('감독 스크립트 화면으로 이동하시겠습니까?');
    if (result) {
        window.open('https://www.notion.so/2455db776eb980249a3ef529490f7896', '_blank');
        director.style.backgroundColor = 'azure';
        director.style.color = 'rgb(55, 55, 55)';
    }
})