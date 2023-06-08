exports.jamiyah_home_get = (req,res)=>{
    res.send(' Here is jamiyah/home')
    //res.render('jamiyah/home')
}

exports.jamiyah_details_get = (req,res)=>{
    res.send(' Here is jamiyah/details')
    //Find jamaya of the id passed to url and expand its details

    //res.render('jamiyah/details')
}

exports.jamiyah_create_get = (req,res)=>{
    res.send(' Here is jamiyah/create')
    //res.render('jamiyah/create')
}

exports.jamiyah_details_post = (req,res)=>{
    //Find jamaya of the id passed to url and update/delete its details
}

exports.jamiyah_create_post = (req,res)=>{
   //Save the data of jamiyah in DB
}
