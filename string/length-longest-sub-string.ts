//#3
var lengthOfLongestSubstring = function(s) {
  let left = 0;
  let right = 0;
  let max = 0;
  let map=new Map()

  while(right<s.length){
    map.set(s[right],(map.get(s[right])||0)+1)
    
    while(map.get(s[right])>1){
      map.set(s[right],(map.get(s[right])||0)-1)
      if(map.get(s[right])==0){
        map.delete(s[right])
      }
      left++;
    }

    max=Math.max(max,map.size)

    right++;
  }

  return max;
};


console.log(lengthOfLongestSubstring("ab"))