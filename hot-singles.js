function hotSingles(arr1, arr2) {
    var newArr = [];  
    for(var i=0;i<arr1.length;i++)
    {
      if(!newArr.includes(arr1[i]) && !arr2.includes(arr1[i]))
      {
        newArr.push(arr1[i]);
      }
    }
    for(var i=0;i<arr2.length;i++)
    {
      if(!newArr.includes(arr2[i]) && !arr1.includes(arr2[i]))
      {
        newArr.push(arr2[i]);
      }
    }
    return newArr;
  }
  module.exports = { hotSingles };
  