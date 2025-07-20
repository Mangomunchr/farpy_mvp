
import React from 'react';
import AppHeaderBar from '../components/AppHeaderBar';
import PrimaryButton from '../components/PrimaryButton';
import SimpleErrorMessage from '../components/SimpleErrorMessage';

function Login() {
  return (
    <div>
      <AppHeaderBar title="Login" />
      <div className="p-6 space-y-4 max-w-sm mx-auto">
        <SimpleErrorMessage message="" />
        {/* Placeholder for login form */}
        <PrimaryButton label="Log In" onClick={() => {}} />
      </div>
    </div>
  );
}

export default Login;
