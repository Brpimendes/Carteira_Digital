const yup = require("yup");
const { create } = require("yup/lib/Reference");

const createUsuario = async (req, res, next) => {
  const schema = yup.object().shape({
    nome: yup.string().required("O Nome é Obrigatório!"),
    cpf: yup.string().required("O CPF é Obrigatório"),
    telefone: yup
      .string()
      .max(13, "O telefone não pode ter mais de 15 caracteres."),
  });

  try {
    await schema.validate(req.body, { abortEarly: false });
    next();
  } catch (err) {
    return res.status(400).send(err.errors);
  }
};

module.exports = createUsuario;
