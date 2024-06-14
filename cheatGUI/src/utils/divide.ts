/** divide a string into parts */
export default function divide (target : string, amount : number) : Array<string> {

    let output : Array<string> = new Array;
    let parts : number = Math.floor(target.length / amount);
    let start : number = 0;
 
    while (start < target.length) {
        output.push(target.substring(start, start+parts));
        start += parts;
    }

    return output;
}
