function solve (input) {

    let v = Number(input[0]); 
    let p1 = Number(input[1]); 
    let p2 = Number(input[2]); 
    let h = Number(input[3]); 

    let pipeOneCapacity = p1 * h; 
    let pipeTwoCapacity = p2 * h; 
    let totalCapFilled = pipeOneCapacity + pipeTwoCapacity; 

    let percentageFilledP1 = (pipeOneCapacity / totalCapFilled * 100).toFixed(2); 
    let percentageFilledP2 = (pipeTwoCapacity / totalCapFilled * 100).toFixed(2); 
    let percentFilled = (totalCapFilled / v * 100).toFixed(2); 

    if (totalCapFilled <= v) {
        console.log(`The pool is ${percentFilled}% full. Pipe 1: ${percentageFilledP1}%. Pipe 2: ${percentageFilledP2}%.`)
    } else {
        litresAbove = pipeOneCapacity + pipeTwoCapacity - v
        console.log(`For ${h} hours the pool overflows with ${litresAbove.toFixed(2)} liters.`)
    }

    
}

solve ([100, 100, 100, 2.5])