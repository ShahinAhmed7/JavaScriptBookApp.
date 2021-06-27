

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const btn = document.querySelector('.btn');
const bookList = document.querySelector('#book-list');


btn.addEventListener('click', function(e){
    e.preventDefault();

    if(title.value == '' && author.value == '' && year.value == ''){
        alert("Please check forms");
    } else{
        // Create Table row
        const tr = document.createElement('tr');
        bookList.appendChild(tr);


        // Create new title
        const newTitle = document.createElement('th');
        tr.appendChild(newTitle);
        newTitle.innerHTML = title.value;

        // Create new author
        const newAuthor = document.createElement('th');
        tr.appendChild(newAuthor);
        newAuthor.innerHTML = author.value;


        // Create new year
        const newYear = document.createElement('th');
        tr.appendChild(newYear);
        newYear.innerHTML = year.value;
    }


})