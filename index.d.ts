/**
 * Compares two sets for their equality.
 * @param a The first set to compare
 * @param b The second set to compare
 */
export function setsEqual<T>(a: Set<T>, b: Set<T>): boolean

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
 * @param a The first set to compare
 * @param b The second set to compare
 */
export function orderedSetsEqual<T>(a: Set<T>, b: Set<T>): boolean

/**
 * Determines if the first set is a subset of the second set.
 * @param a The set that we hypothesize as being a subset
 * @param b The set for which we want to test if it is a superset
 */
export function isSubset<T>(a: Set<T>, b: Set<T>): boolean

/**
 * Determines if the first set is a proper subset of the second set. That is,
 * the size of the first set must be less than the second set, and all elements
 * in the first set must also be in the second set.
 * 
 * `isProperSubset` differs from `isSubset` in that if both the first set and
 * second set are equal, then false is returned, since the size of the first
 * set is not less than the second set.
 * @param a The set that we hypothesize as being a proper subset
 * @param b The set for which we want to test if it is a proper superset
 */
export function isProperSubset<T>(a: Set<T>, b: Set<T>): boolean

/**
 * Determines if the first set is a superset of the second set.
 * @param a The set that we hypothesize as being a superset
 * @param b The set for which we want to test if it is a subset
 */
export function isSuperset<T>(a: Set<T>, b: Set<T>): boolean

/**
 * Determines if the first set is a proper superset of the second set. That is,
 * the size of the first set must be greater than the second set, and all
 * elements in the second set must also be in the first set.
 * 
 * `isProperSuperset` differs from `isSubset` in that if both the first set and
 * second set are equal, then fals is returned, since the size of the first
 * set is not greater than the second set.
 * @param a The set that we hypothesize as being a proper superset
 * @param b TThe set for which we want to test if it is a proper subset
 */
export function isProperSuperset<T>(a: Set<T>, b: Set<T>): boolean

/**
 * Returns the union of all the supplied sets.
 * 
 * This is just a named function to initialize a new set via ES6's rest-spread.
 * @param sets parameter of multiple sets
 */
export function union<T>(...sets: Set<T>[]): Set<T>;

/**
 * Returns the intersection of all the supplied sets.
 * @param sets parameter of multiple sets
 */
export function intersect<T>(...sets: Set<T>[]): Set<T>

/**
 * Returns the set difference between the first and second set.
 * 
 * That is, derive a new set where, elements in the resulting set are also in
 * the first set  (`a`), but not in the second set (`b`).
 * @param a The set from which we want to derive a new set, but with some
 *   elements removed
 * @param b The set that will determine which elements to remove
 */
export function difference<T>(a: Set<T>, b: Set<T>): Set<T>
