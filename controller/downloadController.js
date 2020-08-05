const s3 = require("../config/s3config");

exports.download = (req, res) => {
  const s3Client = s3.s3Client;
  const params = s3.downloadParams;
  params.Key = req.params.filename;

  s3Client
    .getObject(params)
    .createReadStream()
    .on("error", function (err) {
      res.status(500).json({ error: "Error is  " + err });
    })
    .pipe(res);
};
