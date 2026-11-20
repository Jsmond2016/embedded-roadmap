import type { OverviewGroup } from './types'

export const overview: OverviewGroup[] = [
  {
    stage: '一',
    modules: [
      { name: '嵌入式电子元器件', duration: '4 天', goal: '认得、算得、焊得上' },
      { name: 'C 语言精讲（压缩版）', duration: '8 天', goal: '指针、位运算、内存布局过关' },
      { name: '数字电路：从零搭建计算机', duration: '4 天', goal: '知道 CPU 是怎么被搭出来的' },
      { name: '原理图 & PCB 设计', duration: '5 天', goal: '能独立画板、打样' },
      { name: '示波器 / 电源 / 万用表 / 逻辑分析仪', duration: '3 天', goal: '会测量、会看波形' },
    ],
    output: '面包板综合实验板 + 一块自画自打的 STM32 最小系统板',
    level: '★★☆',
  },
  {
    stage: '二',
    modules: [
      { name: '51 单片机（含智能小车）', duration: '3 周', goal: '打通「外设 → 代码 → 现象」的闭环' },
    ],
    output: '51 智能小车（循迹 + 避障 + 蓝牙遥控）',
    level: '★★☆',
  },
  {
    stage: '三',
    modules: [
      {
        name: 'STM32 基础篇（寄存器 + HAL 双线）',
        duration: '4 周',
        goal: '吃透 GPIO/中断/串口/I2C/定时器/DMA/ADC/SPI/FSMC',
      },
      { name: 'STM32 进阶（LCD / 存储器 / 高性能外设）', duration: '2 周', goal: 'FSMC 驱动屏、Flash 读写、CAN' },
      { name: '物联网通信实战（WiFi / 4G / LoRa / 蓝牙 / GPS）', duration: '2 周', goal: '能做出「上云」的终端' },
    ],
    output: '带屏的温度采集终端（LCD 显示 + 串口上报 + Flash 存配置）',
    level: '★★★★',
  },
  {
    stage: '四',
    modules: [
      { name: 'FreeRTOS', duration: '2 周', goal: '任务、队列、信号量、优先级翻转' },
      { name: 'BootLoader / IAP / OTA 升级', duration: '1 周', goal: '远程升级不掉砖' },
      { name: 'LVGL 图形界面 + STM32 加密', duration: '1 周', goal: '移植屏上跑 UI；读保护' },
    ],
    output: '带 OTA + LVGL 界面的小产品原型',
    level: '★★★★',
  },
  {
    stage: '五',
    modules: [
      { name: 'Ubuntu 快速上手 + Shell', duration: '1 周', goal: '命令行、脚本、环境' },
      { name: 'Linux 应用层开发（130 集体系）', duration: '4 周', goal: '文件 IO / 进程线程 / 网络 / IO 多路复用' },
      { name: '系统移植（U-Boot / 内核 / 设备树 / 根文件系统）', duration: '3 周', goal: '把系统从零跑起来' },
      { name: '驱动开发', duration: '3 周', goal: '字符设备、platform 总线、设备树匹配' },
    ],
    output: '自编译内核 + 自写字符设备驱动 + 一个 Linux 应用（跑在开发板上）',
    level: '★★★★★',
  },
  {
    stage: '六',
    modules: [
      { name: '项目实战 + 简历面试', duration: '4 周', goal: '两个完整项目 + 可讲清楚的细节' },
    ],
    output: '2 个项目仓库 + 简历 + 项目讲解稿',
    level: '★★★★',
  },
]

/** 总览表底部提示 */
export const overviewTip = {
  title: '如果时间只够走一条路线',
  text: '优先 **三（STM32）+ 四（RTOS）+ 六（项目）**，把 MCU 方向做扎实，最快 4 个月可投简历；Linux 方向门槛高、周期长（通常需 5–6 个月），但天花板也更高。两条路的技术栈在「阶段三」之后才分叉，前面完全可以共用。',
}
