const os=require('os');

// ifo about current user

const user=os.userInfo();

console.log(user);

// method returns the system uptime in seconds

console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS={
	name:os.type(),
	release: os.release(),
	totalMem: os.totalmem(),
	freeMem: os.freemem(),
	}

console.log(`The name is ${currentOS.name}\nThe release is ${currentOS.release}\nThe totalMem is ${currentOS.totalMem}\nThe freeMem is ${currentOS.freeMem}\n`);

console.log("");

console.log(currentOS);


