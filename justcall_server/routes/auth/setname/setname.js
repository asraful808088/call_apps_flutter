const setname = (req, res) => {
  const name = req.body.name;

  if (name && name.length > 2 && name.length < 18) {
    res.status(200).json({
      success: true,
    });
  } else {
    res.status(401).json({
      success: false,
      name: {
        msg: "minimum  length 3 maximum 17",
      },
    });
  }
};

export default setname;
