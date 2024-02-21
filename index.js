const { verify } = require('./verify');
const {encrypt}=require('./encrypt');


function hash(data){
    return encrypt(data);
}

function check(hasheddata,data){
    return verify(hasheddata,data);
}





module.exports={hash,check};