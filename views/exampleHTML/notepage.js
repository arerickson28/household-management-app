
document.getElementById("newNoteBtn").addEventListener("click", function() {

    document.getElementById("newNote").classList.remove("hide")
   
})


document.getElementById("createNoteBtn").addEventListener("click", function() {
    document.getElementById("newNote").classList.add("hide")
})

document.getElementById("cancelCreateNoteBtn").addEventListener("click", function() {
    document.getElementById("newNote").classList.add("hide")
})

console.log("heyooo")