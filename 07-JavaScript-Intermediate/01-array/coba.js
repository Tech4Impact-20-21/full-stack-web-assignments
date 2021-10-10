function printAboveAvg(arr, n)
{
     
    // Find average
    let avg = 0;
    for(let i = 0; i < n; i++)
        avg += arr[i];   
         
    avg = avg / n;
 
    // Print elements greater than average
    for(let i = 0; i < n; i++)
        if (arr[i] > avg)
            console.log(arr[i] + " ");
}
 
// Driver code
let arr = [ 5, 4, 6, 9, 10 ];
let a = arr.length;
 
printAboveAvg(arr, a);
