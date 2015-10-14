// UI.registerHelper('equals', function(a, b) {
//     if(a === b){
//         return true;
//     }else {
//         return false;
//     }
// });

Template.registerHelper('equals', (a,b) => (a === b) )
Template.registerHelper('pluralize', (num, string) => {
  return (num === 1 ? string : `string${s}`);
});

// UI.registerHelper('pluralize', function(number, string) {
//   plural = string + 's';
//   return (number == 1 ? string : plural);
// });
