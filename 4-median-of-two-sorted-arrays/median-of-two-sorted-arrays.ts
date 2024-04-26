/**
 * Find the median of two sorted arrays.
 *
 * @param number[] first sorted array
 * @param number[] second sorted array
 * @return number the median of the combined sorted arrays
 */
function findMedianSortedArrays(n1: number[], n2: number[]): number {
  const n3: number[] = n1.concat(n2).sort((a, b) => a - b);

  if (n3.length % 2 === 0) {
    return (
      (n3[Math.floor(n3.length / 2 - 1)] + n3[Math.floor(n3.length / 2)]) / 2
    );
  }

  return n3[Math.floor(n3.length / 2)];
}
