---
id: cvpr2025-lift3d
title: "Lift3D Foundation Policy: Lifting 2D Large-Scale Pretrained Models for Robust 3D Robotic Manipulation"
authors: [Yueru Jia, Jiaming Liu, Sixiang Chen, Chenyang Gu, Zhilue Wang, Longzan Luo, Lily Lee, Pengwei Wang, Zhongyuan Wang, Renrui Zhang, Shanghang Zhang]
isCoFirst: true
coFirstAuthors: [Yueru Jia, Jiaming Liu, Sixiang Chen, Chenyang Gu]
venue: CVPR
venueType: conference
year: 2025
status: accepted
isFirstAuthor: true
isCorrespondingAuthor: false
specialBadges: ["Co-First"]
emoji: "🔥"
featuredImage: /images/publications/lift3d.png
links:
  arxiv: "https://arxiv.org/abs/2411.18623"
  code: "https://github.com/PKU-HMI-Lab/LIFT3D"
  project: "https://lift3d-web.github.io/"
  wechat: "https://mp.weixin.qq.com/s/R0Smibgy8NpVJTwj-RjF0A"
---
三维几何信息对于操控任务至关重要，机器人需要感知三维环境、推理几何关系并与复杂空间配置进行交互。近年来，对三维特征的显式提取越来越受到关注，但仍面临大规模三维数据匮乏和空间几何信息潜在丢失等挑战。为解决这些局限，本文提出Lift3D框架，通过渐进式增强二维基础模型的隐式和显式三维机器人表示来构建鲁棒的三维操控策略。具体而言，本文首先设计任务感知掩码自编码器，对任务相关的可操作区域进行掩码并重建深度信息，增强二维基础模型的空间感知能力，促进后续点云学习。Lift3D利用二维基础模型直接编码点云数据，在最小化空间信息损失的同时获得三维机器人表示。实验表明，Lift3D在多个仿真基准和真实场景中持续优于此前最优方法。
