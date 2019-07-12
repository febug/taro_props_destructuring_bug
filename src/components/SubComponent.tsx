import Taro, { Component } from "@tarojs/taro";

import { View } from "@tarojs/components";

class SubComponent extends Component {
  show() {
    Taro.showToast({ title: "hello" });
  }

  render() {
    return <View>只是拿来获取方法用的组件</View>;
  }
}

export default SubComponent;
