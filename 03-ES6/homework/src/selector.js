// var traverseDomAndCollectElements = function(matchFunc, startEl) {
//   // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
//   // usa matchFunc para identificar elementos que matchien

//   // TU CÓDIGO AQUÍ

//   var resultSet = []; //return (selector.includes(element.id));

//   if (typeof startEl === "undefined") {
//     startEl = document.body;
//   }

//   if (matchFunc(startEl)) resultSet.push(startEl);

//   if (startEl.children.length === 0) return resultSet;

//   if (startEl.children.length > 0) {
//     for (child of startEl.children) {
//       resultSet = resultSet.concat(traverseDomAndCollectElements(matchFunc, child))
//     }
//     return resultSet;
//   }
// };

var traverseDomAndCollectElements = function(matchFunc, startEl) {

  var resultSet = []; 
  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ

  // if (matchFunc(startEl)) resultSet.push(startEl);
  // if (startEl.children.length === 0) return resultSet;
  // if (startEl.children.length > 0) {
  //   for (child of startEl.children) {
  //     resultSet = resultSet.concat(traverseDomAndCollectElements(matchFunc, child))
  //   }
  //   return resultSet;
  // }

  // --------------------------------- CODE REVIEW --------------------------------
  if (matchFunc(startEl)) resultSet.push(startEl);
  for (let i = 0; i < startEl.children.length; i++) {
    let result = traverseDomAndCollectElements(matchFunc, startEl.children[i]);
    resultSet = [...resultSet, ...result]
  }
  return resultSet;
  // --------------------------------- CODE REVIEW --------------------------------


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

var matchFunctionMaker = function(selector) { //"#pagetitle"
  var selectorType = selectorTypeMatcher(selector); //id
  var matchFunction;
  if (selectorType === "id") { 
    matchFunction = function(element) {
      // return (selector.includes(element.id)); 


  // --------------------------------- CODE REVIEW --------------------------------
      return "#"+ element.id ===  selector;
  // --------------------------------- CODE REVIEW --------------------------------

    }   
  } else if (selectorType === "class") {

    // matchFunction = function(element) {
    //   let classSplit = element.className.split(" ");
    //   let count = 0;
    //   classSplit.forEach(function(clase) {
    //   	if (selector.includes(clase)) count ++;
    //     else return false;
    //  	})
    //   if (count > 0) return true; 
    //   else return false;
    // }  

    // --------------------------------- CODE REVIEW --------------------------------
    matchFunction = function(element) {
      for (let i = 0; i < element.classList.length; i++) {
        if ("." + element.classList[i] === selector) return true;
      }
      return false;
    }
    // --------------------------------- CODE REVIEW --------------------------------


  } else if (selectorType === "tag.class") {

    // matchFunction = function(element) { 
    //   let selectorSplit = selector.split(".");
    //   let classSplit = element.className.split(" ");
    //   let tag = selectorSplit[0].toLowerCase() === element.tagName.toLowerCase();
    //   let count = 0;
    //   classSplit.forEach(function(clase) {
    //   	if (selectorSplit[1] === clase) count ++;
    //  	})
    //   if (tag && count > 0) return true;
    //   else return false;
    // }

  // --------------------------------- CODE REVIEW --------------------------------
      matchFunction = function(element) {
        let [tagBuscada, classBuscada] = selector.split(".") //destructuracion (visto en clase de ES6)
        return matchFunctionMaker(tagBuscada)(element) && matchFunctionMaker("." + classBuscada)(element)
      }  
  // --------------------------------- CODE REVIEW --------------------------------

  } else if (selectorType === "tag") { 

    // matchFunction = function(element) { 
    //   return element.tagName.toLowerCase() === selector.toLowerCase();
    // }    

    // --------------------------------- CODE REVIEW --------------------------------
      matchFunction = function(element) {
        return element.tagName.toLowerCase() === selector.toLowerCase();
      }
  
   // --------------------------------- CODE REVIEW --------------------------------
  }
  return matchFunction;


};

var $ = function(selector) { //"#pagetitle"
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector); //return (selector.includes(element.id));
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
