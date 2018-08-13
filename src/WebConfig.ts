export interface Html {
  title: string;
  url: string;
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
}
