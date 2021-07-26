

let list1 = [
    {
        itemTitle: "Give Dog A Bath",
        itemContent: "Remember to check for ticks"
    },
    {
        itemTitle: "Sweep Patio",
        itemContent: "Remember to compost leaves"
    }
]




let newitemTitleInput = document.getElementById("newNoteTitleInput");

let newitemContentInput = document.getElementById("newNoteContentInput");





document.getElementById("newNoteBtn").addEventListener("click", function() {

    document.getElementById("newNote").classList.remove("hide")
   
})


document.getElementById("createNoteBtn").addEventListener("click", function() {
    document.getElementById("newNote").classList.add("hide");
    
    let newItemObj = {
        itemTitle: newitemTitleInput.value,
        itemContent: newitemContentInput.value
    }
    
    
    list1.push(newItemObj)

    console.log(list1)

    newitemTitleInput.value = ""
    newitemContentInput.value = ""

    //Clearing List Of Items
    while (listofitems.childNodes[1]) {
        listofitems.removeChild(listofitems.childNodes[1]);
    } ;

    renderList(list1)
})

document.getElementById("cancelCreateNoteBtn").addEventListener("click", function() {
    document.getElementById("newNote").classList.add("hide")
    newitemTitleInput.value = ""
    newitemContentInput.value = ""
})

console.log("heyooo")


let listofitems = document.getElementById("listofitems");

function renderList(list) {
    for (let i= list.length -1; i>=0; i--) {

        let itemMain = document.createElement("div");
        itemMain.setAttribute("class", "itemMain") ;

        let item = document.createElement("div");
        item.setAttribute("class", "item") ;

        let  itemTitleDiv = document.createElement("div");
        itemTitleDiv.setAttribute("class", "itemTitle") ;


        //h3 here
        let itemTitle = document.createElement("h3");
        itemTitle.innerHTML = list[i]["itemTitle"]
        

        let itemContentDiv = document.createElement("div");
        itemContentDiv.setAttribute("class", "itemContent") ;

        //p here
        let itemContent = document.createElement("p");
        itemContent.innerHTML = list[i]["itemContent"]
        itemContentDiv.appendChild(itemContent)

        let deleteBtnDiv = document.createElement("div");
        deleteBtnDiv.setAttribute("class", "itemButton") ;

        //button here
        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Delete"
        

        //stitch together html
        itemTitleDiv.appendChild(itemTitle)
        item.appendChild(itemTitleDiv)

        itemContentDiv.appendChild(itemContent)
        item.appendChild(itemContentDiv)


        deleteBtnDiv.appendChild(deleteBtn)
        item.appendChild(deleteBtnDiv)

        itemMain.appendChild(item)

        listofitems.appendChild(itemMain)

    }
}

renderList(list1)
