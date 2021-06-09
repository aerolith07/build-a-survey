const name = {
  minLength: 2,
  maxLength: 40,
  required: true,
};

const username = {
  minLength: 6,
  maxLength: 30,
  required: true,
};

const password = {
  minLength: 6,
  maxLength: 30,
  required: true,
};

export default { name, username, password };
