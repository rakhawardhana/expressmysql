const nodemailer = require('nodemailer')


const transporter = nodemailer.createTransport(
    {
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: 'rakhagustiwardhana@gmail.com',
            clientId: '283642492303-e430hsl3evil5liopp2vhlbuhso6prqf.apps.googleusercontent.com',
            clientSecret: 'HzzOU749fqws0S8MtjfTODEO',
            refreshToken: '1/nNHhWDpiINmddZws36hvhsC7fOBPOglzBNWVVpWnl8KzYPfGo3H_sR-fSp_qMt7D'
        }

    }
)


const mail = {
    from: 'Rakha Wardhana <rakhagustiwardhana@gmail.com>',
    to: 'rochafi.dev@gmail.com',
    subject: 'Hello from the other side',
    html: '<h1>HELLO, ITS MEH</h1>'
}

transporter.sendMail(mail, (err, result) => {

        if(err) 
            return console.log(err.message)
        
        
        console.log("sukses brok")
        
})

