var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  if (startEl.children.length === 0) {
    if (matchFunc(startEl)) return resultSet.push(startEl);
    else return resultSet;
  }

  if (startEl.children.length > 0) {
    for (child of startEl.children) {
      resultSet = resultSet.concat(traverseDomAndCollectElements(matchFunc, child))
    }
    return resultSet;
  }
  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  
  
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if (selector[0] === "#") return "id";
  else if (selector[0] === ".") return "class";
  else if (selector.includes(".")) return "tag.class";
  else return "tag";  
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) { //img.photos
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
    matchFunction = function(element) {
      return (selector.includes(element.id));
    }   
  } else if (selectorType === "class") {
    matchFunction = function(element) {
      let classSplit = element.className.split(" ");
      let count = 0;
      classSplit.forEach(function(clase) {
      	if (selector.includes(clase)) count ++;
        else return false;
     	})
      if (count > 0) return true; 
      else return false;
    }  
  } else if (selectorType === "tag.class") {
    matchFunction = function(element) { 
      let selectorSplit = selector.split(".");
      let classSplit = element.className.split(" ");
      let tag = selectorSplit[0].toLowerCase() === element.tagName.toLowerCase();
      let count = 0;
      classSplit.forEach(function(clase) {
      	if (selectorSplit[1] === clase) count ++;
     	})
      if (tag && count > 0) return true;
      else return false;
    }
  } else if (selectorType === "tag") { 
    matchFunction = function(element) { 
      return element.tagName.toLowerCase() === selector.toLowerCase();
    }    
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
