
function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = h >= 12 ? 'PM' : 'AM';

    h = h % 12;
    h = h ? h : 12;
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("offClock").innerText = time;
    document.getElementById("onClock").innerText = time; 
    setTimeout(showTime, 1000);
}

function openScreen() {
    var screenContent = document.getElementById("screenContent");
    var screen = document.getElementById("screen");
    var fridgeView = document.getElementById("fridgeView");
    var FridgeInteriorDisplayed = screen.style.backgroundImage.includes("vibrantandpure.com");
    screenContent.style.backgroundColor = "#F0ECE4";
    screenContent.style.display = "block";
    screenContent.style.color = "black";
    document.body.style.backgroundColor = "#3a3a45";
    if (FridgeInteriorDisplayed) {
        fridgeView.style.display = "flex";
    }
}

function addItem() {
    var inputItem = document.getElementById("input").value
    var li = document.createElement("li");
    var textNode = document.createTextNode(inputItem);
    li.appendChild(textNode);
    var ul = document.getElementById("list");
    ul.appendChild(li);
    var check = document.createElement("input");
    check.type = "checkbox";
    li.appendChild(check);
    check.addEventListener('change', function() {
        if (this.checked) {
            li.remove();
        }
    });
    document.getElementById("input").value = "";
}

function showFridge() {
    var fridgeView = document.getElementById("fridgeView");
    if(fridgeView.style.display === "none" || fridgeView.style.display === "") {
        fridgeView.style.display = "flex";
    } else {
        fridgeView.style.display = "none";
    }
}

function goBack() {
    var screenContent = document.getElementById("screenContent");
    var fridgeView = document.getElementById("fridgeView"); 
    var screen = document.getElementById("screen"); 
    screenContent.style.display = "none";
    screenContent.style.color = "white";
    document.body.style.backgroundColor = "#f0f0f0";
    if (fridgeView.style.display === "flex") {
        fridgeView.style.display = "none";
        screen.style.backgroundImage = "url('https://i0.wp.com/vibrantandpure.com/wp-content/uploads/2017/06/fullsizerender-287.jpg?fit=750%2C928&quality=80&strip=all&ssl=1')";
    }
}
