import { Proxy } from "./Proxy";

export interface Development {
  // 转发
  proxy?: Proxy;
  // 端口号
  port?: number;
}
