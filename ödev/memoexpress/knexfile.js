module.exports ={
    development:{
        client:"pg",
        connection:{
            database:"sorular",
            user:"postgres",
            password:"SumeyraAkif2001"
        },
        migrations:{
            directory:"./data/migrations"
        },
        seeds:{
            directory:"./data/seeds"
        },
        production:{
            
        }

    }
}