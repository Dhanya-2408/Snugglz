import React from "react";
import RegisterForm from "../../components/AuthHandler/Register/RegisterForm";
import RegisterOTP from "../../components/AuthHandler/Register/RegisterOtp";
import { RegisterPage, useAuth } from "../../contexts/AuthContext";
import { Container } from "../../ui_kits/global/Container.styles";
import { PageContentFitScreen } from "../../ui_kits/global/PageContent.styles";

const AuthRegister = () => {
  const { registerPage } = useAuth();
  return (
    <Container>
      <PageContentFitScreen isExtraNarrow>
        {registerPage === RegisterPage.Register ? (
          <RegisterForm />
        ) : (
          <RegisterOTP />
        )}
      </PageContentFitScreen>
    </Container>
  );
};

export default AuthRegister;
