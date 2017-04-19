function component() {
  var element = document.createElement('div');

  element.textContent = "Hello, JavaScript~!"

  return element;
}

document.body.appendChild(component());