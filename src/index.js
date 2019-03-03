/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  //variable stores the number of triangles
  let count = 0;
  //array validation loop
  for (let i = 0; i < preferences.length; i++) {//
    //variable that contains the position of the loved (1,2,3) one in the array
    let a = preferences[i] - 1;
    let b = preferences[a] - 1;
    let c = preferences[b] - 1;
    //check if Spichonee likes himself
    if (i != a) {
      //if Spichonee loves another Spichonee, check Spichonee 3 if Spichonee loves 1?
      if (c == i) {
        //in the presence of a triangle we increase the variable by 1
        count++;
      }
    }
  }
  //each triangle is repeated 3 times, the result is divided by 3
  return count/3;
};
