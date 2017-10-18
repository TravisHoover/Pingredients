import React from 'react';
import { WebView } from 'react-native';

const OauthForm = () => {
    return (
      <WebView
        source={{uri: 'https://api.pinterest.com/oauth/?scope=read_public&client_id=4911971725215810382&state=768uyFys%20response_type=code&redirect_uri=https://pingredients-409c0.firebaseapp.com/__/auth/handler&response_type=code'}}
        style={{marginTop: 20}}
      />
    )
};

export default OauthForm;
