function indexOfIgnoreCase(s1, s2) {
  // write your code here
	if(!s2.includes(s1)){
		return -1;
	}else{
		for(let index in s2){
			return index;
		}
	}
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
