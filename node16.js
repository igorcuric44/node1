const {readFile}=require('fs');

console.log('started a first task');


readFile('./folder/first.txt','utf8',(err,result)=>
{ 
	if(err) {
		console.log(err);
		return;
	}
	
	console.log(result);
	console.log('complated first task');
})

console.log('starting next task');
	
	
	
	


