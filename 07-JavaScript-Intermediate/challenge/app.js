
// const url = "https://randomuser.me/api/?results=2"


async function getUsers() {
    try{
    const url = await fetch("https://randomuser.me/api/?results=2")
    const json = await url.json()
    const data = await json
    console.log(data)
    }catch(err){
        console.error(err)
    }
  }
  
  getUsers()

  async function renderUsers() {
    let users = await getUsers();
    console.log(fata);
    let dataUser = users;
    let html = '';
    Array.from(dataUser).forEach(user => {
    let htmlRender =
    `<div class="user">
        <img src = "${user.picture.medium}">
        <h2>${user.name.first} ${user.name.last}</h2>
        <div class="email">
            <a href="email:${user.email}">${user.email}</a>
        </div>
    </div>`;
    html += htmlRender;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renderUsers()