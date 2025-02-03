import { Container } from "../../ui_kits/global/Container.styles";
import { LoginForm } from "../../components/AuthHandler/Login/LoginForm";
import { PageContentFitScreen } from "../../ui_kits/global/PageContent.styles";
import { LoginPage, useAuth } from "../../contexts/AuthContext";
import { ForgotPassword } from "../../components/AuthHandler/Login/ForgotPassword";
import { ConfirmOtp } from "../../components/AuthHandler/Login/ConfirmOtp";
import ResetPassword from "../../components/AuthHandler/Login/ResetPassword";

const AuthLogin = () => {
  const { loginPage } = useAuth();

  const getComponent = (loginPage = LoginPage.Login) =>
    ({
      [LoginPage.Login]: LoginForm,
      [LoginPage.ForgotPassword]: ForgotPassword,
      [LoginPage.ConfirmOtp]: ConfirmOtp,
      [LoginPage.ResetPassword]: ResetPassword,
    }[loginPage]);

  const CustomLoginPage = getComponent(loginPage);

  return (
    <Container>
      <PageContentFitScreen isExtraNarrow>
        <CustomLoginPage />
      </PageContentFitScreen>
    </Container>
  );
};

export default AuthLogin;
