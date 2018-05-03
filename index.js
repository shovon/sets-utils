/**
 * Compares two sets for their equality.
 * @param {Set} a The first set to compare
 * @param {Set} b The second set to compare
 * @returns {boolean}
 */
module.exports.setsEqual = (a, b) =>
  a.size === b.size && [...a].every(e => b.has(e));

/**
 * Determines if two sets are equal, not just in terms of existence, but also
 * in their ordering.
 * 
 * This differs from `setsEqual` in that the order matters, when checking for
 * equality.
 * 
 * The rationale for this function is that all sets in JavaScript are
 * technically ordered sets. Not only will JavaScript developers want to know if
 * two sets are equal by content, but also equal in ordering of said content.
 * @param {Set} a The first set to compare
 * @param {Set} b The second set to compare
 * @returns {boolean}
 */
module.exports.orderedSetsEqual = (a, b) => {
  const bArr = [...b];
  return [...a].every((e, i) => bArr[i] === e);
};

/**
 * Determines if the first set is a subset of the second set.
 * @param {Set} a The set that we hypothesize as being a subset
 * @param {Set} b The set for which we want to test if it is a superset
 * @returns {boolean}
 */
module.exports.isSubset = (a, b) =>
  a.size <= b.size && [...a].every(e => b.has(e));

/**
 * Determines if the first set is a proper subset of the second set. That is,
 * the size of the first set must be less than the second set, and all elements
 * in the first set must also be in the second set.
 * 
 * `isProperSubset` differs from `isSubset` in that if both the first set and
 * second set are equal, then false is returned, since the size of the first
 * set is not less than the second set.
 * @param {Set} a The set that we hypothesize as being a proper subset
 * @param {Set} b The set for which we want to test if it is a proper superset
 * @returns {boolean}
 */
module.exports.isProperSubset = (a, b) =>
  a.size < b.size && module.exports.isSubset(a, b);

/**
 * Determines if the first set is a superset of the second set.
 * @param {Set} a The set that we hypothesize as being a superset
 * @param {Set} b The set for which we want to test if it is a subset
 * @returns {boolean}
 */
module.exports.isSuperset = (a, b) => module.exports.isSubset(b, a);

/**
 * Determines if the first set is a proper superset of the second set. That is,
 * the size of the first set must be greater than the second set, and all
 * elements in the second set must also be in the first set.
 * 
 * `isProperSuperset` differs from `isSubset` in that if both the first set and
 * second set are equal, then fals is returned, since the size of the first
 * set is not greater than the second set.
 * @param {Set} a The set that we hypothesize as being a proper superset
 * @param {Set} b TThe set for which we want to test if it is a proper subset
 * @returns {boolean}
 */
module.exports.isProperSuperset = (a, b) => module.exports.isProperSubset(b, a);

// I will let users decide exactly how to test for disjointness. This library
// will not handle this use case at all. This is just too computationally
// complex.

/**
 * Returns the union of all the supplied sets.
 * 
 * This is just a named function to initialize a new set via ES6's rest-spread.
 * @param {...Set[]} sets parameter of multiple sets
 * @returns {Set}
 */
module.exports.union = (...sets) =>
  new Set(sets.reduce((prev, next) => prev.concat([...next]), []));

/**
 * Returns the intersection of all the supplied sets.
 * @param {...Set[]} sets parameter of multiple sets
 * @returns {Set}
 */
module.exports.intersect = (...sets) => {
  const [ reference, ...rest ] = sets;
  const result = [...reference].filter(e => rest.every(s => s.has(e)));
  return new Set(result);
};

/**
 * Returns the set difference between the first and second set.
 * 
 * That is, derive a new set where, elements in the resulting set are also in
 * the first set  (`a`), but not in the second set (`b`).
 * @param {Set} a The set from which we want to derive a new set, but with some
 *   elements removed
 * @param {Set} b The set that will determine which elements to remove
 * @returns {Set}
 */
module.exports.difference = (a, b) => new Set([...a].filter(e => !b.has(e)));
