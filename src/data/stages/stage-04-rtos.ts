import type { Stage } from '../types'

export const stage4: Stage = {
  id: 's4',
  no: '4',
  title: 'FreeRTOS 与工程进阶',
  duration: '约 4 周',
  desc: '从「一个大循环 + 一堆标志位」升级到「多任务 + 任务间通信」，这是**从学生作品走向产品代码**的分水岭。之后的 BootLoader / LVGL / 加密三块，决定你的作品能不能算「产品级」。',
  chapters: [
    {
      id: '4-1',
      title: '4.1 FreeRTOS 内核与任务管理',
      tag: '5 天',
      defaultOpen: true,
      blocks: [
        {
          type: 'list',
          title: '关键知识点',
          items: [
            '为什么需要 RTOS：前后台系统的三个死穴（实时性差、任务耦合、难扩展）。',
            '任务三要素：任务函数、优先级、栈空间；任务状态机（运行/就绪/阻塞/挂起）。',
            '调度器：抢占式 vs 时间片；`vTaskDelay` 与 `vTaskDelayUntil` 的区别（周期性任务的正确写法）。',
            '任务创建/删除/挂起/恢复；空闲任务与钩子函数；**栈溢出检测的两种方法**。',
          ],
        },
        {
          type: 'list',
          title: '必做实验',
          items: [
            '把阶段三的「采集终端」改造成 4 个任务：采集 / 显示 / 通信 / 按键。',
            '故意把某个任务栈设小，触发栈溢出，观察 HardFault 并学会用栈水位排查。',
          ],
        },
        {
          type: 'note',
          tone: 'ok',
          title: '验收',
          text: '能说清「为什么 `vTaskDelay(1)` 不等于 1ms」「优先级高的任务一直跑，低优先级任务为什么饿死」。',
        },
      ],
    },
    {
      id: '4-2',
      title: '4.2 任务间通信与同步：队列 / 信号量 / 互斥量 / 事件组 / 任务通知',
      tag: '6 天',
      blocks: [
        {
          type: 'list',
          title: '关键知识点',
          items: [
            '**队列**：值拷贝机制、阻塞超时、队列集；生产者-消费者模型。',
            '**二值/计数信号量**：同步与资源计数；中断中必须用 `FromISR` 版本并处理 `xHigherPriorityTaskWoken`。',
            '**互斥量**：优先级继承如何解决优先级翻转；递归互斥量。',
            '**事件标志组**：多事件「与/或」等待。',
            '**任务通知**：最轻量的通信方式，什么时候可以替代信号量与队列。',
            '临界区 `taskENTER_CRITICAL` 与关中断 `portDISABLE_INTERRUPTS` 的区别与代价。',
            '软件定时器：守护任务、单次/周期、回调里不能阻塞。',
            '内存管理：heap_1 ~ heap_5 的差异、碎片问题、静态创建。',
          ],
        },
        {
          type: 'list',
          title: '必做实验',
          items: [
            '用队列实现「串口收包 → 解析任务」的解耦。',
            '构造一次优先级翻转（低优先级任务持锁被中优先级抢占），再用互斥量修复并观测效果。',
            '事件组实现「按键 + 定时 + 通信」三者任一触发唤醒处理任务。',
          ],
        },
        {
          type: 'note',
          tone: 'ok',
          title: '验收',
          text: '能画出自己项目的任务与通信拓扑图；能解释「什么时候该用队列，什么时候用任务通知」。',
        },
      ],
    },
    {
      id: '4-3',
      title: '4.3 BootLoader / IAP / OTA 远程升级',
      tag: '1 周',
      blocks: [
        {
          type: 'list',
          title: '关键知识点',
          items: [
            'IAP vs ICP vs ISP；Flash 分区规划（BootLoader 区 / APP 区 / 备份区 / 参数区）。',
            '跳转机制：关中断 → 重设 MSP → 设置向量表偏移（`SCB->VTOR`）→ 跳到复位向量。',
            'APP 链接地址与中断向量表重映射（为什么 APP 不设 VTOR 会进 HardFault）。',
            '升级通道：串口 / CAN / LoRa / WiFi；升级包格式（包头 + 长度 + CRC + 数据）。',
            '**防变砖设计**：双 Bank / 标志位回滚 / 校验失败自动回退 / 断电续传。',
          ],
        },
        {
          type: 'list',
          title: '必做实验',
          items: [
            '实现串口 OTA：上位机发固件包 → 写入备份区 → 校验 → 重启进 BootLoader 搬运 → 跳新 APP。',
            '升级过程中拔电，验证回滚逻辑能救回旧固件。',
          ],
        },
        {
          type: 'note',
          tone: 'ok',
          title: '验收',
          text: '能讲清一次完整 OTA 的 8 个步骤与每一步失败后的处理；能解释「为什么升级完必须软件复位」。',
        },
      ],
    },
    {
      id: '4-4',
      title: '4.4 LVGL 图形界面（你的主场）+ STM32 加密',
      tag: '1 周',
      defaultOpen: true,
      blocks: [
        {
          type: 'note',
          title: '为什么这块对你特别重要',
          text: 'LVGL 的布局、样式、事件、动画，和你在前端做的组件化、CSS 样式、事件绑定是**同一套思维**。带屏交互设备（智能家居面板、车载中控、仪表、医疗设备 UI）正缺「既懂嵌入式又懂界面」的人，这是你最容易做出差异化的方向。',
          tone: 'tip',
        },
        {
          type: 'list',
          title: '关键知识点',
          items: [
            'PC 模拟器（VSCode/CodeBlocks）先跑起来 —— **先在电脑上做 UI，再移植到板子，效率高 10 倍**。',
            '对象树与父子关系、屏幕（screen）、样式（style）与状态、事件回调、动画（anim）。',
            '常用控件：label / button / slider / switch / chart / table / list / keyboard。',
            '布局：flex 与 grid（再一次，和前端极度相似）。',
            '字体：中文字体裁剪与转换（`lv_font_conv`）、外部字库（把字库放 Flash，省 RAM）。',
            '移植：显示驱动（flush_cb）、输入驱动（触摸）、时基、双缓冲与 DMA 刷屏。',
            '**STM32 加密**：读保护 RDP Level 1/2、唯一 ID 加密、程序校验、防抄板思路。',
          ],
        },
        {
          type: 'list',
          title: '必做实验',
          items: [
            '在模拟器上做一个「智能家居控制面板」（3 个页面 + 图表 + 滑动开关），再移植到 STM32 + LCD + 触摸屏。',
            '开启 RDP Level 1，验证 SWD 无法读出固件。',
          ],
        },
        {
          type: 'note',
          tone: 'ok',
          title: '验收',
          text: '板子上跑着自己设计的 UI，触摸流畅无撕裂（帧率 ≥ 30fps）。**这个项目一定要录视频、放简历首页。**',
        },
      ],
    },
  ],
}
