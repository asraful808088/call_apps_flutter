import removedVerify from "../../../database/mailSchema/maildelete.js";
import insertVerify from "../../../database/mailSchema/mailInsert.js";
import code from "../../../utility/hash_code/code.js";
import mail from "../../../utility/mail/main.js";
async function checkImage(req, res) {
  let result = { success: true };
  try {
    if (req.body.file != "null") {
      let file = req.body.file;
      const ext = file.match(/(\.jpg|\.png|\.jpeg)$/gi);
      result = imageValid(ext, req.files.file.size);
    }
  } catch (error) {
    if (req.files) {
      result = imageValid(req.files.file.mimetype, req.files.file.size);
    }
  }
  if (!result.success) {
    res.status(result.status).json({
      error: result.error,
    });
  } else {
    await mailController(req);
    res.status(200).json({
      success: true,
    });
  }
}

async function mailController(req) {
  const hash_code = code();
  await removedVerify({ email: req.body.email });

  await insertVerify({
    email: req.body.email,
    hash_code: hash_code,
    exp_time: Date.now() + 600000,
  });
  mail({
    userEmail: req.body.email,
    hash_code: hash_code,
    subject: "User-create",
    type: "signup",
  });
}

function imageValid(type, size) {
  if (
    type == "image/png" ||
    type == "image/jpg" ||
    type == "image/jpeg" ||
    type == ".png" ||
    type == ".jpg" ||
    type == ".jpeg"
  ) {
    if (size < 500000) {
      return {
        success: true,
      };
    } else {
      return {
        success: false,
        status: 413,
        error: "File too large",
      };
    }
  } else {
    return {
      success: false,
      status: 405,
      error: "only png, jpg, jpeg allow",
    };
  }
}

export default checkImage;
