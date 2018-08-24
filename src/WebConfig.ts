export interface Html {
  filename: string;
  template: string;
  title: string;
  chunks?: any;
}

export interface Proxy {
  [key: string]: string;
}

export interface Build {
  // 是否生成sourceMap
  sourceMap?: boolean;
  // 是否压缩
  minimize?: boolean;
  // 是否移除console
  dropConsole?: boolean;
}

export interface WebConfig {
  entry: {
    [name: string]: string;
  };
  // 端口号
  port?: number;
  html?: Html[];

  // 转发
  proxy?: Proxy;

  // 构建
  build?: Build;
}
