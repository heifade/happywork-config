import { Build } from "./interface/Build";
import { Html } from "./interface/Html";
import { Development } from "./interface/Development";

export interface WebConfig {
  entry: {
    [name: string]: string;
  };

  // 开发
  development?: Development;

  // 页面
  html?: Html[];

  // 构建
  build?: Build;
}
