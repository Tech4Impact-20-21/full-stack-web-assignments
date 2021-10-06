
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
    // Code here
    let container = document.getElementById("class");
    for (let i = 0; i < data.length; i++) {
        let div = document.createElement("div");
        div.innerHTML = data[i]
        container.appendChild(div);
    }
    
  }
  
  renderUsers();