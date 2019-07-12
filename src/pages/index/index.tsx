import Taro, { Component, Config } from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./index.scss";
import Method from "../../components/Method";
import SubComponent from "../../components/SubComponent";

export default class Index extends Component {
  config: Config = {
    navigationBarTitleText: "首页"
  };

  btn: SubComponent;
  refBtn = ref => {
    this.btn = ref;
  };

  handleClick = () => {
    console.log(this.btn);
    this.btn.show();
  };

  render() {
    return (
      <View className="index">
        <Method innerRef={this.refBtn} />
        <View onClick={this.handleClick}>Click me</View>
      </View>
    );
  }
}
