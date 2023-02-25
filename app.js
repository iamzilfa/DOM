// GetElementByID()

// const title = document.getElementById('main-heading');

// console.log(title);

// GetElementByClassname()

// const listItems = document.getElementsByClassName('list-items');

// console.log(listItems);

// GetElementByTagName()

// const listTags  = document.getElementsByTagName('li')

// console.log(listTags)

// querySelector

// const container = document.querySelector('li');
// console.log(container);



// ************************************************************************************

// STYLING ELEMENT

// Inline style(just for a single element)

// const title = document.querySelector('#main-heading');
// title.style.color = 'red'; 

// console.log(title);

// Style Multiple elements

const listItems = document.querySelectorAll('.list-items');

for(i=0; i<listItems.length; i++){
    listItems[i].style.fontSize = '5rem';
}

// console.log(listItems);


// CREATE ELEMENT


