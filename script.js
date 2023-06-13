function changeFontSize(action) {
  var content = document.getElementById("content");
  var computedFontSize = window.getComputedStyle(content).getPropertyValue('font-size');
  var currentFontSize = parseFloat(computedFontSize);

  if (action === 'increase') {
    content.style.fontSize = (currentFontSize + 2) + 'px';
  } else if (action === 'decrease') {
    content.style.fontSize = (currentFontSize - 2) + 'px';
  }
}
