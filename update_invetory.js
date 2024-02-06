'uese strict';
function updateInventory(inv1, inv2) {
  for (let ar1 of inv1) {
    let found = false;
    let [qt1, name1] = ar1;
    for (let [j, ar2] of inv2.entries()) {
      let [_, name2] = ar2;
      if (name1 == name2) {
        inv2[j][0] += qt1;
        found = true;
        break;
      }
    }
    if (!found) inv2.push(ar1);
  }

  return inv2.sort((a, b) => {
    if (a[1] < b[1]) return -1;
    else if (a[1] > b[1]) return 1;
    return 0;
  });
}

// Example inventory lists
var curInv = [
  [21, 'Bowling Ball'],
  [2, 'Dirty Sock'],
  [1, 'Hair Pin'],
  [5, 'Microphone'],
];

var newInv = [
  [2, 'Hair Pin'],
  [3, 'Half-Eaten Apple'],
  [67, 'Bowling Ball'],
  [7, 'Toothpaste'],
];

updateInventory(curInv, newInv);
