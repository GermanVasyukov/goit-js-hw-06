const navLinksEl = document.querySelectorAll('li.item');
console.log("Number of categories:", navLinksEl.length);

navLinksEl.forEach(element => {
    console.log("Category:", element.firstElementChild.textContent);
    console.log("Elements:", element.lastElementChild.children.length)
});

