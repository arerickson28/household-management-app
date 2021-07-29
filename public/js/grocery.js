//const { forEach } = require("lodash");

const postNewGroceryItem = async (event) => {
    event.preventDefault();

    const product = document.querySelector('#newGroceryProductInput').value.trim();
    const quantity = document.querySelector('#newGroceryQuantityInput').value.trim();
    const user_id = document.querySelector('#hidingGroceryInfo').value.trim();

    console.log(product);
    console.log(quantity);
    console.log(user_id);

    if (product && quantity && user_id) {
        const response = await fetch(`/api/grocery/post`, {
            method: 'POST',
            body: JSON.stringify({ product, quantity, user_id }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/api/grocery');
        } else {
            alert('Failed to add note');
        }
    }
}


const deleteGroceryItem = async (event) => {
    event.preventDefault();

    const data_id = document.querySelector("#deleteBtn").value.trim();

    console.log(data_id);
}


const updateGroceryItem = async (event) => {
    event.preventDefault();

    const data_id = document.querySelector("#updateBtn").value.trim();;

    console.log(data_id);
}


function prepDeleteGrocery(id) {
    console.log(id);
}



document
    .getElementById("newGroceryBtn")
    .addEventListener("click", function () {
        document.getElementById("addGrocery").classList.remove("hide");
    })


document
    .getElementById("cancelCreateGroceryBtn")
    .addEventListener("click", function () {
        document.getElementById("addGrocery").classList.add("hide");
    })

/*
document
    .querySelectorAll("#deleteBtn")
    .forEach(button => {
        button.addEventListener("click", deleteGroceryItem);
    });
*/

/*
document
    .querySelectorAll("#updateBtn")
    .forEach(button => {
        button.addEventListener("click", updateGroceryItem);
    });
*/


document
    .querySelector("#createGroceryBtn")
    .addEventListener("click", postNewGroceryItem);
