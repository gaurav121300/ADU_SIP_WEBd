const fs = require('fs/promises')

// async function readMyFile(){
//     const data = await fs.readFile('data.txt','utf-8');
//     console.log(data);
// }

// console.log("Welcome");

// readMyFile()

// console.log("Welcome2");

// async function createFile(){
//     await fs.writeFile(
//         'data.txt',
//         'Welcome Students , this is your backend class'
//     );

//     await fs.appendFile(
//         'data.txt',
//         '\nI am the 2nd line'
//     )
//     console.log('file created');
// }

// createFile();

// async function deleteFile(){
//     await fs.unlink('data.txt');
//     console.log("file deleted");
// }

// deleteFile();

// async function createFolder(){
//     await fs.mkdir('users');
// }

// createFolder();
// async function checkFolder(){
// const files = await fs.readdir('./users');  //all file and folder in root directory

// console.log(files);
// }


// checkFolder();

//checking file information

async function checkFile(){
    const stats = await fs.stat('users');
    console.log(stats.size);
    console.log(stats.isFile());
    console.log(stats.isDirectory());
}

checkFile();