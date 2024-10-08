function isEmptyString(value) {
  return typeof value === "string" && value.length === 0;
}

function formatHTML(str) {
  var div = document.createElement("div");
  div.innerHTML = str.trim();

  return format(div, 0).innerHTML;
}

function format(node, level) {
  var indentBefore = new Array(level++ + 1).join("  "),
    indentAfter = new Array(level - 1).join("  "),
    textNode;

  for (var i = 0; i < node.children.length; i++) {
    textNode = document.createTextNode("\n" + indentBefore);
    node.insertBefore(textNode, node.children[i]);

    format(node.children[i], level);

    if (node.lastElementChild == node.children[i]) {
      textNode = document.createTextNode("\n" + indentAfter);
      node.appendChild(textNode);
    }
  }

  return node;
}

function removeAllNonNumericChars(str = "") {
  return str.replace(/\D/g, "");
}

export { isEmptyString, formatHTML, removeAllNonNumericChars };
