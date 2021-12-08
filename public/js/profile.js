const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name').value.trim();
  const grade = document.querySelector('#grade').value.trim();
  

  if (name && grade) {
    const response = await fetch(`/api/studentRoutes`, {
      method: 'POST',
      body: JSON.stringify({ name, grade }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/studentData');
    } else {
      alert('Failed to create project');
    }
  }
};

//const delButtonHandler = async (event) => {
  //if (event.target.hasAttribute('data-id')) {
    //const id = event.target.getAttribute('data-id');

    //const response = await fetch(`/api/projects/${id}`, {
      //method: 'DELETE',
    //});

    //if (response.ok) {
      //document.location.replace('/profile');
    //} else {
      //alert('Failed to delete project');
    //}
  //}
//};

//document
//  .querySelector('.new-project-form')
  //.addEventListener('submit', newFormHandler);

//document
  //.querySelector('.project-list')
  //.addEventListener('click', delButtonHandler);
