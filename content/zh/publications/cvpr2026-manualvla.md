---
id: cvpr2026-manualvla
title: "ManualVLA: A Unified VLA Model for Chain-of-Thought Manual Generation and Robotic Manipulation"
authors: [Chenyang Gu, Jiaming Liu, Hao Chen, Runzhong Huang, Qingpo Wuwu, Zhuoyang Liu, Xiaoqi Li, Ying Li, Renrui Zhang, Peng Jia, Pheng-Ann Heng, Shanghang Zhang]
venue: CVPR
venueType: conference
year: 2026
status: accepted
isFirstAuthor: true
isCorrespondingAuthor: false
specialBadges: ["First Author"]
keywords: ["VLA", "Chain-of-Thought", "手册生成", "机器人操控"]
emoji: "🔥"
featuredImage: /images/publications/manualvla.png
links:
  arxiv: "https://arxiv.org/pdf/2512.02013"
  project: "https://sites.google.com/view/maunalvla/"
  wechat: "https://mp.weixin.qq.com/s/5d8G8SHTagcJO8pKRZpI6A"
---
视觉语言动作（VLA）模型近年来涌现，在机器人场景理解和操控中展现出强大的泛化能力。然而，面对需要明确目标状态的长时序任务（如乐高拼装或物体重排），现有VLA模型在协调高层规划与精准操控方面仍存在不足。为此，本文致力于赋予VLA模型从"什么"结果推断"如何"过程的能力，将预设的最终目标转化为可执行程序。本文提出ManualVLA，一个建立在Mixture-of-Transformers（MoT）架构上的统一VLA框架，能够实现多模态手册生成与动作执行之间的连贯协作。与直接将感官输入映射为动作的先前VLA方法不同，ManualVLA首先配备一个规划专家，生成由图像、位置提示和文本指令组成的中间手册。基于这一多模态程序手册，本文开发手册思维链（ManualCoT）推理过程，将手册输入动作专家，每一步手册为精准执行提供显式控制条件。此外，两个专家之间的跨任务共享注意力机制使手册生成与动作生成之间能够进行长上下文交互，为连贯操控提供隐式引导。ManualVLA在真实任务中展现出强大性能，平均成功率比此前层次化最优基线提升32%。
