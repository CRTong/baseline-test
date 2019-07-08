'use strict';

function collectSameElements(collectionA, collectionB) {
  var asw = new Array();
  var i = 0;
  for(var x in collectionA) {
      for(var y in collectionB) {
        for(var z in collectionB[y]){
          if(collectionA[x] == collectionB[y][z]) {
            asw[i++] = collectionA[x];
          }
        }
          
      }
  }
  return asw;
  
}
