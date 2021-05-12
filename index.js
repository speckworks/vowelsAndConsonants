function vowelsAndConsonants(s) {
    s = s.toLowerCase();
    console.log("S", s)
    let vowels = '';
    let consonants = ''

    for(let i in s){
        if( s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u' ){
            vowels += s[i];
            console.log(vowels);
        } else if( s[i] != 'a' && s[i] != 'e' && s[i] != 'i' && s[i] != 'o' && s[i] != 'u'){
            consonants += s[i]
            }
      
    }
    
    for(let i in vowels){
        console.log(vowels[i]);
    }
    
    for(let i in consonants){
        console.log(consonants[i]);
    }
    
}



vowelsAndConsonants('aaAAACBBDcddeeeff');