async function start() {
    return await Promise.resolve('async is working');
}

start().then(console.log);
const unsused = 24;
console.log('unsused', unsused)

class Util {
    static id = Date.now()
}

console.log('Util.it', Util.it)


import('lodash').then( _=> {
    console.log('Lodash', _.random(0, 42, true))
})
