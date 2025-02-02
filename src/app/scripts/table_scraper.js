let vehicleNodes = document
  .getElementsByTagName('table')[0]
  .querySelectorAll('[data-label="Vehicle"]');

let deathRateNodes = document
  .getElementsByTagName('table')[0]
  .querySelectorAll(
    '[data-label="Driver death rate (with confidence limits)"]'
  );

let otherDeathRateNodes = document
  .getElementsByTagName('table')[0]
  .querySelectorAll(
    '[data-label="Other-driver death rate (with confidence limits)"]'
  );

let yearNodes = document
  .getElementsByTagName('table')[0]
  .querySelectorAll('[data-label="Model-year span"]');
let res = [];
let dropdowns = [];
for (let i = 0; i < vehicleNodes.length; i++) {
  if (i == 0) {
    yearNodes = document
      .getElementsByTagName('table')[0]
      .querySelectorAll('[data-label="Model-year span"]');
    otherDeathRateNodes = document
      .getElementsByTagName('table')[0]
      .querySelectorAll(
        '[data-label="Other-driver death rate (with confidence limits)"]'
      );
    deathRateNodes = document
      .getElementsByTagName('table')[0]
      .querySelectorAll(
        '[data-label="Driver death rate (with confidence limits)"]'
      );
    vehicleNodes = document
      .getElementsByTagName('table')[0]
      .querySelectorAll('[data-label="Vehicle"]');
    dropdowns = document.querySelectorAll('.select select');
  }
  const size = dropdowns[0].options[dropdowns[0].selectedIndex].text;
  const type = dropdowns[1].options[dropdowns[1].selectedIndex].text;
  const rate = Number(deathRateNodes[i].children[0].innerHTML.trim());
  const lowerBound = Number(deathRateNodes[i].children[1].innerHTML.trim());
  const upperBound = Number(deathRateNodes[i].children[2].innerHTML.trim());
  const Orate = Number(otherDeathRateNodes[i].children[0].innerHTML.trim());
  const OlowerBound = Number(
    otherDeathRateNodes[i].children[1].innerHTML.trim()
  );
  const OupperBound = Number(
    otherDeathRateNodes[i].children[2].innerHTML.trim()
  );
  const year = yearNodes[i].innerHTML.trim();
  const model = vehicleNodes[i].innerHTML.trim();
  const brand = model.split(' ')[0];
  const vehicleObject = {
    brand: brand,
    model: model,
    size: size,
    type: type,
    driverDeathRate: {
      lowerBound: lowerBound,
      rate: rate,
      upperBound: upperBound,
    },
    otherDriverDeathRate: {
      lowerBound: OlowerBound,
      rate: Orate,
      upperBound: OupperBound,
    },
    modelYearSpan: year,
  };
  res.push(vehicleObject);
}
