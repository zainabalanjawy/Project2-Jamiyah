const Jamiyah = require('../models/jamiyah')

exports.jamiyah_home_get = async (req,res)=>{
    //res.send(' Here is jamiyah/home')
    try{
        const jamiyahs = await Jamiyah.find(req.user)

        res.render('jamiyah/home',  { jamiyahs })
    } catch (error) {
        console.log(error.message)
        res.send('An error occurred')
    }
}

exports.jamiyah_create_get = (req,res)=>{
    //res.send(' Here is jamiyah/create')
    res.render('jamiyah/create')
}

exports.jamiyah_create_post = (req, res) => {
    console.log("here")
    console.log(req.body)
    const jamiyah = new Jamiyah(req.body)
    jamiyah.participants = req.body.id
    jamiyah.save()
    .then(() => {
        console.log('your Jamiyah has been saved')
        res.redirect('/jamiyah/home')
    })
    .catch((err) => {
        console.log('an error occurred', err)
    })
}


exports.jamiyah_details_get = async (req,res)=>{
    //res.send(' Here is jamiyah/details')
    //Find jamaya of the id passed to url and expand its details
    try{
        const jamiyah = await Jamiyah.findById(req.query.id)
        console.log(Jamiyah)
    res.render('jamiyah/details', {jamiyah})
    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    }
}