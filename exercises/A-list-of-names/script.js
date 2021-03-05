function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");

  arrayOfPeople.forEach( item => {
    // let name = document.createElement('h1');
    // let job = document.createElement('h2');
    // name.innerText = `${item.name}`;
    // job.innerText =  `${item.job}`;

    // content.appendChild(name);
    // content.appendChild(job);

    content.innerHTML += `<h1>${item.name}</h1>`;
    content.innerHTML += `<h2>${item.job}</h2>`;
  });
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
