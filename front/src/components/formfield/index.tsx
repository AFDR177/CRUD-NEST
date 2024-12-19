import "./index.scss";
import React, { useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ERR_FIELD, NAME_FIELD, REG_EXP_EMAIL } from "models/const";
import { ACTION_TYPE, initialState, reducer } from "../../utils/reducer";
import { FormFieldProps } from "../../models/type";
import Button from "../button";
import Alert from "../alert";

export default function FormField({
  email,
  name,
  button,
  alert,
  link,
  questionOff,
  question,
}: FormFieldProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { EMAIL, NAME_USER } = NAME_FIELD;

  //Достать state из useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  const error = state.formErrors[EMAIL];
  const errorName = state.formErrors[NAME_USER];

  //Достать данные из поля ввода
  const handleChange = (name: string, value: string) => {
    // console.log(name, value, value.length);
    dispatch({
      type: ACTION_TYPE.SET_FORM_VAL,
      payload: {
        ...state.formValues,
        [name]: value,
      },
    });
  };

  //Валидация на фронте
  const validate = () => {
    const { email, name } = state.formValues;
    console.log("email==>", email, "name==>", name);

    const err = { [EMAIL]: "", [NAME_USER]: "" };

    // console.log("err-1", err);

    if (email.length < 1) {
      err[EMAIL] = ERR_FIELD.IS_EMPTY;
      // validation = true;
    } else if (email.length > 40) {
      err[EMAIL] = ERR_FIELD.IS_BIG;
    } else if (!REG_EXP_EMAIL.test(email)) {
      err[EMAIL] = ERR_FIELD.EMAIL;
    }

    if (name.length > 40) {
      err[NAME_USER] = ERR_FIELD.IS_BIG;
    }
    console.log("err-2", err);

    dispatch({ type: ACTION_TYPE.SEN_FORM_ERR, payload: err });

    // console.log("err-4", err);

    return Object.values(err).every((err) => !err);
  };

  const handleSubmit = () => {
    const checkValidate = validate();
    // console.log(checkValidate);

    if (checkValidate) {
      if (location.pathname === "/signup") {
        submitSignUp();
      } else if (location.pathname === "/signin") {
        console.log("enter in signin");

        submitSignIn();
      }
    }
  };

  const submitSignUp = async () => {
    try {
      const res = await fetch(`/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          [EMAIL]: state.formValues[EMAIL],
          [NAME_USER]: state.formValues[NAME_USER],
        }),
      });

      const data = await res.json();

      console.log("data========>>>", data);
      console.log(res.ok);

      if (res.ok) {
        // if (auth) {
        //   auth.dispatch({
        //     type: "LOGIN",
        //     payload: {
        //       token: data.session.token,
        //       user: data.session.user,
        //     },
        //   });
        //   // console.log("next page====>");
        // }

        navigate("/post");
        window.scrollTo(0, 0);
      }

      dispatch({
        type: ACTION_TYPE.SET_ALERT,
        payload: data.message,
      });
    } catch (e: any) {
      dispatch({
        type: ACTION_TYPE.SET_ALERT,
        payload: e.toString(),
      });
    }
  };

  const submitSignIn = async () => {
    try {
      // Отправляем данные на сервер для входа
      const res = await fetch("/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: state.formValues[EMAIL],
          name: state.formValues[NAME_USER],
        }),
      });

      const data = await res.json();

      if (res.ok) {
        console.log("Успешный вход:", data);
        navigate("/post"); // Переход на страницу /post
      } else {
        console.error("Ошибка:", data.message);
        dispatch({
          type: ACTION_TYPE.SET_ALERT, // Показываем сообщение в алерте
          payload:
            data.message ||
            "Такого пользователя нет в базе, зарегистрируйтесь.",
        });
      }
    } catch (e: any) {
      console.error("Ошибка при входе:", e.toString());
      dispatch({
        type: ACTION_TYPE.SET_ALERT,
        payload: "Ошибка подключения к серверу. Попробуйте позже.",
      });
    }
  };

  return (
    <div className="form">
      {name ? (
        <div className="form__item">
          <label
            htmlFor="name"
            className={`${errorName ? "text__error" : "field__label"}`}
          >
            Your Name:
          </label>
          <input
            id="name"
            type="text"
            name={NAME_USER}
            placeholder="Enter your name"
            className={`field__input ${
              errorName ? "field__input--validation" : ""
            }`}
            onChange={(e) => handleChange(NAME_USER, e.target.value)}
            required
          />
          {errorName && <span className="text__error">{errorName}</span>}
        </div>
      ) : null}

      {email ? (
        <div className="form__item">
          <label
            htmlFor="email"
            className={`${error ? "text__error" : "field__label"}`}
          >
            Email:
          </label>
          <input
            id="email"
            type="email"
            name={EMAIL}
            placeholder="Enter your email"
            className={`field__input ${
              error ? "field__input--validation" : ""
            }`}
            onChange={(e) => handleChange(EMAIL, e.target.value)}
            required
          />
          {error && <span className="text__error">{error}</span>}
        </div>
      ) : null}

      {questionOff ? (
        <p className="have-acc">
          {`${question} `}
          {link}
        </p>
      ) : null}

      <Button onClick={handleSubmit} className="button_kvadrat button--primary">
        {button}
      </Button>
      {alert ? <Alert text={state.alert} /> : null}
    </div>
  );
}
