const {readFile,writeFile}=require('fs').promises;

/*
const util=require('util');
const readFilePromise=util.promisify(readFile);
const writeFilePromise=util.promisify(writeFile);
*/




const start=async()=>
{
	try{
	const first=await readFile('./folder/first.txt','utf8');
	const second=await readFile('./folder/second.txt','utf8');
	await writeFile('./folder/result-mind-grenade1.txt',`This is awesome ${first} ${second}`,{flag:'a'});
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
