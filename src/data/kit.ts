import type { KitGroup } from './types'

export const kit: KitGroup[] = [
  {
    stage: '一',
    items: [
      { name: '数字万用表', price: '50–150 元', tip: '要带通断蜂鸣、电容档；不必买贵的' },
      {
        name: '面包板 + 杜邦线 + 元件包',
        price: '60–120 元',
        tip: '元件包选「基础元件套装」，含电阻电容二极管三极管 MOS',
      },
      { name: '恒温焊台（含风枪更好）', price: '150–400 元', tip: '可调温、带休眠；风枪用于贴片返修' },
      { name: '入门示波器', price: '500–1500 元', tip: '100MHz 带宽、双通道即可；预算紧可先买逻辑分析仪' },
      { name: '逻辑分析仪（8 通道）', price: '50–150 元', tip: '必买，调 I2C/SPI/UART 的神器' },
    ],
  },
  {
    stage: '二',
    items: [
      { name: '51 开发板（普中/清翔等）', price: '60–150 元', tip: '选带小车底盘的套装，直接做阶段项目' },
    ],
  },
  {
    stage: '三',
    items: [
      {
        name: 'STM32F103C8T6 最小系统板 + ST-Link',
        price: '50–100 元',
        tip: '入门够用；也可选尚硅谷自研开发板（与教程完全配套，少踩坑）',
      },
      {
        name: '外设模块包',
        price: '100–200 元',
        tip: 'LCD(ILI9341)、AT24C02、W25Q32、DS18B20、MPU6050、ESP8266',
      },
      { name: '调试器升级（DAP-Link/J-Link）', price: '50–300 元', tip: '要能在线调试、看变量、单步' },
    ],
  },
  {
    stage: '五',
    items: [
      {
        name: 'Linux 开发板（I.MX6ULL / RK3568）',
        price: '500–1500 元',
        tip: '**优先选资料全、论坛活跃的板厂（正点原子/野火）**，别图便宜买冷门板',
      },
      { name: 'USB 转 TTL 串口模块', price: '15–30 元', tip: 'CH340/CP2102，必备两个' },
      { name: 'SD 卡 / 读卡器 / 网线', price: '50 元', tip: '烧系统与 NFS 调试要用' },
    ],
  },
]

export const kitNote = {
  title: '预算与取舍',
  text: '总计约 **2000–4000 元**（不含示波器则约 1500–2500）。相比面授班 23800 元，这也是自学最直接的成本优势。**唯一建议别省的是：逻辑分析仪、ST-Link（能在线调试的那个）、以及一块资料齐全的 Linux 板。**',
}
