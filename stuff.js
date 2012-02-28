(function(ctx) {

   var add = function(a, b) {
     return a + b;
   };

   var sub = function(a, b) {
     return a - b;
   };

   ctx.add = add;
   ctx.sub = sub;

})(typeof module !== 'undefined' && module.exports ? module.exports : window);
