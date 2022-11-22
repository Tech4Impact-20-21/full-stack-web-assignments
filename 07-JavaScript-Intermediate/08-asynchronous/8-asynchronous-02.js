const isR18Plus = function(age){
    return new Promise(function(resolve, reject){
        if(age > 18){
            resolve("anda sudah dewasa")
        } else {
            reject("anda masih di bawah umur")
        }
    })
}
const printR18Plus = async () => {
  try{
    const underAge = await isR18Plus(10);
    const properAge = await isR18Plus(19);
    console.log(underAge);
    console.log(properAge);
  } catch(e){
    console.log(e)
  }
}

printR18Plus();
