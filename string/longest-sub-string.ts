//problem No.#340
var lengthOfLongestSubstringKDistinct=function(s,k){
    let left=0;
    let right=0;
    const map=new Map()
    let max=0;

    while(right<s.length){
  

      map.set(s[right],(map.get(s[right])||0)+1)
      
      while(map.size>k){

        if(map.get(s[left])>1){
          map.set(s[left],map.get(s[left]-1))
        }else{
          map.delete(s[left])
        }
        left++;
      }

    
      max=Math.max(max,right-left+1)
    

      right++;
    }


    return max
}


console.log(lengthOfLongestSubstringKDistinct("aa",1))

