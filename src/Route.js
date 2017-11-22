

/* *****************路由配置****************** */
//全局唯一的导航栏
let navigator = null;

//注册导航器
export function registerNavigator(tempNavigator) {
  if (navigator) {
    return;
  }   
  navigator = tempNavigator;
}

//移除导航器
export function unRegisterNavigator() {
  if (!navigator) {
    return;
  }
  navigator = null;
}

/* *****************路由跳转****************** */
export const jump = (name, params) => {
  navigator.navigate(name, params );
};

export const goBack = () => {
  navigator.goBack(null);
};
