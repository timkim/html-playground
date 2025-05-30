function createTag(name, attrs) {
  const el = document.createElement(name);
  if (typeof attrs === 'object') {
    Object.entries(attrs).forEach(([key, value]) => {
      el.setAttribute(key, value);
    });
  }
  return el;
}

window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
  const main = document.querySelector('div#main');
  console.log(main);

  const announce = document.querySelector('div.announce');
  console.log(announce);

  const form = document.querySelector('div#formExmaple');
  console.log(form);

  const divContainer = createTag('div', {class: 'container'});
  main.append(divContainer);

  const listContainer = createTag('li');

});