
const arrCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${arrCategories.length}`);

arrCategories.forEach((el)=> {
    console.log(`Category: ${el.firstElementChild.textContent}`);
    console.log(`Elements: ${el.lastElementChild.children.length}`);
})
