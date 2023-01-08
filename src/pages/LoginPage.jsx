import React from "react";
import Layout from "../components/UI/Layout";
import SignUp from "../components/UI/SignUp";

const LoginPage = () => {
  return (
    <Layout>
      <div className="bg-white">
        <SignUp />
      </div>
    </Layout>
  );
};

export default LoginPage;
