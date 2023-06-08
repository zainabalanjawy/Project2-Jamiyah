exports.signUpPage = (req, res) => {
  res.render("auth/signup");
};

exports.signInPage = (req, res) => {
  res.render("auth/signin");
};

exports.signout = (req,res)=>
{
  //signout from system
  console.log('Signed out!')
  res.redirect('/')
}

exports.forget_password_get = (req,res)=>
{
  //res.render("auth/forget_password");
}

exports.forget_password_post = (req,res)=>
{
  //Reset password if the security question is correct
}