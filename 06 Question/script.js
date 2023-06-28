function singleNumber(nums) {
    var res = 0;
    var len = nums.length;
    for (var i = 0; i < len; i++) {
      res ^= nums[i];
    }
    return res;
  };

  const nums = [2,2,1];
  console.log(singleNumber(nums))
