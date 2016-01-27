module.exports = function (label, action) {

  var main = document.getElementsByTagName('main')[0];
  var p = document.createElement('p');
  var button = document.createElement('button');

  button.innerHTML = label;
  button.addEventListener('click', action);

  p.appendChild(button)
  main.appendChild(p);
};
