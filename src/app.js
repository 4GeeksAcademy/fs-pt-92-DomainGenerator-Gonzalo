let articles = ["the", "a", "our", "my"];
let adjetives = ["awesome", "terrible", "great", "big"];
let nouns = ["racoon", "cat", "web", "portfolio", "market", "puedes", "malcom"];
let domainComponents = [articles, adjetives];

// Nunca incluyo domains en domainComponents, los gestiono a parte.
let domains = ["com", "es", "org", "net"];

generateDomains();

function generateDomains() {
  let allCombinations = [];

  // Si la longitud de la lista de componentes del dominio es mayor que 1...
  if (domainComponents.length > 1) {
    // Me quedo con las combinaciones de los dos primeros
    allCombinations = combineTwoLists(domainComponents[0], domainComponents[1]);
    // En caso contrario es decir que la lista tenga solo un componente
  } else {
    // Muestro los dominios
    for (let domainName of domainComponents[0]) {
      printDomains(domainName);
    }
  }

  // Generamos todas las combinaciones posibles
  allCombinations = generateAllCombinations(allCombinations);

  // Mostramos los dominios formateando la extension de dominio
  for (let domainName of allCombinations) {
    printDomains(domainName);
  }
}

// genera todas las combinaciones posibles de domainComponents
function generateAllCombinations(list) {
  for (let i = 2; i < domainComponents.length; i++) {
    list = combineTwoLists(list, domainComponents[i]);
  }

  return list;
}

// Devuelve una lista con todas las combinaciones entre dos listas
function combineTwoLists(firsList, secondList) {
  let combinations = [];
  for (let firsElement of firsList) {
    for (let secondElement of secondList) {
      combinations.push(firsElement + secondElement);
    }
  }

  return combinations;
}

// Imprime todos los dominios posibles con domainName
function printDomains(domainName) {
  for (let domain of domains) {
    if (domainName.endsWith(domain)) {
      console.log(
        "DOMAIN HACK DETECTED: " + formatDomainHack(domainName, domain)
      );
    } else {
      console.log(domainName + "." + domain);
    }
  }
}

function formatDomainHack(domainName, domain) {
  //let domainSubstrIndex = domainName.indexOf(domain);
  //let newDomainName = domainName.slice(0, domainSubstrIndex);
  return domainName.slice(0, domainName.indexOf(domain)) + "." + domain;
}

// VERSIÓN ANTIGUA
// function generateDomains() {
//   for (let article of articles) {
//     for (let adjetive of adjetives) {
//       for (let noun of nouns) {
//         let domainName = article + adjetive + noun;
//         printDomains(domainName);
//       }
//     }
//   }
// }
