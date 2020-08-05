const sendgridmail = require("@sendgrid/mail");

exports.sendEmail = async (req, res) => {
  sendgridmail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: req.body.req.email,
    from: process.env.EMAIL,
    subject: "Text Email",
    text: "This is the dummy email",
    html: "<p>This is the paragraph text for the dummy email</p>",
  };
  try {
    const response = await sendgridmail.send(msg);
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    res.end(JSON.stringify(response));
  } catch (error) {
    console.log(error);
  }
};
