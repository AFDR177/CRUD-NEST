import React, { useReducer } from 'react';

import { NAME_FIELD } from '../data/const';
import { ACTION, initialState, reducer } from '../util/reducer';

const User = () => {
  const { EMAIL, USER_NAME } = NAME_FIELD;
  //   const [value, setValue] = useState('');
  //   console.log('===>value', value);
  //   const handleChange = (e) => setValue(console.log(e.target.value));

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state, dispatch, initialState, reducer);

  const handleChange = (name, value) => {
    dispatch({
      type: ACTION.SET_FORM_VAL,
      payload: { ...state.fromValues, [name]: value },
    });
  };
  return (
    <div className="form">
      <div className="form__item">
        <label htmlFor="text" className="field__label">
          Имя:
        </label>
        <input
          type="text"
          name={USER_NAME}
          placeholder="Enter your name"
          className="field__input"
          onChange={handleChange}
          required
        />
      </div>
      <div className="form__item">
        <label htmlFor="email" className="field__label">
          Email:
        </label>
        <input
          type="email"
          name={EMAIL}
          placeholder="Enter your email"
          className="field__input"
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );
};
export default User;
