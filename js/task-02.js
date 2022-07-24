const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
 
const AllLi = document.querySelector('.site-nav')

const elements = ingredients.map(option => {
  const liEl = document.createElement('li')
  liEl.classList.add('item')
  liEl.textContent = (option)
  return liEl
})
AllLi.append(...elements)






