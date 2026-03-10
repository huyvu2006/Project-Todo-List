import {todoList} from "./todo-items"

let addNew = document.querySelector(".benTrai div:nth-child(2) button")
let dialog = document.querySelector("dialog")
let theDivThuHai = document.querySelector(".benPhai div div:nth-child(2)") 
addNew.addEventListener("click",(ev) => {
    ev.preventDefault()
    dialog.showModal()
})



function createDom(obj) {
    let i = 1
    for (let item in obj) {  
        let pChild = document.querySelector(`.benPhai div div:nth-child(2) p:nth-child(${i})`)
        let p = document.createElement("p")
        p.textContent = `${obj[item]}`
        pChild.appendChild(p)
        i++
}
    }
   
function taoTieuDe () {
    arr.map((value) => {
        let p = document.createElement("p")
        p.textContent = `${value}:`;
        theDivThuHai.appendChild(p)
    })
}

function getData () {
    let obj = new todoList()
    let i = 1
    for (let data in obj) {
        let input = document.querySelector(`dialog form input:nth-of-type(${i})`)
        obj[data] = input.value
        i++
    }
    return obj
}

let arr = ["TITLE","DESCRIPTION","DUEDATE","PRIORITY","NOTES","CHECKLIST"]

function combine () {
    let obj = getData()
    taoTieuDe()
    createDom(obj)
}

let sumbit = document.querySelector("#sumbit")
    sumbit.addEventListener("click", (ev) => {
        ev.preventDefault()
        combine()
        theDivThuHai.innerHTML=""
        combine()
        dialog.close()  
        
    })

    export {sumbit}