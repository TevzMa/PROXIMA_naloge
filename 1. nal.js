let text = '{ "a": 100, "b": 500, "c": 1}'
const data = JSON.parse(text)

console.log(izrebaj(data))

function izrebaj(data){
    let returnVal = 0
    let combined = 0

    for(let key in data)
        combined += data[key]

    let st = Math.floor(Math.random() * combined)

    let sum = 0;
    for(let key in data){
        if(data[key] + sum > st){
            returnVal = key
            break
            }
        else sum += data[key]
    }

    return returnVal
}

//porabljen cas: 30min