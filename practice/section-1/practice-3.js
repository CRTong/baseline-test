'use strict';

function collectSameElements(collectionA, objectB) {
  let setA = new Set(collectionA);
  let setB = new Set(objectB.value);
  let result = new Set([...setA].filter(x => setB.has(x)));

  return Array.from(result) ;
}
