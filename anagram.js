function validAnagram(str1, str2){
    
    if (typeof str1 != "string" || typeof str2 != "string") return false;
    
    if (str1.length != str2.length) return false;
    [str1, str2] = [str1.toLocaleLowerCase(), str2.toLocaleLowerCase()]
    let frequencyStr1 = {}
    let frequencyStr2 = {}
    for (let char of str1) {
        frequencyStr1[char] = (frequencyStr1[char] || 0) + 1
    }
    for (let char of str2) {
        frequencyStr2[char] = (frequencyStr2[char] || 0) + 1
    }
    for (let char in frequencyStr1) {
        if (frequencyStr1[char] != frequencyStr2[char]) {
            return false
        }
    }
    return true

}

//console.log(validAnagram('', '') )// true
//console.log(validAnagram('aaz', 'zza')) // false
console.log (validAnagram('anagram', 'nagaram')) // true
//console.log(validAnagram("rat","car")) // false) // false
//console.log(validAnagram('awesome', 'awesom')) // false
//console.log(validAnagram('qwerty', 'qeywrt')) // true
//console.log(validAnagram('texttwisttime', 'timetwisttext')) // true
//console.log(validAnagram('rail safety', 'fairy tales')) // true
//console.log(validAnagram('Hi there', 'Bye there'))


