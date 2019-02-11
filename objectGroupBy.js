var groupBy = function( dataSet , groupArg) {
    return dataSet.reduce(function(result, item) {
      (result[item[groupArg]] = result[item[groupArg]] || []).push(item);
      return result;
    }, {});
  };
  // describe('groupBy', function() {
  //   it('should work with the example data', function() {
  //     const arr = [
  //       { amount: "100", date: "10/10/2018" },
  //       { amount: "200", date: "10/12/2018" },
  //       { amount: "300", date: "10/10/2018" }
  //     ];
  //     const actual = groupBy(arr, "date");
  //     const expected = {
  //       "10/10/2018": [
  //           { amount: "100", date: "10/10/2018" },
  //           { amount: "300", date: "10/10/2018" }
  //       ],
  //       "10/12/2018": [
  //           { amount: "200", date: "10/12/2018" }
  //       ]
  //     };
  //     assert.deepEqual(actual, expected);
  //   });
  //   it('should work when grouping by a different property', function() {
  //     const arr = [
  //       { amount: "100", date: "10/10/2018" },
  //       { amount: "100", date: "10/12/2018" },
  //       { amount: "300", date: "10/10/2018" }
  //     ];
  //     const actual = groupBy(arr, "amount");
  //     const expected = {
  //       "100": [
  //         { amount: "100", date: "10/10/2018" },
  //         { amount: "100", date: "10/12/2018" }
  //       ],
  //       "300": [
  //         { amount: "300", date: "10/10/2018" }
  //       ]
  //     };
  //     assert.deepEqual(actual, expected);
  //   });
  // });
  
