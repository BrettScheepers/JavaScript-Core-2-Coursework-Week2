function shoppingList(arrayOfPeople) {
  let content = document.querySelector("#content");
  let list = document.createElement('ul');

  content.appendChild(list);

  arrayOfPeople.forEach( item => {
    list.innerHTML += `<li>${item}</li>`;
  });
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
