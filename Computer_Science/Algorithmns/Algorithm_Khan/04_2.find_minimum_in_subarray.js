var indexOfMinimum = function(array, startIndex) {
    // Set initial values for minValue and minIndex,
    // based on the leftmost entry in the subarray:  
    var minValue = array[startIndex];
    var minIndex = startIndex;
    for(var step = minIndex + 1; step < array.length; step++ ){
        if(minValue > array[step]){
            minIndex = step;
            minValue = array[step];
        }
    }
    // Loop over items starting with startIndex, 
    // updating minValue and minIndex as needed:
    
    return minIndex;
}; 

var array = [18, 6, 66, 44, 9, 22, 14];   
var index = indexOfMinimum(array, 2);

//  For the test array [18, 6, 66, 44, 9, 22, 14], 
//  the value 9 is the smallest of [..66, 44, 9, 22, 14]
//  Since 9 is at index 4 in the original array, 
//  "index" has value 4
println("The index of the minimum value of the subarray starting at index 2 is " + index + "."  );

Program.assertEqual(index, 4);

Program.assertEqual(indexOfMinimum(array, 0), 1);

Program.assertEqual(indexOfMinimum(array, 5), 6);