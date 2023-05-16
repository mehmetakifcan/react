const express =require('express');
const cors = require('cors');
const server=express();
const gelenveri=require('./data-model');
server.use(cors());
server.use(express.json());
server.get('/',(req,res)=>{
  gelenveri.findsoru().then(gelen=>{
    res.status(200).json(gelen);
}).catch(error=>{
    next({
        statusCode:500,
        errorMassage:"Sorular alinirken hata olustu",
        error,
    })
})
});
server.post('/signup',async(req,res)=>{
    const{username,password}=req.body
    const data={
username:username,
password:password
    }
    console.log(data)
    try{
        const check=await gelenveri.users().insert({kullaniciadi:username,sifre:password})
        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            
        }
    }
    catch(e){
console.log(e)
    }
})
server.post('/signin',async(req,res)=>{
    const{username,password}=req.body
    const data={
username:username,
password:password
    }

    try{
        const check=await gelenveri.users().fromRaw(`users where kullaniciadi='${username}' and sifre='${password}'`)
        console.log(check)
        if(check.length>=1){
            return res.status(200).json()
            
        }
        else{
            return res.status(404).json()
        }
    }
    catch(e){
console.log(e)
    }
})
server.listen(5001,()=>{
    console.log("localhosta gelen istekler dinleniyor...")
})