import { AUTH } from './actionType';
 
export const signin = (formData, router) => async (dispatch) => {
  try {
    // const { data } = await api.signIn(formData);

    dispatch({ type: AUTH });

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    // const { data } = await api.signUp(formData);

    dispatch({ type: AUTH});

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};