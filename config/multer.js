const multer = require("multer");
const crypto = require("crypto");
const path = require("path");

module.exports = {
  // storage: multer.memoryStorage(),

  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, "..", "src", "uploads"));
    },
    filename(request, file, cb) {
      const hash = crypto.randomBytes(6).toString("hex");
      const fileName = `${hash}-${file.originalname}`;

      cb(null, fileName);
    },
  }),

  limits: { fileSIze: 2 * 1024 * 1024 },

  fileFilter: (request, file, cb) => {
    const allowedMimes = ["image/jpeg", "image/jpg", "image/png"];

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb("Invalid file type.", false);
    }
  },
};
