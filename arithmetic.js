const sum = (a,b)=>{
   if (typeof a !== "number" || typeof b !== "number"){
       return "must be numbers";
   }
    return a+b;
};
module.exports = {sum};