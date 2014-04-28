
var i;
var j;
var s;
s='\n';

for(i=1;i<=10;i++){
		for(j=1;j<=10;j++){
		if(j<10) 
			s+= i*j +',\t';
		else 
			s+= i*j +'\t';
		}
	s+='\n'; }
console.log(s)