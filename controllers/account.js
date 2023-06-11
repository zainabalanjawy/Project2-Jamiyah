exports.account_details_get = (req,res)=>{
    //res.send(' Here is account/details')
    //Find account balance of the user id to expand its details
    res.render('account/details')

}

exports.account_details_post = (req,res)=>{
    //Take account details to update/delete account
    
}

exports.account_delete = async (req, res) => {
    console.log(req.query.id)
    try {
        // Try to execute this code
        await account.findByIdAndDelete(req.query.id)
        return res.redirect('/account/index')
    } catch (error) {
        // Execute this if there is an error
        console.log(error.message)
        res.send(error.message)
    } finally {
        // Execute this code no matter what
        console.log('We are in the finally block')
    }
}


exports.account_detail_get = async (req, res) => {
    try {
        const account = await account.findById(req.query.id)
        res.render('account/detail', {account} )
    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    }
}



exports.account_edit_get = async (req, res) => {
    try {
        const account = await account.findById(req.query.id)
        res.render('account/edit', {account})
    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    }
}

exports.account_edit_post = async (req, res) => {
    try {
        console.log(req.body.id)
        await account.findByIdAndUpdate(req.body.id, req.body)
        res.redirect('/account/index')
    } catch (error) {
        console.log(error.message)
    }
}




