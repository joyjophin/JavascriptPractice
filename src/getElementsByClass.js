function traverse(node, className) {
  let result = [];
  if (node.classList.contains(className)) {
    result = result.concat(node)
  }

  for (let i = 0; i < node.children.length; i++) {
    result = result.concat(traverse(node.children[i], className));
  }

  return result;
}


console.log(traverse(document.body, 'wanted'));
