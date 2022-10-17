const http=require('http');

const server=http.createServer((req,res)=>
{
if(req.url==='/')
{
	res.end('Welcome to our home page');
}
if(req.url==="/about")
{
	res.end('This is our short history');
}
res.end(`<h1>Oops!</h1>
<p>We cat seem to find the page zou are looing for</p>
<a href="/" target="_self">Back home</a>`);
})

server.listen(5000);

