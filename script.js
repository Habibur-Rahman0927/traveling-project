/* //function expression to select elements
const selectElement = (s) => document.querySelector(s);
//open the menu on click
selectElement(s, '.open').addEventListener('click', () => {
    selectElement(s, '.nav-list').classList.add('active');
});
//close the menu on click
selectElement(s, '.close').addEventListener('click',() => {
    selectElement(s, '.nav-list').classList.remove('active')
}); */

const openTog = document.querySelector('.open');
const navTog = document.querySelector('.nav-list');
const closeTog = document.querySelector('.close');

openTog.addEventListener('click', () => {
    navTog.classList.add('active');
    closeTog.addEventListener('click',() =>{
        navTog.classList.remove('active');
    });
});