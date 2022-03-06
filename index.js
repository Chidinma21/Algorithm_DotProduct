// Write a algorithm, called dot_product which calculates in the variable ps,
// the dot(scalar) product of v1 and v2 (v1 and v2 are vectors of IR)
function dot_product(v1, v2) {
  let ps = 0;
  for (let i = 0; i < v1.length; i++) {
    ps += v1[i] * v2[i];
  }
  return ps;
}
console.log(dot_product([1, 2], [3, 4]));

// Write an algorithm which determines, for n pairs of given vectors, whether two vectors of given IR are orthogonal,
// by calling the algorithm defined in the previous question. The dot product of two orthogonal vectors is zero.
function isOrthogonal(v1, v2) {
  if (dot_product(v1, v2) === 0) {
    return `v1 and v2 are orthogonal`;
  } else {
    return `v1 and v2 are NOT orthogonal`;
  }
}
console.log(isOrthogonal([1, -1], [3, 3]));
