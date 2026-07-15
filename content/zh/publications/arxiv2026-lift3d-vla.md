---
id: arxiv2026-lift3d-vla
title: "Lift3D-VLA: Lifting VLA Models to 3D Geometry and Dynamics-Aware Manipulation"
authors: [Jiaming Liu, Qingpo Wuwu, Nuowei Han, Hao Chen, Zhuoyang Liu, Fan Fei, Yueru Jia, Chenyang Gu, Yandong Guo, Boxin Shi, Shanghang Zhang]
venue: arXiv
venueType: preprint
year: 2026
month: "07"
preprintDate: "2026-07-07"
status: preprint
isFirstAuthor: false
isCorrespondingAuthor: false
tagline: "将预训练二维表示提升至显式三维几何与动态感知推理，实现时间一致的VLA机器人操控。"
keywords: [VLA, 三维几何, 物理动态, 机器人操控]
featuredImage: /images/publications/lift3dvla.png
links:
  arxiv: "https://arxiv.org/abs/2607.06564"
  project: "https://lift3dvla.github.io/"
---
视觉语言动作（VLA）模型已在多种任务中展现出强大的泛化能力，但真实物理环境中的有效机器人操控仍依赖几何理解与空间推理。现有部分VLA方法虽尝试引入三维信息，却受限于数据规模和三维编码过程中的几何信息损失，也难以在动态环境中同时建模三维几何与具有时间结构的动作。为解决这些问题，本文提出Lift3D-VLA，一个具备显式三维点云推理和时间一致动作生成能力的统一VLA框架。基于此前的Lift3D工作，本文设计增强的二维模型提升策略，将三维点与预训练二维位置嵌入进行几何对齐；进一步提出以几何为中心的掩码自编码（GC-MAE），同时重建当前点云并预测未来几何演化；同时通过逐层时间动作建模，让大语言模型的多层协同预测动作块。在22个仿真任务和8个真实机器人任务中，Lift3D-VLA在MetaWorld和RLBench上的平均成功率分别超过此前最优VLA方法10.8%和11.1%，真实任务表现也领先最强基线4个百分点。
