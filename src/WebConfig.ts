export interface Html {
  title: string;
  url: string;
}

export interface WebConfig {
  entry: {
    [name: string]: string;
  };
  // 端口号
  port?: number;
  html?: Html[];
}
