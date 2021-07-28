

let lists = [
    {
        "listName": "list1",
        "listContent": [
            {
                "itemTitle": "Give Dog A Bath",
                "itemContent": "Remember to check for ticks"
            },
            {
                "itemTitle": "Sweep Patio",
                "itemContent": "Remember to compost leaves"
            }
        ]
    },
    {
        "listName": "list2",
        "listContent": [
            {
                "itemTitle": "Get Milk",
                "itemContent": "2% Preferred"
            },
            {
                "itemTitle": "Get Bread",
                "itemContent": "Gluten-Free preferred"
            }
        ]
    }
    
]

let newitemTitleInput = document.getElementById("newNoteTitleInput");

let newitemContentInput = document.getElementById("newNoteContentInput");

document.getElementById("newNoteBtn").addEventListener("click", function() {

    document.getElementById("newNote").classList.remove("hide")
   
})

let selectedListName = document.getElementById("listName")

document.getElementById("createNoteBtn").addEventListener("click", function() {
    document.getElementById("newNote").classList.add("hide");
    
    let newItemObj = {
        itemTitle: newitemTitleInput.value,
        itemContent: newitemContentInput.value
    }
    
    for (let x = 0; x < lists.length; x++) {
        if (lists[x]["listName"] == selectedListName.innerHTML ) {
            lists[x]["listContent"].push(newItemObj)
        }
    }
    
    newitemTitleInput.value = ""
    newitemContentInput.value = ""

    // Clearing List Of Items
    while (listofitems.childNodes[3]) {
        listofitems.removeChild(listofitems.childNodes[3]);
    } ;
    renderList(lists[0]["listContent"])
})

document.getElementById("cancelCreateNoteBtn").addEventListener("click", function() {
    document.getElementById("newNote").classList.add("hide")
    newitemTitleInput.value = ""
    newitemContentInput.value = ""
})

console.log("heyooo")


let newListBtn = document.getElementById("newListBtn");
let newListDiv = document.getElementById("createListDiv"); 
newListBtn.addEventListener("click", function() {
    newListDiv.classList.remove("hide");
})

let createListBtn = document.getElementById("createListBtn")
createListBtn.addEventListener("click", function() {
    newListDiv.classList.add("hide");
})


let listofitems = document.getElementById("listofitems");
let chosenList

function clearListOfItems() {

    while(listofitems.childNodes[3]) {
        listofitems.removeChild(listofitems.childNodes[3])
    }
}

function renderList(list) {
    clearListOfItems()

    for (y = 0; y < lists.length; y++) {
        if (lists[y]["listName"] == list) {
            chosenList = lists[y]["listContent"]
        }
    }
    for (let i= chosenList.length - 1; i>=0; i--) {

        let itemMain = document.createElement("div");
        itemMain.setAttribute("class", "itemMain") ;

        let item = document.createElement("div");
        item.setAttribute("class", "item") ;

        let  itemTitleDiv = document.createElement("div");
        itemTitleDiv.setAttribute("class", "itemTitle") ;


        //h3 here
        let itemTitle = document.createElement("h3");
        itemTitle.innerHTML = chosenList[i]["itemTitle"]
        

        let itemContentDiv = document.createElement("div");
        itemContentDiv.setAttribute("class", "itemContent") ;

        //p here
        let itemContent = document.createElement("p");
        itemContent.innerHTML = chosenList[i]["itemContent"]
        itemContentDiv.appendChild(itemContent)

        let deleteBtnDiv = document.createElement("div");
        deleteBtnDiv.setAttribute("class", "itemButton") ;

        //button here
        let deleteBtn = document.createElement("button");
        deleteBtn.setAttribute("class", "deleteBtn")
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

        addDeleteListeners()

    }
}

// renderList("list2")

let deleteBtns
function addDeleteListeners() {

    deleteBtns = document.getElementsByClassName("deleteBtn")
    console.log(deleteBtns)
    console.log(deleteBtns[0])

    // let currentList;
    for (let i=0; i < deleteBtns.length; i++) {
        deleteBtns[i].addEventListener("click", function() {
            let deleteBtnContent = deleteBtns[i].parentNode.previousSibling.firstChild.textContent
            console.log(deleteBtnContent);
            let deleteBtnTitle = deleteBtns[i].parentNode.previousSibling.previousSibling.firstChild.textContent
            console.log(deleteBtnTitle)
    
            let currentListName = listofitems.getAttribute("class");
            console.log(currentListName);
            let currentList ;
    
            for (z = 0; z < lists.length; z++) {
                if (lists[z]["listName"] == currentListName) {
                    console.log("yee")
                    currentList = lists[z]["listContent"]
                    console.log(currentList)
                }
            }
            console.log(currentList);
            console.log(lists)
    
            for (let j = 0; j < currentList.length; j++) {
                console.log(currentList)
                if (currentList[j]["itemTitle"] == deleteBtnTitle && currentList[j]["itemContent"] == deleteBtnContent) {
                    console.log(currentList[j])
                    console.log(currentList)
                    currentList.pop(currentList[j])
                }
            }
    
            for (let w = 0; w < lists.length; w++) {
                if (lists[w]["listName"] == currentListName) {
                    renderList(lists[w]["listName"])
                }
            }
        })
    }
}

let listOfListsDiv = document.getElementById("listoflists");
function renderListOfLists() {

    for (let i=lists.length -1; i>=0; i--) {


        listNameDiv = document.createElement("div")
        listNameDiv.setAttribute("class", "list")

        listName = document.createElement("h3")
        listName.innerHTML= lists[i]["listName"]
        

        listNameDiv.appendChild(listName)
        listOfListsDiv.appendChild(listNameDiv)
        
    }
    addSelectListListeners()
}

renderListOfLists();

function addSelectListListeners() {

    let listz = document.getElementsByClassName("list")
    console.log(listz)

    // let selectedListName = document.getElementById("listName")

    for (let i = 0; i < listz.length; i++) {
        
        listz[i].addEventListener("click", function(event) {
            event.preventDefault()
            console.log(event.target)
            selectedListName.innerHTML = event.target.firstChild.textContent
            renderList(event.target.firstChild.textContent)
        } )

    }
    
}