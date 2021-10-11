const elFormUsername = document.querySelector("#form-username");
const elCard = document.querySelector(".card");
const elCardImg = document.querySelector(".card-img-top");
const elCardBtn = document.querySelector("#card-btn");
const elCardTitle = document.querySelector("#card-title");
const elUsername = document.querySelector("#username");

async function getGitHubUser(username){
    try{
        if(username !== ""){
            const fetchGithub = await fetch(`https://api.github.com/users/${username}`);
            const result = await fetchGithub.json();
            if(result.message === "Not Found"){
                return result.message;
            } else{
                return result;
            }
        }else{
            return null;
        }
        
    } catch(error){
        console.log(error)
    }
}

elFormUsername.onsubmit = async (e) => {
  e.preventDefault();
  try{
    const result = await getGitHubUser(elUsername.value);
    if(result!=="Not Found"){
        elCardTitle.innerHTML = result.login;
        elCardImg.src = result.avatar_url;
        elCardBtn.href = result.html_url;
        elCard.classList.remove('d-none');
        elCardImg.classList.remove('d-none');
        elCardBtn.classList.remove('d-none');
    } else {
        elCardTitle.innerHTML = result;
        elCard.classList.remove('d-none');
        elCardImg.classList.add('d-none');
        elCardBtn.classList.add('d-none');
    }
  } catch(error){
      console.log(error)
  }
};
