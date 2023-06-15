const getUsersButton = document.getElementById('getUsersButton');
const userGrid = document.getElementById('userGrid');
const loader = document.getElementById('loader');

getUsersButton.addEventListener('click', () => {
  showLoader();

  fetch('https://reqres.in/api/users?page=1')
    .then(response => response.json())
    .then(data => {
      hideLoader();
      renderUsers(data.data);
    })
    .catch(error => {
      hideLoader();
      console.error('Error:', error);
    });
});

function showLoader() {
  loader.style.display = 'block';
}

function hideLoader() {
  loader.style.display = 'none';
}

function renderUsers(users) {
  userGrid.innerHTML = '';

  users.forEach(user => {
    const userCard = document.createElement('div');
    userCard.classList.add('userCard');

    const avatar = document.createElement('img');
    avatar.classList.add('userAvatar');
    avatar.src = user.avatar;

    const userName = document.createElement('div');
    userName.classList.add('userName');
    userName.innerText = `${user.first_name} ${user.last_name}`;

    const userEmail = document.createElement('div');
    userEmail.classList.add('userEmail');
    userEmail.innerText = user.email;

    userCard.appendChild(avatar);
    userCard.appendChild(userName);
    userCard.appendChild(userEmail);

    userGrid.appendChild(userCard);
  });
}
