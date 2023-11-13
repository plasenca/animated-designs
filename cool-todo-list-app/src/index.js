(() => {
  // state variables
  let toDoListArray = [];

  // UI Variables
  const form = document.querySelector('.form');
  const input = document.querySelector('.form__input');
  const ul = document.querySelector('.toDoList');

  // Event Listeners

  form.addEventListener('submit', (e) => {
    // prevent default behaviour
    e.preventDefault();
    // give item a unique id
    let itemId = String(Date.now());
    // get/assign input value
    let toDoItem = input.value;
    // pass ID and item into functions
    addItemToDOM(itemId, toDoItem);
    addItemToArray(itemId, toDoItem);
    // Clear the input box. (this is default behaviour but we got rid of that)
    input.value = '';
  });

  ul.addEventListener('click', (e) => {
    // get the id of the item that was clicked on
    let id = e.target.getAttribute('data-id');

    if (!id) return; //user clicked in something else
    // pass id into function
    removeItemFromDOM(id);
    removeItemFromArray(id);
  });

  // Functions
  function addItemToDOM(itemId, toDoItem) {
    // create an li
    const li = document.createElement('li');
    li.setAttribute('data-id', itemId);
    // add toDoItem text to li
    li.innerText = toDoItem;
    // add li to the DOM
    ul.appendChild(li);
  }

  function addItemToArray(itemId, toDoItem) {
    // add item to array as an object with an ID so we can find and delete later
    toDoListArray.push({ itemId, toDoItem });
    console.log(toDoListArray);
  }

  function removeItemFromDOM(id) {
    // get the list item by data ID
    let li = document.querySelector(`[data-id='${id}']`);
    // remove list item
    ul.removeChild(li);
  }

  function removeItemFromArray(id) {
    // create a new toDoListArray with all li's that don't match the ID
    toDoListArray = toDoListArray.filter((item) => item.itemId !== id);
    console.log(toDoListArray);
  }

})();