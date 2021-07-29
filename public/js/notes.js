const postNewNote = async (event) => {
    event.preventDefault();

    const task = document.querySelector('#newNoteTitleInput').value.trim();
    const notes = document.querySelector('#newNoteContentInput').value.trim();
    const user_id = document.querySelector('#hidingInfoInput').value.trim();

    console.log(task);
    console.log(notes);
    console.log(user_id);

    if(task && notes && user_id) {
        const response = await fetch(`/api/note/post`, {
            method: 'POST',
            body: JSON.stringify({ task, notes, user_id }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/api/note');
        } else {
            alert('Failed to add note');
        }
    }
}

/*
const removeNote = async (event) => {
    event.preventDefault();
}

document
   .querySelector('.deleteBtn')
   .addEventListener('submit', removeNote);

*/

document
    .getElementById("newNoteBtn")
    .addEventListener("click", function () {
        document.getElementById("newNote").classList.remove("hide");
    })

document
    .getElementById("cancelCreateNoteBtn")
    .addEventListener("click", function () {
        document.getElementById("newNote").classList.add("hide");
    })

document
    .querySelector("#createNoteBtn")
    .addEventListener('click', postNewNote);
