let articles = ["the", "a", "our", "my"];
let adjetives = ["awesome", "terrible", "great", "big"];
let nouns = ["racoon", "cat", "web", "portfolio", "market", "puedes", "malcom"];
let domains = ["com", "es", "org", "net"];

//let domainComponents = [articles, adjetives, nouns, domains];

generateDomains();

function generateDomains() {
  for (let article of articles) {
    for (let adjetive of adjetives) {
      for (let noun of nouns) {
        let domainName = article + adjetive + noun;
        printDomains(domainName);
      }
    }
  }
}

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

function generateRandomNumber(max) {
  return Math.floor(Math.random() * max);
}
