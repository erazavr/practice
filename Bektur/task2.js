const twoSun = function (nums, target) {
    let total = [];
    for(let i = 0; i < nums.length;i++){
        for (let j = i + 1; j < nums.length ;j++){
            if (nums[i] + nums[j] === target){
                total.push(i);
                total.push(j)
            }
        }
    }
    return total
};
console.log(twoSun([2,7,11,15],9));