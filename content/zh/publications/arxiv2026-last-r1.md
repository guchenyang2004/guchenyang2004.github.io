---
id: arxiv2026-last-r1
title: "LaST-R1: Reinforcing Robotic Manipulation via Adaptive Physical Latent Reasoning"
authors: [Hao Chen, Jiaming Liu, Zhonghao Yan, Nuowei Han, Renrui Zhang, Chenyang Gu, Jialin Gao, Ziyu Guo, Siyuan Qian, Yinxi Wang, Peng Jia, Shanghang Zhang, Pheng-Ann Heng]
venue: arXiv
venueType: preprint
year: 2026
month: "04"
preprintDate: "2026-04-30"
status: preprint
isFirstAuthor: false
isCorrespondingAuthor: false
tagline: "联合强化潜在物理推理与动作生成，并根据环境状态自适应调整推理长度。"
keywords: [VLA, 强化学习, 潜在推理, 机器人操控]
featuredImage: /images/publications/lastr1.png
links:
  arxiv: "https://arxiv.org/abs/2604.28192"
  project: "https://siriyep.github.io/last-r1/"
  code: "https://github.com/CHEN-H01/LaST-R1"
---
机器人基础模型需要对复杂视觉场景进行推理，才能在动态环境中执行自适应动作。近期具有潜在推理能力的视觉语言动作（VLA）模型虽能捕获细粒度物理动态，但大多局限于静态模仿学习，适应性与泛化能力受到限制。本文提出LaST-R1，一个面向潜在先推理后行动策略的强化学习后训练框架。其核心算法潜在到动作策略优化（LAPO）联合优化潜在推理过程与动作生成，并将潜在思维链直接嵌入强化学习优化循环；自适应潜在思维链机制则可根据不同环境状态动态调节推理长度。LaST-R1仅需一次监督热身即可在LIBERO基准上达到99.9%的平均成功率，并在四个复杂真实任务中较最优监督微调方法最高提升22.5%。
