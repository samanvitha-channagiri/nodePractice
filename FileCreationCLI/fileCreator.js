//1:enter the file name
//2:enter the content

import readLine from 'readline'
import fs from 'fs'
const rl=readLine.createInterface({
    input:process.stdin,
    output:process.stdout
})

const fileCreation=()=>{
    rl.question('Enter your filename:',(filename)=>{
        rl.question("Enter the content for your file:",(content)=>{

            fs.writeFile(`${filename}.txt`,content,(err)=>{
                if(err){
                    console.log("error while writing the file :"+err.message);
                    
                }else{
                    console.log(`File ${filename}.txt`+" created successfully");
                    
                }
              rl.close()

            })

        })

    })
}
fileCreation()