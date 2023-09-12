function firstNonRepeatedChar(str) {
 // Write your code here
	let n=str.length;
	
	for(let i=0;i<n;i++){
		 let char = str[i];
	    if (str.indexOf(char) == str.indexOf(char)) {
	      return char;
	    }
			
	}
	return null;
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
