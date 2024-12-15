import { TypeFieldError, TypeFieldName } from "./type";



export const NAME_FIELD: TypeFieldName = {
    EMAIL: "email",
    NAME_USER: "name",
    // USER_ID: "userId",
    PASSWORD: "password",
    NEW_PASSWORD: "newPassword",
    CODE: "code",
  };

  export const ERR_FIELD: TypeFieldError = {
    IS_EMPTY: "Enter the value in the field",
    IS_BIG: "Too many characters",
    EMAIL: "Please enter a valid email",
    NAME_USER: "Please enter a valid name",
  
    PASSWORD:
      `Password requirements:
* min. 8 characters;
* min. 1 uppercase letter;
* min. 1 lowercase letter;`,
    PASSWORD_AGAIN: "The passwords don't match",
   
  };
  
  export const REG_EXP_EMAIL = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
  
  export const REG_EXP_PASSWORD = new RegExp(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
  );
  
  export const REG_EXP_MONEY: RegExp = new RegExp(
    /^(?!0[.,]00$)(\d{1,6}(?:[.]\d{1,2})?)$/
  );