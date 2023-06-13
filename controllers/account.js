const Account = require('../models/account')
exports.account_details_get = async (req,res)=>{
    //res.send(' Here is account/details')
    //Find account balance of the user id to expand its details
   
    try{
      const account =await Account.find({ user: [req.user._id] })
       res.render('account/details',{account})}
    catch(error){
      console.log(error)
    }

}

exports.account_balance_post = async (req,res)=>{
      //Take account details to update/delete account
      try
      {
        console.log(req.body);
          await Account.findByIdAndUpdate(req.body.id,{$set:{balance:req.body.balance}})
          //another way
          //await Book.findByIdAndUpdate(req.query.id,req.body)
          return res.redirect('/account/details')
      }
      catch(e)
      {
          console.log(`Somthing went wrong!!${e.message}`)
          res.send(e.message)
      }
      



    
  

            // const balanceByMonth = {};
    
      //     transactions.forEach(transaction => {
      //       const date = new Date(transaction.date);
      //       const year = date.getFullYear();
      //       const month = date.getMonth() + 1;
      //       const key = `${year}-${month.toString().padStart(2, '0')}`;
        
      //       if (!balanceByMonth[key]) {
      //         balanceByMonth[key] = { balance: 0, sum: 0 };
      //       }
        
      //       balanceByMonth[key].balance += transaction.amount;
      //       balanceByMonth[key].sum += transaction.amount;
      //     });
        
      //     return balanceByMonth;

    
        }



        exports.account_delete_post = async (req, res) => {
          try {
              // Try to execute this code
              console.log(req.query.id)
              await Account.findByIdAndDelete(req.query.id)
              return res.redirect('/user/profile')
          } catch (error) {
              // Execute this if there is an error
              console.log(error.message)
              res.send(error.message)
          } finally {
              // Execute this code no matter what
              console.log('We are in the finally block')
          }
      }
   
        


      
  
    


// function getBalanceByMonth(transactions) {
//     const balanceByMonth = {};
    
//     transactions.forEach(transaction => {
//       const date = new Date(transaction.date);
//       const year = date.getFullYear();
//       const month = date.getMonth() + 1;
//       const key = `${year}-${month.toString().padStart(2, '0')}`;
  
//       if (!balanceByMonth[key]) {
//         balanceByMonth[key] = { balance: 0, sum: 0 };
//       }
  
//       balanceByMonth[key].balance += transaction.amount;
//       balanceByMonth[key].sum += transaction.amount;
//     });
  
//     return balanceByMonth;
//   }


