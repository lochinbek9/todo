"use strict";

const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");

const addBtn = document.querySelector(".add-btn");



function addTask(){

    addBtn.addEventListener("click", () =>{
        if(inputBox.value === ''){
            alert("You must write something");
        } else{
            let li = document.createElement("li");
            li.innerHTML = inputBox.value;
            listContainer.appendChild(li);
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);
        };
    
        inputBox.value = "";

        saveDate();
    });  
};

addTask();

function removeTask(){
    listContainer.addEventListener("click", (e) =>{
        if(e.target.tagName === "LI"){
            e.target.classList.toggle("checked");
            saveDate();
        } else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
        }
    }, false)
};

removeTask();

function saveDate(){
    localStorage.setItem("data", listContainer.innerHTML);
};

function showtask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showtask();
