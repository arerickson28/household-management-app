
let lists = [
    {
        "listName": "list1",
        "listContent": [
            // {
            //     "itemTitle": "Give Dog A Bath",
            //     "itemContent": "Remember to check for ticks"
            // },
            // {
            //     "itemTitle": "Sweep Patio",
            //     "itemContent": "Remember to compost leaves"
            // }
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


// let list1 = [
//     {
//         itemTitle: "Give Dog A Bath",
//         itemContent: "Remember to check for ticks"
//     },
//     {
//         itemTitle: "Sweep Patio",
//         itemContent: "Remember to compost leaves"
//     }
// ]

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
    
    
    lists[0]["listContent"].push(newItemObj)

    console.log(lists[0]["listContent"])

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


let listofitems = document.getElementById("listofitems");
let chosenList
function renderList(list) {
    // let chosenList ;

    for (y = 0; y < lists.length; y++) {
        if (lists[y]["listName"] == list) {
            chosenList = lists[y]["listContent"]
            console.log(chosenList)
        }
        console.log(chosenList)
    }
    console.log(chosenList)
    for (let i= chosenList.length -1; i>=0; i--) {

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

renderList("list1")


function addDeleteListeners() {


let deleteBtns = document.getElementsByClassName("deleteBtn")



for (let i=0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener("click", function() {


        let deleteBtnContent = deleteBtns[i].parentNode.previousSibling.firstChild.textContent
        let deleteBtnTitle = deleteBtns[i].parentNode.previousSibling.previousSibling.firstChild.textContent

        let currentListName = listofitems.getAttribute("class");
        console.log(currentListName);
        let currentList ;

        for (z = 0; z < lists.length; z++) {
            if (lists[z]["listName"] == currentListName) {
                currentList = lists[z]["listContent"]
            }
        }
        console.log(currentList);

        for (let j = 0; j < currentList.length; j++) {
            if (currentList[j]["itemTitle"] == deleteBtnTitle && currentList[j]["itemContent"] == deleteBtnContent) {
                console.log(currentList[j])
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