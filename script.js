const textBox = document.getElementById("text_box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(textBox.value === ' '){
        alert("Enter the task first!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = textBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    textBox.value = "";
}

listContainer.addEventListener("click",function(e){
    if(e.target.tageName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }

},false);

