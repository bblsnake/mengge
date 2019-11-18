const nodeMailer = require('nodemailer');
const fs = require('fs');
const juice = require('juice');
const ejs = require('ejs');

const transporter = nodeMailer.createTransport({
    service: 'qq',
    port: 465, //smtp
    secureConnection: true,
    auth: {
     user: '2925141441@qq.com',
     pass: 'wccaqlaxfpkgdejd'
   }
});
const html = fs.readFileSync('./template/index.ejs','utf-8');
const template = ejs.compile(html);
const afterHtml = template({
    userName: 'userName',
})
const css = fs.readFileSync('./template/index.css','utf-8');
// const afterWithInCss = juice(afterHtml);
const afterWithInCss = juice.inlineContent(afterHtml,css);
transporter.sendMail({
    to: '2925141441@qq.com',
    html: afterWithInCss,
    from: '2925141441@qq.com',
    subject: '哈哈哈'
},(err,info) => {
    if(err){
        console.log('邮件出错了',err);
    }
})