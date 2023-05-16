const db=require('./db-config');

module.exports={
    findsoru,
    users
};


function findsoru(){
    return db('soru');
}
function users(){
    return db('users')
}