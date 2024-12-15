import { NAME_FIELD, ERR_FIELD } from "../models/const";

export enum ACTION_TYPE {
    SUCCESS = "success",
    SET_FORM_VAL = "formValues",
    SEN_FORM_ERR = "formErrors",
    RESET = "reset",
    SET_ALERT = "alert",
  }

  export type TypeCheckState = {
    status: ACTION_TYPE | null;
    message: string | null;
    data: any | null;
    formValues: any | null;
    formErrors: any | null;
    alert?: string;
  };

  export type TypeCheckAction = {
    type: ACTION_TYPE;
    payload?: any;
  };

//Начальные значения для состояний полей
export const initialState: TypeCheckState = {
    status: null,
    message: null,
    data: null,
    formValues: {
      [NAME_FIELD.EMAIL]: "",
      [NAME_FIELD.NAME_USER]: "",
      [NAME_FIELD.PASSWORD]: "",
      [NAME_FIELD.NEW_PASSWORD]: "",
      [NAME_FIELD.CODE]: "",
    },
    formErrors: {
      [ERR_FIELD.IS_EMPTY]: "",
      [ERR_FIELD.IS_BIG]: "",
      [ERR_FIELD.EMAIL]: "",
      [ERR_FIELD.PASSWORD]: "",
      [ERR_FIELD.PASSWORD_AGAIN]: "",
    },
    alert: "",
  };  

  export const reducer = (
    state: TypeCheckState,
    action: TypeCheckAction
  ): TypeCheckState => {
    switch (action.type) {
      case ACTION_TYPE.SUCCESS:
        return { ...state, status: action.type, data: action.payload };
  
      case ACTION_TYPE.SET_FORM_VAL:
        return { ...state, status: action.type, formValues: action.payload };
  
      case ACTION_TYPE.SEN_FORM_ERR:
        return { ...state, status: action.type, formErrors: action.payload };
  
      case ACTION_TYPE.SET_ALERT:
        return { ...state, status: action.type, alert: action.payload };
  
      case ACTION_TYPE.RESET:
        return { ...initialState };
  
      default:
        return { ...state };
    }
  };