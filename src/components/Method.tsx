import Taro, { Component } from "@tarojs/taro";
import SubComponent from "./SubComponent";

interface MethodProps {
  innerRef(ref: any): void;
}

class Method extends Component<MethodProps> {
  render() {
    const { innerRef } = this.props;
    return <SubComponent ref={innerRef} />;
  }
}

export default Method;
