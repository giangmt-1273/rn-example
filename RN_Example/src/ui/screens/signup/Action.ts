import Action from '../../../saga/Action';
const handleSignUp = (email, pass) => {
  return {
    type: Action.SIGNUP.value,
    email,
    password: pass
  };
};

export {handleSignUp};
