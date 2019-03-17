/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
    let length = preferences.length;
    let count = 0;
    for (let i = 0; i<length; i++) {
        let A = preferences[i] - 1;
        if (A == i) continue;
        let B = preferences[A] - 1;
        if (A == B) continue;
        let C = preferences[B] - 1;
        if (C == B) continue;
        if (C == i) {
            count++;
        }
    }
    return count / 3;
};
