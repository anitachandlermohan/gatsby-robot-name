import { stringify } from "querystring";

class RobotName{
    
    static namesList:Array<string> = new Array(); 
    name:string; 
    constructor(){
        this.name = this.registerName();
    }
    generateName(){
    let name : string;
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let randomNum = Math.floor(Math.random()*(chars.length-1))
    let randomNum2 = Math.floor(Math.random()*(chars.length-1))
    let randomNum3 = Math.floor(Math.random()*1000)
    name = chars[randomNum];
    name = name.concat(chars[randomNum2])
   
    name = name.concat(randomNum3.toString())
    console.log("\n\n\n")
    console.log(name);
    return name;
    }

    resetName(){
        this.name = this.registerName();

    }
    registerName(){
        let name : string;
        name = this.generateName();
        while(RobotName.namesList.some((nameInList)=> nameInList === name)){
            name = this.generateName();

        }
        
        RobotName.namesList.push(name);
        return name;

    }

    
    
}
export default RobotName; 


