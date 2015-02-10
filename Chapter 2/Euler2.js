var i=1;
var x = 0;
var sum = 0;
var total=0;
while (i<4000000){
    
   sum=i+x;
   x=i;
   i=sum;
   if(sum%2===0){total=total+sum}
   

	
	}
    console.log(total)