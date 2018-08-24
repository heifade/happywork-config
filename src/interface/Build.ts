import { Optimization } from "./Optimization";

export interface Build {
  // 是否生成sourceMap
  sourceMap?: boolean;
  // 是否压缩
  minimize?: boolean;
  // 是否移除console
  dropConsole?: boolean;
  // 构建优化配置
  optimization?: Optimization;
}
