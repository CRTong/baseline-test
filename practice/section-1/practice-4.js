'use strict';

function collectSameElements(collectionA, objectB) {
  let keys = collectionA.map(item => item.key);
  let setA = new Set(keys);
  let setB = new Set(objectB.value);
  let result = new Set([...setA].filter(x => setB.has(x)));
  return Array.from(result);
}
