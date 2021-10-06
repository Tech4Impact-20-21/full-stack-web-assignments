## Soal 1
    Which of the following is NOT used to create a request using fetch() and explain why?

    A. .this()

    B. .then()

    C. .json()

    D. JSON.stringify()

## Jawaban 1
    A. .this, karena bukan termasuk resource/function yang digunakan dalam mengirimkan request fetch(). method .this biasanya digunakan untuk menginisialisasi variable dan sering digunakan dalam OOP

## Soal 2
    Promise is a(n)

    A. object

    B. method

    C. state

    D. function

## Jawaban 2
    A. Object
    A promise is an object that may produce a single value some time in the future : either a resolved value, or a reason that it's not resolved.

## Soal 3 
    What is wrong with the following code?
    `async function getData() {
    try {
    let response = await fetch('https://api-to-call.com/endpoint', { 
      method: 'POST', 
      body: JSON.stringify({id: 200}), 
      dataType: 'json'
      });
      let jsonResponse = await JSON.stringify(response);
      return jsonResponse;
      } catch (error) {
          console.log(error);
          }
          }`

## Jawaban 3
    body data type must match "Content-Type" header, pada code di atas tidak terdapat header dan content-type didalamnya, sehingga responses nya tidak muncul(Response should include 'content-type' header.)


## Soal 4
    What is wrong with the following code?

        async function getData() {
    try {
        let response = await fetch('https://api-to-call.com/endpoint', 'POST', JSON.stringify({id: 200}), 'json');
        let jsonResponse = await response.json();
        return jsonResponse;
    } catch (error) {
        console.log(error);
    }
    }

## Jawaban no 4
    kesalahan penulisan code pada method POST dan JSON, response tidak ditemukan.

