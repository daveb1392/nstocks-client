const endpoint = "https://tdashoard.herokuapp.com";
const signupURL = `${endpoint}/users`;
const loginURL = `${endpoint}/login`;
const validateURL = `${endpoint}/validate`;


const jsonify = res => {
  if (res.ok) return res.json();
  else throw res.json();
};

const handleServerError = response => {
  throw response;
};

const saveToken = data => {
  localStorage.setItem("token", data.token);
  return data.user;
};

const constructHeaders = (moreHeaders = {}) => ({
  Authorization: localStorage.getItem("token"),
  ...moreHeaders
});

const signUp = user =>
  fetch(signupURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ user })
  })
    .then(jsonify)
    .then(saveToken)
    .catch(handleServerError);

const logIn = user =>
  fetch(loginURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ user })
  })
    .then(jsonify)
    .then(saveToken)
    .catch(handleServerError);

const validateUser = () => {
  if (!localStorage.getItem("token"))
    return Promise.resolve({ error: "no token" });

  return fetch(validateURL, {
    headers: constructHeaders()
  })
    .then(jsonify)
    .then(saveToken)
    .catch(handleServerError);
};

const clearToken = () => localStorage.removeItem("token");
export default {
  signUp,
  logIn,
  validateUser,
  clearToken
};
