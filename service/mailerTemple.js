const Keys = require('../config/keys');
module.exports= ({body,id})=>{
    return `
    <html>
    <body>
      <div style="text-align: center">
      <h3>Please Provide Feedback</h3>
      <p>${body}</p>
         <div>
         <a href="${Keys.redirectDomain}/${id}/yes">Yes</a>
         </div>
         <div>
         <a  href="${Keys.redirectDomain}/${id}/no">No</a>
         </div>
      </div>
      <div>
      <h5> thank you</h5>
      <div>
    </body>
    </html>
    `
}