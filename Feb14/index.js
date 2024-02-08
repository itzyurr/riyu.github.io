var question = document.getElementById("question");
var yesBtn = document.getElementsByClassName("btn-yes")[0];
var noBtn = document.getElementsByClassName("btn-no")[0];
var gifContainer = document.getElementsByClassName("gif-container")[0];
var yesSize = 16;
var noNameIndex = 0;
var noNames = ["Sure?", "Sure najud?", "Pag Oo na ba!", "Sige naghud, dika malooy sa akoa?", "Sure najud na?", "Basin madala ra ba", "sige na Idol ba", "di lagi ka mag mahay", "mag hilak lagi ko karon nawa", "sumbong takang papa huhu", "gwapo bitaw ko", "ka hilakon najud ko promise :(", "sakit kaayu"];

function increaseYesSize() {
    yesSize += 40;
    yesBtn.style.fontSize = yesSize + "px";
}

function changeNoName() {
    noBtn.innerHTML = noNames[noNameIndex];
    noNameIndex = (noNameIndex + 1) % noNames.length;
    increaseYesSize();
}

function showGif() {
    question.style.display = "none";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
    gifContainer.style.display = "block";
}