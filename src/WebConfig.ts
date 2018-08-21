export interface Html {
  filename: string;
  template: string;
  title: string;
  chunks?: any;
}

export interface Proxy {
  [key: string]: string;
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

  // 是否生成sourceMap
  sourceMap?: boolean;

  // 是否进行压缩
  minimize?: boolean;
}
