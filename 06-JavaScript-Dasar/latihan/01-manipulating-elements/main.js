// 01-delete-element-in-list
function removeProgrammingLanguage() {
    let button = document.getElementById('languageSelect');
    let option = button.options[button.selectedIndex];
  
    button.removeChild(option);
  }
  
  // 02-about-me
  // document.getElementById('nickname').innerHTML = "Rosa";
  // document.getElementById('age').innerHTML = "19";
  // document.getElementById('hometown').innerHTML = "Bengkalis";
  
  // let li = document.getElementsByTagName('li');
  // let counter;
  
  // while (li) {
  //   let item = li[counter];
  //   console.log(item);
  //   // li = li[counter].setAttribute("class", "listitem");
  //   counter++;
  // }