const {readFile}=require('fs');

const getText=(path)=>
{
	return new Promise((resolve,reject)=>
	{
	readFile(path,'utf8',(err,data)=>
{	
	if(err){
		reject(err);
	}else{
		resolve(data);
	}
});
	
})

}

/*
getText('./folder/first.txt')
.then(result=>console.log(result))
.catch(err=>console.log(result));
*/

const start=async()=>
{
	try{
	const first=await getText('./folder/first.txt');
	const second=await getText('./folder/second.txt');
	console.log(first,second);
	}catch(error){
	console.log(error);
	}
	
}


start();


