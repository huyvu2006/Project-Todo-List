import {todoList} from "./todo-items"

let addNew = document.querySelector(".benTrai div:nth-child(2) button")
    ,dialog = document.querySelector("dialog")
    ,theDivThuHai = document.querySelector(".benPhai div div:nth-child(2)") 
    ,theDivThuNhat = document.querySelector(".benPhai div div:nth-child(1)")
    ,leftTheDivHai = document.querySelector(".benTrai div:nth-child(2)")
    ,sumbit = document.querySelector("#sumbit")

let listProject = []

let tieuDe =  ["TITLE","DESCRIPTION","DUEDATE","PRIORITY","NOTES","CHECKLIST"]

let buttonList = []

let currentButtonClick = []

let saveOldProject = []

function deleteOld () {
    theDivThuNhat.innerHTML = "";
    theDivThuHai.innerHTML = ""
}

function ReplaceOld () {
    taoTieuDe(listProject[0],tieuDe);
    createTodoItems(listProject[0]);
}

addNew.addEventListener("click",(ev) => {
    dialog.showModal()
})

sumbit.addEventListener("click", (ev) => {
    ev.preventDefault()
    listProject.splice(0)
    getData()
    createProject(listProject[0])
    createFuncForProjectButton(buttonList)
    dialog.close()
})

function findProject (arr1,arr2) {
    let button = arr1[0]
        arr2.map((val) => {
            if (button == val.project) {
                listProject.push(val)
                currentButtonClick.splice(0)
            }
        })
    
}

function createFuncForProjectButton (arr) {
    arr.map( (val) => {
        if (!(val.classList.contains("nut"))){
        val.addEventListener("click", () => {
            currentButtonClick.push(val.textContent)
            deleteOld()
            findProject(currentButtonClick,saveOldProject)
            taoTieuDe(listProject[0],tieuDe)
            createTodoItems(listProject[0])
            listProject.splice(0)
            val.classList.add("nut")
        })
    }})
    }

function getData () {
    let obj = new todoList()
        ,i = 1
    for (let data in obj) {
        let input = document.querySelector(`dialog form input:nth-of-type(${i})`)
        obj[data] = input.value
        i++
    }
    saveOldProject.push(obj)
    listProject.push(obj)
}

function taoTieuDe (obj,arr) {
    arr.map((value) => {
        let p = document.createElement("p")
        p.textContent = `${value}:`;
        theDivThuHai.appendChild(p)
    })
    let h3 = document.createElement("h3")
    h3.textContent = `${obj.project}`
    theDivThuNhat.appendChild(h3)
}

function createProject (obj) {
    for (let item in obj) {
        if (item == "project") {
            let button = document.createElement("button")
            button.textContent = `${obj[item]}`
            buttonList.push(button)
            leftTheDivHai.appendChild(button)
        } 
    }
}

function createTodoItems(obj) {
    let i = 1
    for (let item in obj) {
        if (item != "project") {
        let pChild = document.querySelector(`.benPhai div div:nth-child(2) p:nth-child(${i})`)
        let p = document.createElement("p")
        p.textContent = `${obj[item]}`
        pChild.appendChild(p)
        i++
    }
}
}

export {sumbit}