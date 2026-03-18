---
id: neurips2025-acdit
title: "AC-DiT: Adaptive Coordination Diffusion Transformer for Mobile Manipulation"
authors: [Sixiang Chen, Jiaming Liu, Siyuan Qian, Han Jiang, Lily Li, Renrui Zhang, Zhuoyang Liu, Chenyang Gu, Chengkai Hou, Pengwei Wang, Zhongyuan Wang, Shanghang Zhang]
venue: NeurIPS
venueType: conference
year: 2025
status: accepted
isFirstAuthor: false
isCorrespondingAuthor: false
emoji: "🛸"
featuredImage: /images/publications/acdit.png
links:
  arxiv: "https://arxiv.org/abs/2507.01961"
  code: "https://github.com/PKU-HMI-Lab/AC-DiT"
  project: "https://ac-dit.github.io"
  wechat: "https://mp.weixin.qq.com/s/CJW_Vg0zEv4JoojIMkDSOA"
---
近年来，移动操控因其能够在家庭任务中实现语言条件机器人控制而受到越来越多的关注。然而，现有方法在协调移动底座与机械臂方面仍面临挑战，主要表现为两方面不足：一方面，未能显式建模移动底座对机械臂控制的影响，在高自由度条件下容易产生误差累积；另一方面，对整个移动操控过程采用相同的视觉观测模态（如全部2D或全部3D），忽略了移动操控不同阶段差异化的多模态感知需求。为此，本文提出自适应协调扩散Transformer（AC-DiT），通过增强移动底座与机械臂的协调性实现端到端移动操控。首先，由于移动底座的运动直接影响机械臂的动作，本文引入移动-身体条件化机制以增强全身协调，将轻量级策略头预训练于移动底座动作提取潜在移动特征，再作为条件输入指导移动操控动作头的训练。其次，为使感知系统适应移动操控不同阶段的多样化需求，本文提出感知感知多模态自适应机制，动态为不同视觉模态分配合适的权重。本文在仿真和真实移动操控任务上进行广泛实验，验证了AC-DiT优于现有方法的性能。
