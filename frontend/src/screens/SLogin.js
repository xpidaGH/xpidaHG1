import React from "react";
import SocialButton from "../homepages/SocialButton";

const handleSocialLogin = (user) => {
  console.log(user);
};

const handleSocialLoginFailure = (err) => {
  console.error(err);
};

function SLogin() {
  return (
    <div>
      <SocialButton
        provider="Google"
        appId="YOUR_APP_ID"
        onLoginSuccess={handleSocialLogin}
        onLoginFailure={handleSocialLoginFailure}
      >
        Login with Google
      </SocialButton>
    </div>
  );
}

export default SLogin;
