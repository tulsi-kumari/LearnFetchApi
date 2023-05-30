// fetch('http://api.cryptonator.com/api/ticker/btc-usd')
//    .then((res)=>{
//     console.log("Response,Waiting to parse ",res)
//     return res.json()
//    })
//    .then(data=>{
//       console.log("Data Parsed",data)
//       console.log(data.ticker.price)
//       //if want to make another api request after this just return another fetch here
//       //and keep chaining .then
//       //eg:
//       //return fetch("url.com") and so on
//    })
//    .catch((e)=>{
//     console.log("OH NO! ERROR!",e)
//    })

const fetchBitcoinPrice =async()=>{
   try{
      const res=await fetch('http://api.cryptonator.com/api/ticker/btc-usd')
      const data=await res.json();
      console.log(data.ticker.price)
   }catch(e){
      console.log("something went wrong")
   }
}