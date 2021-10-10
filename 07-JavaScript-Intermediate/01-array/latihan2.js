const arr = [
    [10],
    [9, 7, 1],
    [2, 8],
  ];
  

// for(let i = 0; i < arr.length; i++)
// {
//     newArr = newArr.concat(arr[i]);
// }

// console.log(newArr);

  function searchInArray(arr,number) {

    let newArr = []
    let result = null;

    arr.forEach(function(value) {
        value.forEach(function(val) {
            newArr.push(val);   
        })
    })

    newArr.forEach(function (value,index) {
         if(value === number){
             result = index;
         }   
    });
    return result;
    // for(let i = 0; i < arr.length; i++)
    // {
    //     let result = null;
    //     newArr = newArr.concat(arr[i]);

    //     newArr.find(function(value,index){
    //         if(value === number){
    //             result = index;
    //         }
    //     })
    //     return result;
         
    // }
 
    }


  console.log(searchInArray(arr, 3));
  console.log(searchInArray(arr, 2));
  console.log(searchInArray(arr, 4));
  console.log(searchInArray(arr, 8));
  
    
