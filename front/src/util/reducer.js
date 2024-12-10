import { NAME_FIELD } from '../data/const';

export const ACTION = {
  SET_FORM_VAL: 'formValues',
  SUCCESS: 'success',
  SET_FORM_ERR: 'formErrors',
};

export const initialState = {
  status: null,
  message: null,
  data: null,
  formValues: {
    [NAME_FIELD.EMAIL]: '',
    [NAME_FIELD.USER_NAME]: '',
  },
};

export const reducer = (action, state) => {
  switch (action) {
    case ACTION.SUCCESS:
      return { ...state, status: action, data: action.payload };
    case ACTION.SET_FORM_VAL:
      return { ...state, status: action, formValues: action.payload };
    default:
      return { ...state };
  }
};
