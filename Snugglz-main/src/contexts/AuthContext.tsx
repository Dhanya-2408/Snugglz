import { createContext, ReactNode, useContext, useState } from "react";
import { AxiosRequestConfig } from "axios";
import { useNavigate } from "react-router-dom";
import { fetchData } from "../services/axios";
import {
  IFormState,
  InputBaseProps,
  InputFocusEvent,
  Messages,
} from "../models/types";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { isString } from "../utils/textHandler";
import usePath from "../hooks/usePath";

type AuthProviderProps = {
  children: ReactNode;
};

export type AuthUser = null | string;

export enum LoginPage {
  Login = "login",
  ForgotPassword = "forgot-password",
  ConfirmOtp = "confirm-otp",
  ResetPassword = "reset-password",
}

export enum RegisterPage {
  Register = "register",
  ConfirmOtp = "confirm-otp",
}

interface IAuthContext {
  user: AuthUser;
  loginPage: LoginPage;
  registerPage: RegisterPage;
  verificationEmail: AuthUser;
  handleFormValidate: <T extends object>(
    InputsArray: Array<InputBaseProps<T>>,
    authValues: T,
    sanitizeFn: (
      key: keyof IFormState<T>,
      value: Partial<Record<keyof T, string>>
    ) => void
  ) => boolean;
  handleOnFocusEvent: <T extends object>(
    e: InputFocusEvent,
    formValues: IFormState<T>,
    sanitizeFn: (value: IFormState<T>) => void
  ) => void;
  updateData: <T extends object>(
    params: AxiosRequestConfig,
    formValues: IFormState<T>,
    messages: Messages,
    setFormState: (value: IFormState<T>) => void
  ) => Promise<unknown>;
  navigateToHome: (uesr?: AuthUser) => void;
  handleLoginPage: (page: LoginPage, email?: AuthUser) => void;
  handleRegisterPage: (user: AuthUser) => void;
  logout: () => void;
}

export const AuthContext = createContext({} as IAuthContext);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();

  const [verificationEmail, setVerificationEmail] = useLocalStorage<AuthUser>(
    "verify-renderer-email",
    null
  );
  const [user, setUser] = useLocalStorage<AuthUser>("renderer-user", null);

  const path = usePath();
  const authPath = ["register", "login"];

  const [loginPage, setLoginPage] = useState<LoginPage>(LoginPage.Login);
  const [registerPage, setRegisterPage] = useState<RegisterPage>(
    RegisterPage.Register
  );

  const handleFormValidate = <T extends object>(
    InputsArray: Array<InputBaseProps<T>>,
    authValues: T,
    sanitizeFn: (
      key: keyof IFormState<T>,
      value: Partial<Record<keyof T, string>>
    ) => void
  ): boolean => {
    let newError = {} as Partial<Record<keyof T, string>>;
    let isValid: boolean = true;
    InputsArray.forEach((input: InputBaseProps<T>) => {
      if (input.validation && input.validation.length) {
        input.validation.forEach((vRule) => {
          const errorMessage = vRule!.rule(
            authValues[input.name],
            input.label,
            vRule!.args
          );
          if (errorMessage.length) {
            newError[input.name] = errorMessage;
            isValid = false;
          }
        });
      }
    });
    sanitizeFn("errors", newError);
    return isValid;
  };

  const handleOnFocusEvent = <T extends object>(
    e: InputFocusEvent,
    formValues: IFormState<T>,
    sanitizeFn: (value: IFormState<T>) => void
  ): void => {
    e.preventDefault();
    sanitizeFn(formValues);
  };

  async function updateData<T extends object>(
    params: AxiosRequestConfig,
    formValues: IFormState<T>,
    messages: Messages,
    setFormState: (value: IFormState<T>) => void
  ) {
    setFormState({ ...formValues, isButtonLoading: true });
    try {
      const response = await fetchData(params);
      console.log("data", response);
      setFormState({
        ...formValues,
        helperText: messages.success,
        submitSuccess: true,
        isButtonLoading: false,
      });
      return response;
    } catch (error: any) {
      console.log("error", error);
      setFormState({
        ...formValues,
        helperText: isString(error?.response?.data)
          ? error?.response?.data
          : messages.error,
        submitSuccess: false,
        isButtonLoading: false,
      });
      return null;
    }
  }

  const navigateToHome = (authUser?: AuthUser) => {
    if (authUser) {
      setUser(authUser);
    }
    setVerificationEmail(null);

    if (authPath.includes(path)) {
      navigate("/");
    }
  };

  const handleLoginPage = (page: LoginPage, email?: AuthUser) => {
    if (email !== undefined) {
      setVerificationEmail(email);
    }
    setLoginPage(page);
  };

  const handleRegisterPage = (user: AuthUser) => {
    setVerificationEmail(user);
    setRegisterPage(RegisterPage.ConfirmOtp);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loginPage,
        registerPage,
        verificationEmail,
        logout,
        updateData,
        handleLoginPage,
        handleRegisterPage,
        handleFormValidate,
        handleOnFocusEvent,
        navigateToHome,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
