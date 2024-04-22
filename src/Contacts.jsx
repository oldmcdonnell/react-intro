import { Link } from "react-router-dom"

function Contacts() {
  return (
    <div className="p-5">
      <Link to='/'>{'<- Back'}</Link>
      <h1>Contacts</h1>
      <p>
      Brandon</p>
      <p>
        <p>Caitlin</p>
        <p>Cody</p>
        <p>Duke</p>
        <p>Eoin</p>
        <p>Henry</p>
        <p>Jacinta</p>
        <p>Jay</p>
        <p>Maddie</p>
        <p>Nathan</p>
        <p>Neal</p>
        <p>Owen</p>
        <p>Ryan</p>
      </p>
    </div>
  )
}

const names = [
  'Brandon',
  'Caitlin',
  'Cody',
  'Duke',
  'Eoin',
  'Henry',
  'Jacinta',
  'Jay',
  'Maddie',
  'Nathan',
  'Neal',
  'Owen',
  'Ryan',
];

// Copy of the names array to manipulate it without changing the original array.
let remainingNames = [...names];
let history = [];

// Function to shuffle the remaining names in a random order.
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  console.log('Shuffled array:', array);
}

// Function to retrieve the next name from the remaining names.
function getNextName() {
  const display = document.querySelector('.name-display');
  if (remainingNames.length === 0) {
    console.log('No remaining names, reshuffling needed.');
    display.textContent = 'All names used, reshuffling...';
    remainingNames = [...names];
    shuffle(remainingNames);
    setTimeout(() => {
      display.textContent = remainingNames.pop();
      history.push(display.textContent);
      console.log('History after reshuffle:', history);
      console.log('Remaining names after reshuffle:', remainingNames);
      updateBackButton();
      updateNamesList();
    }, 1500);
    return;
  }
  // Pops the last remaining name, pushes it to history, and displays it
  const nextName = remainingNames.pop();
  history.push(nextName);
  display.textContent = nextName;
  console.log('Next name:', nextName);
  console.log('History updated:', history);
  console.log('Remaining names:', remainingNames);
  updateBackButton();
  updateNamesList();
}

// Function to show the previous name when the back button is clicked.
function showPreviousName(event) {
  event.preventDefault();
  if (history.length > 1) {
    // Pops the previous name from history back into the remaining names array
    remainingNames.push(history.pop());
    const previousName = history[history.length - 1];
    document.querySelector('.name-display').textContent = previousName;
    console.log('Moved last name back to remainingNames:', remainingNames);
    console.log('Current history:', history);
    updateNamesList();
    updateBackButton();
  }
}

// Function to enable or disable the back button
function updateBackButton() {
  const backButton = document.getElementById('back-button');
  backButton.disabled = history.length <= 1;
}

// Function to update the list of upcoming names displayed in the HTML.
function updateNamesList() {
  const list = document.getElementById('names-list');
  list.innerHTML = '';
  remainingNames.forEach((name) => {
    const item = document.createElement('li');
    item.textContent = name;
    list.appendChild(item);
  });
}

// Function to toggle the display of the list of upcoming names.
function toggleUpcomingNames() {
  const list = document.getElementById('names-list');
  list.style.display = list.style.display === 'none' ? 'block' : 'none';
}

// Sets up event listeners when DOM content loads
function setupEventListeners() {
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.content').addEventListener('click', getNextName);
    document
      .getElementById('back-button')
      .addEventListener('click', showPreviousName);
    document
      .getElementById('toggle-names')
      .addEventListener('click', toggleUpcomingNames);
    shuffle(remainingNames);
    updateNamesList();
  });
}

setupEventListeners();


export default Contacts
