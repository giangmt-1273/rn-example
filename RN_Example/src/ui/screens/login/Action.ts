import Action from '../../../saga/Action';
const handleLogin = (email, pass) => {
  return {
    type: Action.LOGIN.value,
    email,
    password: pass
  };
};

export {handleLogin};
