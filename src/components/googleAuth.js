import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.inti({
        clientId:
          "256454602868-vn9hpdsi58hndp5baio145cv8619mh0c.apps.googleusercontent.com",
        scope: "email",
      });
    });
  }
  render() {
    return <div>Google Auth</div>;
  }
}

export default GoogleAuth;
