## Functions

<dl>
<dt><a href="#setsEqual">setsEqual(a, b)</a> ⇒ <code>boolean</code></dt>
<dd><p>Compares two sets for their equality.</p>
</dd>
<dt><a href="#orderedSetsEqual">orderedSetsEqual(a, b)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if two sets are equal, not just in terms of existence, but also
in their ordering.</p>
<p>This differs from <code>setsEqual</code> in that the order matters, when checking for
equality.</p>
<p>The rationale for this function is that all sets in JavaScript are
technically ordered sets. Not only will JavaScript developers want to know if
two sets are equal by content, but also equal in ordering of said content.</p>
</dd>
<dt><a href="#isSubset">isSubset(a, b)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if the first set is a subset of the second set.</p>
</dd>
<dt><a href="#isProperSubset">isProperSubset(a, b)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if the first set is a proper subset of the second set. That is,
the size of the first set must be less than the second set, and all elements
in the first set must also be in the second set.</p>
<p><code>isProperSubset</code> differs from <code>isSubset</code> in that if both the first set and
second set are equal, then false is returned, since the size of the first
set is not less than the second set.</p>
</dd>
<dt><a href="#isSuperset">isSuperset(a, b)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if the first set is a superset of the second set.</p>
</dd>
<dt><a href="#isProperSuperset">isProperSuperset(a, b)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if the first set is a proper superset of the second set. That is,
the size of the first set must be greater than the second set, and all
elements in the second set must also be in the first set.</p>
<p><code>isProperSuperset</code> differs from <code>isSubset</code> in that if both the first set and
second set are equal, then fals is returned, since the size of the first
set is not greater than the second set.</p>
</dd>
<dt><a href="#union">union(...sets)</a> ⇒ <code>Set</code></dt>
<dd><p>Returns the union of all the supplied sets.</p>
<p>This is just a named function to initialize a new set via ES6&#39;s rest-spread.</p>
</dd>
<dt><a href="#intersect">intersect(...sets)</a> ⇒ <code>Set</code></dt>
<dd><p>Returns the intersection of all the supplied sets.</p>
</dd>
<dt><a href="#difference">difference(a, b)</a> ⇒ <code>Set</code></dt>
<dd><p>Returns the set difference between the first and second set.</p>
<p>That is, derive a new set where, elements in the resulting set are also in
the first set  (<code>a</code>), but not in the second set (<code>b</code>).</p>
</dd>
</dl>

<a name="setsEqual"></a>

## setsEqual(a, b) ⇒ <code>boolean</code>
Compares two sets for their equality.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>Set</code> | The first set to compare |
| b | <code>Set</code> | The second set to compare |

<a name="orderedSetsEqual"></a>

## orderedSetsEqual(a, b) ⇒ <code>boolean</code>
Determines if two sets are equal, not just in terms of existence, but also
in their ordering.

This differs from `setsEqual` in that the order matters, when checking for
equality.

The rationale for this function is that all sets in JavaScript are
technically ordered sets. Not only will JavaScript developers want to know if
two sets are equal by content, but also equal in ordering of said content.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>Set</code> | The first set to compare |
| b | <code>Set</code> | The second set to compare |

<a name="isSubset"></a>

## isSubset(a, b) ⇒ <code>boolean</code>
Determines if the first set is a subset of the second set.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>Set</code> | The set that we hypothesize as being a subset |
| b | <code>Set</code> | The set for which we want to test if it is a superset |

<a name="isProperSubset"></a>

## isProperSubset(a, b) ⇒ <code>boolean</code>
Determines if the first set is a proper subset of the second set. That is,
the size of the first set must be less than the second set, and all elements
in the first set must also be in the second set.

`isProperSubset` differs from `isSubset` in that if both the first set and
second set are equal, then false is returned, since the size of the first
set is not less than the second set.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>Set</code> | The set that we hypothesize as being a proper subset |
| b | <code>Set</code> | The set for which we want to test if it is a proper superset |

<a name="isSuperset"></a>

## isSuperset(a, b) ⇒ <code>boolean</code>
Determines if the first set is a superset of the second set.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>Set</code> | The set that we hypothesize as being a superset |
| b | <code>Set</code> | The set for which we want to test if it is a subset |

<a name="isProperSuperset"></a>

## isProperSuperset(a, b) ⇒ <code>boolean</code>
Determines if the first set is a proper superset of the second set. That is,
the size of the first set must be greater than the second set, and all
elements in the second set must also be in the first set.

`isProperSuperset` differs from `isSubset` in that if both the first set and
second set are equal, then fals is returned, since the size of the first
set is not greater than the second set.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>Set</code> | The set that we hypothesize as being a proper superset |
| b | <code>Set</code> | TThe set for which we want to test if it is a proper subset |

<a name="union"></a>

## union(...sets) ⇒ <code>Set</code>
Returns the union of all the supplied sets.

This is just a named function to initialize a new set via ES6's rest-spread.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| ...sets | <code>Array.&lt;Set&gt;</code> | parameter of multiple sets |

<a name="intersect"></a>

## intersect(...sets) ⇒ <code>Set</code>
Returns the intersection of all the supplied sets.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| ...sets | <code>Array.&lt;Set&gt;</code> | parameter of multiple sets |

<a name="difference"></a>

## difference(a, b) ⇒ <code>Set</code>
Returns the set difference between the first and second set.

That is, derive a new set where, elements in the resulting set are also in
the first set  (`a`), but not in the second set (`b`).

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>Set</code> | The set from which we want to derive a new set, but with some   elements removed |
| b | <code>Set</code> | The set that will determine which elements to remove |

