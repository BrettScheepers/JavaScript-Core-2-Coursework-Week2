function readingList(books) {
  //ignore // <img src="" alt="">

  let content = document.getElementById('content');
  let h1 = document.createElement('h1');
  h1.innerHTML = 'Book List';
  content.appendChild(h1);

  let count = 0;
  books.forEach( item => {
    content.innerHTML += `<ul>
                            <li>
                              <div id="${count}" class="displayDiv">
                                <p>${item.title} - ${item.author}</p>
                                <img src="">
                              </div>
                            </li>
                          </ul>`
    count++;
  })

  let hasReadDivs = document.querySelectorAll('.displayDiv');

  hasReadDivs.forEach( item => {
    if (books[item.id].alreadyRead) item.style.backgroundColor = 'green';
    else item.style.backgroundColor = 'red';
  })
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

readingList(books);