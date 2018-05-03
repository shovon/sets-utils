const test = require('ava');

const setsUtils = require('.');

test('setsEqual', t => {
  const a = new Set([ 1, 2, 3, 4 ]);
  const b = new Set([ 2, 4, 3, 1 ]);
  const c = new Set([ 2, 3, 4, 1, 5 ]);
  const d = new Set([ 1, 2, 3, 5 ]);

  t.true(
    setsUtils.setsEqual(a, b),
    'Two sets, regardless of insertion or read order, are always equal.'
  );

  t.false(
    setsUtils.setsEqual(a, c),
    'Supersets/subsets are not equal to one another.'
  );

  t.false(
    setsUtils.setsEqual(a, d),
    'Sets with set differences are not equal to one another'
  );

});

test('orderedSetsEqual', t => {
  const a = new Set([ 1, 2, 3, 4 ]);
  const b = new Set([ 1, 2, 3, 4 ]);
  const c = new Set([ 2, 4, 3, 1 ]);

  t.true(
    setsUtils.orderedSetsEqual(a, b),
    'Two sets, where their element ordering are the same, are always equal.'
  );

  t.false(
    setsUtils.orderedSetsEqual(a, c),
    'Two sets with same elements, but differing read ordering, are never equal.'
  );
});

test('isSubset', t => {
  const a = new Set([ 1, 2, 3, 4 ]);
  const b = new Set([ 1, 2, 3, 4 ])
  const c = new Set([ 2, 4, 1, 3 ]);
  const d = new Set([ 2, 4, 1 ]);
  const e = new Set([ 2, 4, 5 ]);

  t.true(
    setsUtils.isSubset(a, b),
    'Two sets that are equal (in ordering), are subsets of one-another'
  );

  t.true(
    setsUtils.isSubset(a, c),
    'Two sets that are equal, regardless of ordering, are subsets of one-another'
  );

  t.true(
    setsUtils.isSubset(d, a),
    'A subset is a subset; there\'s nothing else to it'
  );

  t.false(
    setsUtils.isSubset(a, d),
    'Regardless if the left-hand-side has a smaller size than the right-hand-side, the left-hand-side is not a subset of the right-hand-side, if elements in left-hand-side is not in the right-hand-side'
  );

  t.false(
    setsUtils.isSubset(a, e),
    'Proper supersets are not subsets'
  );
});

test('isProperSubset', t => {
  const a = new Set([ 1, 2, 3, 4 ]);
  const b = new Set([ 1, 2, 3, 4 ])
  const c = new Set([ 2, 4, 1, 3 ]);
  const d = new Set([ 2, 4, 1 ]);
  const e = new Set([ 2, 4, 5 ]);

  t.false(
    setsUtils.isProperSubset(a, b),
    'Equal sets are not subsets, regardless of ordering'
  );

  t.false(
    setsUtils.isProperSubset(a, c),
    'Equal sets are not subsets, regardless of ordering'
  );

  t.true(
    setsUtils.isProperSubset(d, a),
    'Equals are not proper subset'
  );
});

test('isSuperset', t => {
  const a = new Set([ 1, 2, 3, 4 ]);
  const b = new Set([ 1, 2, 3, 4 ])
  const c = new Set([ 2, 4, 1, 3 ]);
  const d = new Set([ 2, 4, 1 ]);
  const e = new Set([ 2, 4, 5 ]);

  t.true(
    setsUtils.isSuperset(a, b),
    'Two sets that are equal (in ordering), are supersets of one-another'
  );

  t.true(
    setsUtils.isSuperset(a, c),
    'Two sets that are equal, regardless of ordering, are supersets of one-another'
  );

  t.true(
    setsUtils.isSuperset(a, d),
    'A superset is a superset; there\'s nothing else to it'
  );

  t.false(
    setsUtils.isSuperset(d, a),
    'Regardless if the left-hand-side has a larger size than the right-hand-side, the left-hand-side is not a subset of the right-hand-side, if elements in left-hand-side is not in the right-hand-side'
  );

  t.false(
    setsUtils.isSuperset(a, e),
    'Proper supersets are not subsets'
  );
});

test('isProperSuperset', t => {
  const a = new Set([ 1, 2, 3, 4 ]);
  const b = new Set([ 1, 2, 3, 4 ])
  const c = new Set([ 2, 4, 1, 3 ]);
  const d = new Set([ 2, 4, 1 ]);
  const e = new Set([ 2, 4, 5 ]);

  t.false(
    setsUtils.isProperSuperset(a, b),
    'Two sets that are equal are not proper supersets of one-another'
  );

  t.false(
    setsUtils.isProperSuperset(a, c),
    'Two sets that are equal are not supersets of one-another, regardless of ordering'
  );

  t.true(setsUtils.isProperSuperset(a, d));
});

test('union', t => {
  const a = new Set([ 1, 2, 3 ]);
  const b = new Set([ 2, 4, 5, 10 ]);
  const c = new Set([ 6, 7, 9 ]);
  const d = new Set([ 8 ]);
  const e = new Set([ 1, 2 ]);
  const f = new Set([]);

  t.true(
    setsUtils.setsEqual(
      new Set([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]),
      setsUtils.union(a, b, c, d, e, f)
    ),
    'Unions should successfully dedup'
  );

  t.true(
    setsUtils.setsEqual(
      new Set([ 1, 2, 3 ]),
      setsUtils.union(a, e)
    ),
    'A subset union a superset should yield the superset. no questions asked'
  );

  t.true(
    setsUtils.setsEqual(
      new Set([ 1, 2, 3 ]),
      setsUtils.union(a, f)
    ),
    'A set union the null set is a no-op'
  );

});

test('intersect', t => {
  const a = new Set([ 1, 2, 3 ]);
  const b = new Set([ 2, 4, 5, 10 ]);
  const c = new Set([ 6, 7, 9 ]);
  const d = new Set([ 8 ]);
  const e = new Set([ 1, 2 ]);
  const f = new Set([]);

  t.true(
    setsUtils.setsEqual(
      new Set([ 2 ]),
      setsUtils.intersect(a, b)
    ),
    'Filter out all fields that are not common in neither the first, nor the second field'
  );

  t.true(
    setsUtils.setsEqual(
      new Set([ ]),
      setsUtils.intersect(a, f)
    ),
    'Intersection with a null set gives us with a null set'
  );

  t.true(
    setsUtils.setsEqual(
      new Set([]),
      setsUtils.intersect(c, d)
    ),
    'The intersection between two disjoint sets is the null set'
  );

  t.true(
    setsUtils.setsEqual(
      new Set([ 2 ]),
      setsUtils.intersect(a, b, e)
    ),
    'People love venn diagrams. If this does not get a venn diagram, then, well, people are not happy'
  );
});

test('difference', t => {
  const a = new Set([ 1, 2, 3, 4 ]);
  const b = new Set([ 2, 4, 3, 1 ]);
  const c = new Set([ 1, 2, 3 ]);
  const d = new Set([ 1, 5, 6, 4 ])

  t.true(
    setsUtils.setsEqual(
      new Set([  ]),
      setsUtils.difference(a, b)
    ),
    'The set difference between two equivalent sets should yield the null set'
  );

  t.true(
    setsUtils.setsEqual(
      new Set([  ]),
      setsUtils.difference(a, b)
    ),
    'The set difference between a subset and a superset yields the null set'
  );

  t.true(
    setsUtils.setsEqual(
      new Set([ 4 ]),
      setsUtils.difference(a, c)
    ),
    'The set difference between a superset and a subset yields all elements in the superset, without the subset'
  );

  t.true(
    setsUtils.setsEqual(
      new Set([ 5, 6 ]),
      setsUtils.difference(d, b)
    ),
    'Get back all elements in the first set that are not in the second set'
  );
});