// import React, { Component  } from "react";
// import FieldContext from "./FieldContext";

// export default class field extends Component {
//   static contextType = FieldContext;

//   componentDidMount() {
//     this.unregister = this.context.registerFieldEntities(this);
//   }
//   componentWillUnmount() {
//     this.unregister();
//   }
//   onStoreChange = () => {
//     //2.更新field
//     this.forceUpdate();
//   };
//   getControlled = () => {
//     const { getFieldValue, setFieldsValue } = this.context;
//     const { name } = this.props;
//     return {
//       value: getFieldValue(name),
//       onChange: (e) => {
//         const newValue = e.target.value;
//         setFieldsValue({ [name]: newValue });
//         console.log(newValue);
//       },
//     };
//   };
//   render() {
//     const { children } = this.props;
//     // 这里通过react.clone  clone一个新的元素，实现受控组件
//     const returnChildNode = React.cloneElement(children, this.getControlled());
//     return returnChildNode;
//   }
// }
import React from "react";
import FieldContext from "./FieldContext";

export default function Field(props) {
  const { getFieldValue, setFieldsValue, registerFieldEntities } =
    React.useContext(FieldContext);
  const { children, name } = props;
  const [, forceUpdate] = React.useReducer((x) => x + 1, 0);
  React.useLayoutEffect(() => {
    const unregister = registerFieldEntities({
      props,
      onStoreChange: forceUpdate,
    });
    return unregister
  });
  const getControlled = () => {
    return {
      value: getFieldValue(name),
      onChange: (e) => {
        const newValue = e.target.value;
        setFieldsValue({ [name]: newValue });
      },
    };
  };
  const returnChildNode = React.cloneElement(children, getControlled());
  return returnChildNode;
}
