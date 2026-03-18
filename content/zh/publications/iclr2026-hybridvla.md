---
id: iclr2026-hybridvla
title: "HybridVLA: Collaborative Diffusion and Autoregression in a Unified Vision-Language-Action Model"
authors: [Jiaming Liu, Hao Chen, Zhuoyang Liu, Pengju An, Renrui Zhang, Chenyang Gu, Xiaoqi Li, Ziyu Guo, Sixiang Chen, Mengzhen Liu, Chengkai Hou, Mengdi Zhao, Kaichen Zhou, Pheng-Ann Heng, Shanghang Zhang]
venue: ICLR
venueType: conference
year: 2026
status: accepted
isFirstAuthor: false
isCorrespondingAuthor: false
featuredImage: /images/publications/hybridvla.png
links:
  arxiv: "https://arxiv.org/abs/2503.10631"
  code: "https://github.com/PKU-HMI-Lab/Hybrid-VLA"
  project: "https://hybrid-vla.github.io/"
  wechat: "https://mp.weixin.qq.com/s/zGF0JB7qHYO7w3ARUHVzxA"
---
操控策略设计的根本目标是使机器人能够理解人类指令、推理场景线索并在动态环境中执行泛化动作。近年来，自回归视觉语言动作（VLA）方法继承了视觉语言模型（VLMs）的常识推理能力；然而，这些方法将连续动作量化为离散区间，破坏了精确控制所需的连续性。相比之下，现有基于扩散的VLA方法引入额外的扩散头来预测连续动作，但仅以VLM提取的特征表示为条件，未能通过token级生成充分利用VLM的预训练推理能力。为解决上述局限，本文提出HybridVLA，一个在单个大语言模型中同时融合扩散动作的连续性与自回归上下文推理的统一框架。为减轻两种生成范式之间的干扰，本文提出将扩散去噪无缝融入下一token预测过程的协作训练策略。基于该策略，本文发现两种动作预测方式不仅相互促进，还在不同任务上各有优势。因此，本文设计了自适应融合两种预测的协作动作集成机制，从而实现更鲁棒的控制。HybridVLA在仿真和真实任务上的平均成功率分别比此前最优VLA方法提升14%和19%，同时在未见配置下展现出稳定的操控能力。
