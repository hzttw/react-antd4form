import React, { useEffect } from "react";
// import Form, { Field } from "rc-field-form";
import Form, { Field } from "../components/my-rc-field-rorm";
import Input from "../components/Input";

const nameRules = { required: true, message: "请输入姓名!" };
const passwordRules = { required: true, message: "请输入密码!" };

export default function MyRCFieldForm() {
  const [form] = Form.useForm();

  const onFinish = (val) => {
    console.log("onFinish", val);
  };

  const onFinishFailed = (val) => {
    console.log("onFinishFailed", val);
  };

  useEffect(()=>{
    console.log('form',form);
  })
  return (
    <div>
      <h1>MyRcFieldForm</h1>
      <Form form={form} onFinish={onFinish} onFinishFaild={onFinishFailed}>
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
