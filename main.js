// Adds and averages the prices
var arrOfPrices = items.map( function(el) {
  return el.price;
});
var sum = 0;
var totalPrice = arrOfPrices.forEach( function(el) {
  sum += el;
});
var answer1 = sum / arrOfPrices.length;
document.getElementById('answer1').innerHTML = answer1;

// Print items between a price range
var filteredItems = items.filter(function(el) {
  return el.price >= 14 && el.price <= 18
});
var solution2 = filteredItems.map(function(el) {
  return "ID: " + el.listing_id
});
solution2 = solution2.join("\n");
document.getElementById('answer2').innerHTML = solution2;

// Filter by GBP
gbpItem = items.filter(function(el) {
  return el.currency_code === "GBP"
});
solution3 = gbpItem[0].title + " PRICE: " + gbpItem[0].price;
document.getElementById('answer3').innerHTML = solution3;

//Find items made of wood
var woodItems = []
items.filter(function(el,idx) {
  if (el.materials.indexOf('wood') !== -1) {
    woodItems.push(el.title + '\n')
  };
});

document.getElementById('answer4').innerHTML = woodItems;

//List items made of 8 or more materials
var largeItems = []

items.filter(function(el) {
  if (el.materials.length >= 8) {
    largeItems.push('\nTitle: ' + el.title + '\nMade of ' + el.materials.length + ' materials: ' + el.materials)
  };
});

document.getElementById('answer5').innerHTML = largeItems;

// Items made by their owner
var selfMade = []
items.filter(function(el) {
  if (el.who_made === 'i_did') {
    sum = selfMade.push(el.title)
  }
})

document.getElementById('answer6').innerHTML = selfMade.length