function twoSum(numbers, target) {
  // .
    let map = new Map;
    for (var i = 0; i < numbers.length; i++) {
        let complement = target - numbers[i];
        if (map.has(complement)) {
            return [map.get(complement), i]
        }
        map.set(numbers[i], i);
    }
    
}