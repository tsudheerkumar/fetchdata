// var express=require(express)
// var app = express();


// app.listen(3000,()=>{
//     console.log("App is listening on 3000")
// });



//https://interview.adpeai.com/api/v2/get-task

//This endpoint will provide you with an id and an array of transactions data.


//Get all the transactions of last year's top earner. This means find the employee with the highest sum total of amount within the prior calendar year. Prior calendar year means, if it is currently 2022, we want only to consider transactions in 2021.
//With last year's top earner's transactions get the transactionIDs where the type is alpha.

//highest sum total of amount within the prior calendar year


function fetchData(cb){
    fetch('https://interview.adpeai.com/api/v2/get-task')
    .then((res) => res.json())
    .then((data)=>{
        cb(data.transactions);
    })
}

function findLastYearTopEarner(data){
    console.log('Sudheer findLastYearTopEarner',data)
    let newData = data.sort((a,b)=>{
        if(a.amount > b.amount){
            return -1;
        }else if(a.amount < b.amount){
            return 1;
        }else{
            return 0;
        }

    })
    console.log("Result",newData[0].transactionID) 
}
let fetchedResult = fetchData(findLastYearTopEarner);

  

