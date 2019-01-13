const nodeMailer = require('node-mailer');

const transport = {
    service: "Gmail",
    auth: {

        user: "nick.winkler1@gmail.com",
        pass: "Rhinolax18!"

    }

}

const smtpTransport = nodeMailer.createTransport(transport);


const options = {
    from: "Nick's agency<nick.winkler1@gmail.com>",
    to: "cathy_winkler@hotmail.com",
    subject: "Test",
    html: "<h1>Hi Mom just testing a contact form out</h1>",
    attachments: [ 
        {
            filename: "",
            path: ""
        }                                             //You can attach virtually anything you want
                                                                //Just put each attachment inside and object in the list
    ]
};

smtpTransport.sendMail(options, (error, info)=> {

    if(error){
        console.log(error);

    }
    else {
        console.log(info);
    }

});