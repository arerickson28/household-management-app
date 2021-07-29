const postNewNote = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#newNoteTitleInput').value.trim();
    const notes = document.querySelector('#newNoteContentInput').value.trim();

    console.log(title);
    console.log(notes);

    if(title && notes) {
        const response = await fetch(`/api/note/post`, {
            method: 'POST',
            body: JSON.stringify({title, notes}),
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (response.ok) {
            document.location.replace('/note');
        } else {
            alert('Failed to add note');
        }
    }
}

const removeNote = async (event) => {
    event.preventDefault();
}


// const newSearchHandler = async (event) => {
//     event.preventDefault();

//     const searchGroup = document.querySelector('#group-search');
//     if (searchGroup) {
//         const response = await fetch(`/api/groups`, {
//             method: 'POST',
//             body: JSON.stringify({id, group_name, type}),
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });

//         if (response.ok) {
//             document.location.replace('/groups');
//           } else {
//             alert('Failed to create project');
//           }
//     }
// };




 document
   .querySelector('.deleteBtn')
   .addEventListener('submit', removeNote);

document
    .getElementById("newNoteBtn")
    .addEventListener("click", function () {
        document.getElementById("newNote").classList.remove("hide");
    })

document
    .querySelector("#createNoteBtn")
    .addEventListener('click', postNewNote);
