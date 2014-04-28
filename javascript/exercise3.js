
var i;
var j;
var s;
s='\n';



for(i=1;i<=10;i++){
	for(j=1;j<=10;j++){
		if(j<10){ 
			if(i===j)
				s+= 1 +',\t'; 
			else
				s+= 0 +',\t';
			}
		else{ 
			if(i===j)
				s+= 1 +'\t';
			else s+= 0 +'\t';
			}
		}
	s+='\n';
}
console.log(s)