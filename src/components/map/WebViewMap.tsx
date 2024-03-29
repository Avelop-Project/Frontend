import React from "react";

import { View } from "react-native";
import { WebView } from "react-native-webview";

import { WEBVIEW_URI, LOCAL_WEBVIEW_URI } from "../../config";
import { dh } from "../../styles/size";

type Props = {};

const WebViewMap = () => {
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <WebView
        // source={{ uri: LOCAL_WEBVIEW_URI }}
        source={{ uri: WEBVIEW_URI }}
        style={{ flex: 1 }}
      />
    </View>
  );
};

export default WebViewMap;
