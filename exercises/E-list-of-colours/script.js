function listOfColours(colours) {
  const content = document.getElementById('content');
  const select = document.createElement('select');
  const p = document.createElement('p');

  content.appendChild(select);
  content.appendChild(p);

  p.innerText = `You have selected: ${colours[0]}`;
  p.style.color = colours[0];

  colours.forEach( item => {
    let option = document.createElement('option');
    option.innerHTML = item;
    select.appendChild(option);
  });

  select.addEventListener('change', () => {
    p.innerText = `You have selected: ${select.value}`;
    p.style.color = select.value;
  })
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
