const multer = require("multer");
const crypto = require("crypto");
const path = require("path");

module.exports = {
  storage: multer.memoryStorage(),

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
