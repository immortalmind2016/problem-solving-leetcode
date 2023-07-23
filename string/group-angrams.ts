//#49

const sort=(s)=>{
  return s.split("").sort().join("")
}

const groupAnagrams=(strs)=>{
  let sorted:string[]=[]
  let map={}

  for(let i=0;i<strs.length;i++){
      sorted.push(sort(strs[i]))
  }

  for(let i=0;i<strs.length;i++){
    map[sorted[i]]=(map[sorted[i]]||[]).concat(strs[i]);
  }

  return Object.values(map)
}
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
