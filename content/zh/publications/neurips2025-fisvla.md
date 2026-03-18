---
id: Neurips2025-FiSVLA
title: "Fast-in-Slow: A Dual-System Foundation Model Unifying Fast Manipulation within Slow Reasoning"
authors: [Hao Chen*, Jiaming Liu*, Chenyang Gu*, Zhuoyang Liu*, Renrui Zhang, Xiaoqi Li, Xiao He, Yandong Guo, Chi-Wing Fu, Shanghang Zhang, Pheng-Ann Heng]
isCoFirst: true
coFirstAuthors: [Hao Chen, Jiaming Liu, Chenyang Gu, Zhuoyang Liu]
venue: NeurIPS
venueType: conference
year: 2025
status: accepted
isFirstAuthor: true
isCorrespondingAuthor: false
specialBadges: ["Co-First"]
emoji: "🔥"
featuredImage: /images/publications/fisvla.png
links:
  arxiv: "https://arxiv.org/pdf/2506.01953"
  code: "https://github.com/CHEN-H01/Fast-in-Slow"
  project: "https://fast-in-slow.github.io/"
  wechat: "https://mp.weixin.qq.com/s/xkPBpjb4zcmNYXHD8vbZTg"
---
泛化策略和执行效率是机器人操控领域的两大核心挑战。近年来，基础策略通过利用互联网规模预训练视觉语言模型（VLMs）的常识推理能力取得了进展，但往往面临执行频率低的问题。为缓解这一矛盾，受Kahneman理论启发的双系统方法被提出，利用基于VLM的系统2处理高层推理，并通过独立的系统1动作模型确保实时控制。然而，现有设计将两个系统作为独立模型，限制了系统1充分利用基于VLM的系统2中丰富的预训练知识。本文提出Fast-in-Slow（FiS），一种通过参数部分共享将系统1执行模块嵌入VLM系统2的统一双系统视觉语言动作（VLA）模型。这一创新范式不仅使系统1能够实现高频执行，还促进了系统2单一基础模型内推理与执行组件之间的协调。鉴于两个系统在FiS-VLA中的根本不同角色，本文将两个系统设计为融合异质模态输入与异步工作频率，实现快速而精准的操控。为使两系统协调配合，本文提出双感知协同训练策略，在赋予系统1动作生成能力的同时保留系统2的上下文推理表示。在评测中，FiS-VLA在平均成功率上比此前最优方法在仿真任务中提升8%，在真实任务中提升11%，动作块设为8时控制频率达到117.7 Hz。
