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

const printGitHubUser = async () => {
    try{
        const mojombo = await getGitHubUser("mojombo");
        const orange = await getGitHubUser("");
        const rudiTabuti = await getGitHubUser("rudi.tabuti");
      
        console.log(mojombo);
        console.log(orange);
        console.log(rudiTabuti);
    } catch(error){
        console.log(error);
    }
}

printGitHubUser();
