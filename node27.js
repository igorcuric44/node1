const {readFile,writeFile}=require('fs');
const util=require('util');
const readFilePromise=util.promisify(readFile);
const writeFilePromise=util.promisify(writeFile);





const start=async()=>
{
	try{
	const first=await readFilePromise('./folder/first.txt','utf8');
	const second=await readFilePromise('./folder/second.txt','utf8');
	await writeFilePromise('./folder/result-mind-grenade.txt',`This is awesome ${first} ${second}`);
	console.log(first,second);
	}catch(error){
	console.log(error);
	}
	
}


start();


/*
getText('./folder/first.txt')
.then(result=>console.log(result))
.catch(err=>console.log(result));
*/

/*
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

*/
