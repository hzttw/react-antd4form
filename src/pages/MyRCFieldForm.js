// import React, { useEffect } from "react";
// import Form, { Field } from "rc-field-form";
import Form, { Field } from "../components/my-rc-field-rorm";
import Input from "../components/Input";

// export default function MyRCFieldForm() {
//   const [form] = Form.useForm();

//   const onFinish = (val) => {
//     console.log("onFinish", val);
//   };

//   const onFinishFailed = (val) => {
//     console.log("onFinishFailed", val);
//   };

//   // useEffect(()=>{
//   //   console.log('form',form);
//   // })
//   return (
//     <div>
//       <h1>MyRcFieldForm</h1>
//       <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
//         <Field name="username" rules={[nameRules]}>
//           <Input placeholder="input UR Username" />
//         </Field>
//         <Field name="password" rules={[passwordRules]}>
//           <Input placeholder="input UR passwordRules" />
//         </Field>
//         <button>Submit</button>
//       </Form>
//     </div>
//   );
// }
import React, { Component } from "react";

const nameRules = { required: true, message: "请输入姓名!" };
const passwordRules = { required: true, message: "请输入密码!" };

export default class MyRCFieldForm extends Component {
  formRef = React.createRef();
  componentDidMount() {
    console.log("form", this.formRef.current);
    this.formRef.current.setFieldsValue({username:'default'})
  }
  onFinish = (val) => {
    console.log("onFinish", val);
  };

  onFinishFailed = (val) => {
    console.log("onFinishFailed", val);
  };
  render() {
    return (
      <div>
        <h1>MyRCFieldForm</h1>
        <Form
          ref={this.formRef}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Field name="username" rules={[nameRules]}>
            <Input placeholder="input UR Username" />
          </Field>
          <Field name="password" rules={[passwordRules]}>
            <Input placeholder="input UR passwordRules" />
          </Field>
          <button>Submit</button>
        </Form>
      </div>
    );
  }
}
