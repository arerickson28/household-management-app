const newSearchHandler = async (event) => {
    event.preventDefault();

    const searchGroup = document.querySelector('#group-search');
    if (searchGroup) {
        const response = await fetch(`/api/groups`, {
            method: 'POST',
            body: JSON.stringify({id, group_name, type}),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/');
          } else {
            alert('Failed to create project');
          }
    }
};

const listGroupMembers = document.querySelector('#group-members');



document
  .querySelector('.new-group-search')
  .addEventListener('submit', newSearchHandler);
