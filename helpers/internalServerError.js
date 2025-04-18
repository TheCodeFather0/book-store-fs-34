const internalServerError = (res) => {
  res.status(500).send({
    status: 500,
    message: "Serverdə xəta baş verdi",
  });
};

export default internalServerError;
