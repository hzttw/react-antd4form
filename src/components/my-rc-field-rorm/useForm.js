import { useRef } from "react";

//这里定义状态管理库
class FormStore {
  constructor() {
    //状态值 name:value结构
    this.store = {};
    //定义数组 存储
    this.fieldEntities = [];
    //将提交事件或者提交之后执行存起来
    this.callbacks = []
  }
  setCallbacks = (callbacks)=>{
    this.callbacks = {...callbacks,...this.callbacks}
  }
  //注册实例（forceUpdate） 如果组件不在 需要去掉
  //注册与取消注册，订阅与取消订阅  都需要成对出现
  registerFieldEntities = (entity) => {
    this.fieldEntities.push(entity);
    return () => {
      this.fieldEntities = this.fieldEntities.filter((item) => item !== entity);
      delete this.store[entity.props.name];
    };
  };
  // get
  getFieldsValue = () => {
    return { ...this.store };
  };
  getFieldValue = (name) => {
    return this.store[name];
  };

  // set
  //password :123
  setFieldsValue = (newStore) => {
    //1.更新状态仓库
    this.store = {
      ...this.store,
      ...newStore,
    };
    console.log("this.store", this.store);
    //2.更新Field
    //所有组件更新
    this.fieldEntities.forEach((entity) => {
      Object.keys(newStore).forEach((k) => {
        if (k === entity.props.name) {
          entity.onStoreChange();
        }
      });
    });
  };
  validate = () => {
    let err = [];

    return err;
  };
  //这里写提交事件
  submit = () => {
    console.log("onsubmit");
    let err = this.validate();
    const {onFinish,onFinishFailed} = this.callbacks
    if (err.length === 0) {
      //校验通过
      onFinish(this.getFieldsValue())
    } else {
      //校验未通过
      onFinishFailed(err,this.getFieldsValue())
    }
  };
  getForm = () => {
    return {
      getFieldsValue: this.getFieldsValue,
      getFieldValue: this.getFieldValue,
      setFieldsValue: this.setFieldsValue,
      registerFieldEntities: this.registerFieldEntities,
      submit: this.submit,
      setCallbacks:this.setCallbacks
    };
  };
}
export default function useForm() {
  //使用useRef将store存储  存在filber  在组件卸载之前都是同一个值
  const formRef = useRef();
  if (!formRef.current) {
    const formStore = new FormStore();
    formRef.current = formStore.getForm();
  }
  return [formRef.current];
}
