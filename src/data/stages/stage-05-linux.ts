import type { Stage } from '../types'

export const stage5: Stage = {
  id: 's5',
  no: '5',
  title: '嵌入式 Linux 开发',
  duration: '约 10 周',
  desc: '难度最高、周期最长，但天花板也最高。尚硅谷这段分「Ubuntu 快速上手 → Linux 应用层开发（公开目录 130 集）→ 系统移植 → 驱动开发」。**如果你只走 MCU 路线，这一阶段可以砍掉；如果想做 Linux 岗或高阶产品，这是必过关卡。**',
  callout: {
    tone: 'note',
    title: '先说实话：这一段的真实难点不是写代码，而是「环境」',
    items: [
      '交叉编译工具链、U-Boot、内核、设备树、根文件系统 —— 任何一环版本不匹配，都能让你卡上一整周。',
      '建议**严格跟着一套教程 + 一块官方支持好的板子（正点原子 / 野火）走**，不要自己拼版本。遇到问题优先去板厂论坛搜同型号，而不是全网乱搜。',
    ],
  },
  chapters: [
    {
      id: '5-1',
      title: '5.1 Ubuntu 快速上手与 Shell',
      tag: '1 周',
      defaultOpen: true,
      blocks: [
        {
          type: 'list',
          title: '关键知识点',
          items: [
            '虚拟机安装与硬件设置、Ubuntu 镜像安装、网络配置（NAT/桥接）、SSH 远程登录、xftp 文件传输。',
            '文件系统「一切皆文件」、目录结构、权限（rwx 与 chmod/chown）、软硬链接。',
            '常用命令：find / grep / awk / sed / tar / ps / top / df / du / ln / mount。',
            '软件管理：apt 源、安装/卸载/依赖；环境变量（PATH、profile 与 bashrc）。',
            '用户与用户组管理、进程管理（前后台、`nohup`、`kill`）。',
            'Shell 脚本：变量、条件判断、循环、函数、`read` 交互、定时任务 crontab。',
            'Vim 三种模式与常用操作（至少会改配置、批量替换）。',
          ],
        },
        {
          type: 'list',
          title: '必做实验',
          items: [
            '写一个 Shell 脚本：每天备份指定目录 + 按日期命名 + 保留最近 7 份 + 输出日志。',
            '用 SSH + scp 在你的 Windows 和 Ubuntu 之间传文件，全程不插 U 盘。',
          ],
        },
        {
          type: 'note',
          tone: 'ok',
          title: '验收',
          text: '能在纯命令行下完成「装环境 → 传文件 → 跑程序 → 看日志」全流程，不需要图形界面。',
        },
      ],
    },
    {
      id: '5-2',
      title: '5.2 Linux 应用层开发（130 集体系，按 7 个模块推进）',
      tag: '4 周',
      defaultOpen: true,
      blocks: [
        {
          type: 'list',
          title: '模块一 · C 开发与构建（约 1 周）',
          items: [
            'POSIX 标准；GCC 编译四阶段（预处理 / 编译 / 汇编 / 链接）；静态库与动态库。',
            '**Makefile**：变量、自动推导、伪目标、模式规则、多目录工程。这是 Linux 开发的「水电煤」。',
            'GDB 调试：断点、单步、查看内存、core dump 分析；`valgrind` 查内存泄漏。',
          ],
        },
        {
          type: 'list',
          title: '模块二 · 文件 IO 与系统调用（约 3 天）',
          items: [
            '标准 C 库：`fopen/fread/fwrite/fprintf/fscanf`；缓冲机制。',
            '系统调用：`open/read/write/close/lseek/stat`；**文件描述符**的本质（进程 fd 表 → 系统打开文件表 → inode）。',
            '标准输入输出错误 stdin/stdout/stderr 与重定向。',
          ],
        },
        {
          type: 'list',
          title: '模块三 · 进程（约 4 天）',
          items: [
            '`fork` 创建子进程（写时复制）、`execve` 替换映像、`waitpid` 回收。',
            '进程树、孤儿进程、僵尸进程的成因与处理。',
            '守护进程（daemon）的创建步骤：fork → setsid → 重定向标准流 → 改工作目录。',
          ],
        },
        {
          type: 'list',
          title: '模块四 · 进程间通信 IPC（约 3 天）',
          items: [
            '匿名管道、有名管道（FIFO）、共享内存（`shm_open/mmap`）、消息队列、信号（signal/sigaction）。',
            '各自的适用场景与性能对比；共享内存为什么要配信号量做同步。',
          ],
        },
        {
          type: 'list',
          title: '模块五 · 线程与同步（约 1 周）',
          items: [
            '`pthread_create/join/detach/cancel`；线程与进程的本质区别（共享地址空间）。',
            '竞态条件；**互斥锁、读写锁、自旋锁、条件变量、信号量** 五件套的适用场景。',
            '条件变量为什么必须配 while 而不是 if（虚假唤醒）。',
            '**线程池**：原理、任务队列、worker 线程、优雅退出。',
          ],
        },
        {
          type: 'list',
          title: '模块六 · 内核原理（约 3 天）',
          items: [
            '操作系统分层、PCB 与内存模型、CPU 工作模型、进程状态迁移。',
            '虚拟内存与物理内存映射、缺页异常、fork 的写时复制实现。',
            '系统调用与库函数的关系、上下文切换流程。',
          ],
        },
        {
          type: 'list',
          title: '模块七 · 网络编程（约 1 周）',
          items: [
            'OSI 七层与 TCP/IP 四层、数据封装与解封装。',
            'TCP 三次握手 / 四次挥手、滑动窗口、拥塞控制；UDP 特性。',
            'Socket 编程：`socket/bind/listen/accept/connect/send/recv`；字节序转换。',
            '多连接服务端：多进程 / 多线程 / **IO 多路复用（select / poll / epoll）** —— epoll 是面试必考。',
          ],
        },
        {
          type: 'list',
          title: '本阶段产出（非常重要）',
          items: [
            '**一个完整的 C/S 项目**：比如「多线程 TCP 服务器 + 客户端」，支持并发连接、心跳、断线重连、日志记录、配置文件读取。放到 GitHub 上，这是 Linux 岗简历的核心项目。',
          ],
        },
        {
          type: 'note',
          tone: 'ok',
          title: '验收',
          text: '能手写 Makefile 编译多目录工程；能解释「一个 TCP 连接在内核里占用哪些资源」；能用 epoll 写出支持 100+ 并发的服务端。',
        },
      ],
    },
    {
      id: '5-3',
      title: '5.3 系统移植：U-Boot / 内核 / 设备树 / 根文件系统',
      tag: '3 周',
      blocks: [
        {
          type: 'list',
          title: '关键知识点',
          items: [
            '**交叉编译**：工具链选择（arm-linux-gnueabihf-）、为什么不能在本机 gcc 直接编、环境变量配置。',
            '**U-Boot**：启动流程（SPL → U-Boot → 内核）、编译与移植、环境变量、`bootcmd` 与 `bootargs`、tftp/nfs 下载调试、烧录到 eMMC/SD。',
            '**Linux 内核**：源码结构、`make menuconfig` 裁剪、编译出 zImage/dtb、启动日志分析（卡在哪一步怎么判断）。',
            '**设备树 DTS**：节点与属性、`compatible` 匹配、pinctrl、时钟、中断；编译为 dtb。**这是驱动开发的前置**。',
            '**根文件系统**：BusyBox 构建、目录结构、`/etc/inittab`、库文件移植、NFS 挂载调试、Buildroot/Yocto 一键构建。',
            '启动全流程串起来：上电 → BootROM → U-Boot → 内核 → 挂载 rootfs → init → 应用。',
          ],
        },
        {
          type: 'list',
          title: '必做实验',
          items: [
            '从源码编译 U-Boot 与内核，用 TFTP 下载、NFS 挂载根文件系统，让板子跑起自己的系统。',
            '修改设备树：点亮一个 GPIO、改一个串口波特率，重新编译 dtb 验证生效。',
            '用 Buildroot 构建一套最小系统（含 SSH），并对比手搓的版本差在哪。',
          ],
        },
        {
          type: 'note',
          tone: 'ok',
          title: '验收',
          text: '板子起不来时，能根据串口日志定位故障在 U-Boot、内核、还是 rootfs 阶段。',
        },
      ],
    },
    {
      id: '5-4',
      title: '5.4 驱动开发：字符设备 / platform 总线 / 设备树匹配',
      tag: '3 周',
      blocks: [
        {
          type: 'list',
          title: '关键知识点',
          items: [
            '内核模块：`module_init/exit`、`printk`、Makefile 与内核源码树、`insmod/rmmod/lsmod`；GPL 协议。',
            '**字符设备**：主次设备号、`cdev`、`file_operations`（open/read/write/ioctl/release）、`copy_to_user/copy_from_user`。',
            '**并发控制**：自旋锁、互斥量、原子操作、等待队列（阻塞与非阻塞 IO）。',
            '**platform 总线**：driver 与 device 匹配、`probe` 函数、`of_match_table` 与设备树 `compatible` 的对应。',
            '**GPIO 子系统**：`gpio_request/gpiod_get`、`gpio_set_value`；**中断**：`request_irq`、中断上下半部（tasklet / 工作队列 / 线程化中断）。',
            '**子系统**：I2C 子系统（i2c_driver/i2c_client）、SPI 子系统、输入子系统（input_dev 上报按键）、framebuffer（LCD 驱动）。',
            '用户态与内核态数据交换、sysfs/procfs/debugfs 调试接口。',
          ],
        },
        {
          type: 'list',
          title: '必做实验',
          items: [
            '写一个 LED 字符设备驱动：设备树描述 GPIO → probe 里申请 → 用户态 `echo 1 > /dev/led` 点亮。',
            '写一个按键中断驱动，用等待队列实现阻塞读，用户态程序 `read` 阻塞等待按键。',
            '写一个 I2C 传感器驱动（如 SHT30 温湿度），通过 sysfs 暴露数据。',
          ],
        },
        {
          type: 'note',
          tone: 'ok',
          title: '验收',
          text: '能独立从「看芯片手册 → 写设备树节点 → 写驱动 → 用户态测试」走完全流程；能解释「probe 函数什么时候被调用」。',
        },
      ],
    },
  ],
}
