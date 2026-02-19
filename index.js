const express=require('express');
const day2app= express();
const port=process.env.PORT || 3000;


// 1st route for (/)
day2app.get('/',(req,res)=>{
    res.json({message:'Hello World!'});
});

// 2nd route for(/about)
day2app.get('/about',(req,res)=>{
    res.json({
        name:'RESTful API',
        author:'xoxo_firegirl_dmz',
        project:'GDGoC30DayChallenge,Day 2',
        description:'RESTful Design and Routes for 3 endpoints'
    });
});

//3rd route for(/status)
day2app.get('/status',(req,res)=>{
    res.json({status:'up and ready'});
});

day2app.listen(port,()=>{
    console.log('server is running at http://localhost:${port}');
});