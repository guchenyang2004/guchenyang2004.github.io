---
id: icml2026-last0
title: "LaST₀: Latent Spatio-Temporal Chain-of-Thought for Robotic Vision-Language-Action Model"
authors: [Zhuoyang Liu, Jiaming Liu, Hao Chen, Jiale Yu, Ziyu Guo, Chengkai Hou, Chenyang Gu, Xiangju Mi, Renrui Zhang, Kun Wu, Zhengping Che, Jian Tang, Pheng-Ann Heng, Shanghang Zhang]
venue: ICML
venueType: conference
year: 2026
status: spotlight
isFirstAuthor: false
isCorrespondingAuthor: false
featuredImage: /images/publications/last0.png
links:
  arxiv: "https://arxiv.org/abs/2601.05248"
  code: "https://github.com/ZhuoyangLiu2005/last0"
  project: "https://vla-last0.github.io/"
  wechat: "https://mp.weixin.qq.com/s/zXmypwnnsV2LleqT2IdueA"
---
视觉语言动作（VLA）模型近年来展现出强大的泛化能力，部分方法尝试在执行前显式生成语言推理轨迹或预测未来观测。然而，显式推理通常带来不可忽视的推理延迟，制约了机器人操控所需的时间分辨率。更具体地说，推理被限制在语言空间内，这一表示瓶颈难以忠实捕获不可避免的物理属性。为解决这些局限，本文提出LaST₀，一个通过潜在时空思维链（CoT）在行动前进行高效推理的框架，捕获通常难以语言化的细粒度物理和机器人动态。具体而言，本文引入高效的潜在CoT空间，建模未来视觉动态、三维结构信息和机器人本体感知状态，并由LLM最终隐藏状态监督，以实现时间一致的隐式推理轨迹。LaST₀采用基于Mixture-of-Transformers设计实现的双系统架构，其中推理专家进行低频潜在推理，动作专家以高频观测和周期性更新的潜在表示为条件生成高频动作。通过共享自注意力机制，LaST₀实现潜在CoT空间与动作空间之间的长上下文交互，有效协调慎思推理与响应控制。在涵盖桌面、移动和灵巧手操控的10个真实任务中，LaST₀相比此前最优VLA方法平均成功率分别提升13%、14%和14%。
