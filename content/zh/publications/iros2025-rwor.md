---
id: iros2025-rwor
title: "RwoR: Generating Robot Demonstrations from Human Hand for Robot Policy Learning without Robot"
authors: [Liang Heng, Xiaoqi Li, Shangqing Mao, Jiaming Liu, Ruolin Liu, Jingli Wei, Yu-Kai Wang, Yueru Jia, Chenyang Gu, Rui Zhao, Shanghang Zhang, Hao Dong]
venue: IROS
venueType: conference
year: 2025
status: accepted
isFirstAuthor: false
isCorrespondingAuthor: false
featuredImage: /images/publications/rwor.png
links:
  arxiv: "https://arxiv.org/abs/2507.03930"
  project: "https://rwor.github.io/"
---
模仿学习近年来在机器人操控中展现出良好效果，这得益于高质量训练数据的可用性。为提高数据采集效率，一些方法专注于开发专用机器人控制演示设备，另一些则直接使用人手演示获取训练数据。然而，前者需要机器人系统和熟练操作员，限制了可扩展性；后者面临人手演示与部署机器人观测之间视觉差距对齐的挑战。为此，本文提出一种人手数据采集系统，结合手-夹爪生成模型，将人手演示转化为机器人夹爪演示，有效弥合观测差距。具体而言，将GoPro鱼眼相机安装在人类手腕上采集人手演示，然后在经过定制数据预处理策略对齐时间戳和观测的自采集人手与UMI夹爪配对演示数据上训练生成模型。因此，仅给定人手演示即可自动提取相应SE(3)动作，并通过流水线与高质量生成的机器人演示集成，用于训练机器人策略模型。
