
const RE = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validateEmail = emails =>{
    const invaliedEmails = emails.split(',')
    .map(email => email.trim())
    .filter(email => !RE.test(email));
    
    if(invaliedEmails.length)
    return `invalid e-mails : ${invaliedEmails}`
    return null;
}

export default validateEmail;