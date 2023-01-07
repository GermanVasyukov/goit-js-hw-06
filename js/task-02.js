const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
  ];

const ingredientsEl = document.querySelector('#ingredients');
for (const ingredient of ingredients) {
  const newTitle = document.createElement('li');
  newTitle.textContent = ingredient;
  newTitle.classList.add('item');
  ingredientsEl.append(newTitle);
}