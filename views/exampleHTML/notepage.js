

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

        let itemContentDiv = document.createElement("div");
        itemContentDiv.setAttribute("class", "itemContent") ;

        //p here
        let itemContent = document.createElement("p");
        itemContent.textContent = list[i]["itemContent"]
        itemContentDiv.appendChild(itemContent)

        let deleteBtnDiv = document.createElement("div");
        deleteBtnDiv.setAttribute("class", "itemButton") ;

        //button here
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent("Delete");
        deleteBtnDiv.appendChild(deleteBtn)


    }
}


<div class="itemMain">

    <div class="item">
        <div class="itemTitle">
            <h3>&lt Item 1 &gt</h3>
        </div>

        <div class="itemContent">
            <p>Give the dog a bath</p>
        </div>
    </div>

    <div class="itemButton">
        <button>Delete</button>
    </div>
</div>