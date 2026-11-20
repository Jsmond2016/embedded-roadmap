import type { PlanRow } from './types'

export const plan: PlanRow[] = [
  { week: 'W1', stage: '一', content: '电子元器件 + 面包板实验', milestone: '能算出限流电阻、用 MOS 驱动电机' },
  { week: 'W2', stage: '一', content: 'C 语言：指针 / 内存布局 / 位运算', milestone: '手写 ring buffer + 位操作宏' },
  { week: 'W3', stage: '一', content: '数字电路 + 仪器使用', milestone: 'Logisim 计数器；示波器测出 PWM 占空比' },
  { week: 'W4', stage: '一', content: '原理图 & PCB，打样', milestone: '自画 STM32 最小系统板下单打样' },
  { week: 'W5', stage: '二', content: '8051 架构、GPIO、按键', milestone: '点灯 + 按键消抖' },
  { week: 'W6', stage: '二', content: '中断、定时器、串口', milestone: '定时器精准 1s + 串口双向通信' },
  { week: 'W7', stage: '二', content: '数码管 / LCD1602 / I2C / 单总线', milestone: 'EEPROM 掉电保存 + DS18B20 显示' },
  { week: 'W8', stage: '二', content: '电机驱动 + 智能小车项目', milestone: '小车连续跑 10 分钟 + GitHub README' },
  { week: 'W9', stage: '三', content: 'STM32 概述、GPIO 四级进化', milestone: '不依赖模板手写点灯' },
  { week: 'W10', stage: '三', content: '时钟系统 + HAL + 中断 NVIC/EXTI', milestone: '画出完整时钟树；按键中断稳定' },
  { week: 'W11', stage: '三', content: 'USART 三种方式 + 协议设计', milestone: '变长收包状态机 + DMA+IDLE' },
  { week: 'W12', stage: '三', content: 'I2C（软件模拟 + 硬件）', milestone: 'EEPROM 驱动 + 逻辑分析仪验证' },
  { week: 'W13', stage: '三', content: '定时器全家桶', milestone: '非阻塞多任务闪灯 + 输入捕获测频' },
  { week: 'W14', stage: '三', content: 'DMA + ADC', milestone: 'ADC+DMA 波形显示在屏上' },
  { week: 'W15', stage: '三', content: 'SPI + Flash + 存储器映射', milestone: '自研参数存储模块（CRC + 双备份）' },
  { week: 'W16', stage: '三', content: 'FSMC + LCD 显示', milestone: '字符/汉字/图片/画圆全跑通' },
  { week: 'W17', stage: '三', content: '物联网通信（CAN/Modbus/WiFi/MQTT）', milestone: '数据上云 + 手机端可控制' },
  { week: 'W18', stage: '四', content: 'FreeRTOS 任务 + 通信机制', milestone: '采集终端改造为多任务 + 优先级翻转实验' },
  { week: 'W19', stage: '四', content: 'BootLoader / OTA + LVGL', milestone: '串口 OTA 成功升级 + 模拟器 UI 完成' },
  { week: 'W20', stage: '六', content: '项目冲刺（第一阶段：功能打通）', milestone: '项目主体功能可演示' },
  { week: 'W21', stage: '六', content: '项目打磨（稳定性/异常/指标）+ 简历', milestone: '连续运行 24h + 简历初版' },
  { week: 'W22', stage: '六', content: '面试题库 + 模拟面试 + 投递', milestone: '投出 30 份简历，开始面试' },
]

export const planNote = {
  title: '关于 Linux 阶段',
  text: '上表是全职 22 周（MCU 主线）。若要走 Linux 方向，在 W19 之后插入 **10 周** Linux 阶段（Ubuntu 1 周 → 应用层 4 周 → 系统移植 3 周 → 驱动 2 周），总周期约 32 周，项目改为 Linux 类项目。',
}
