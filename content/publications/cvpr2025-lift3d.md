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
3D geometric information is essential for manipulation tasks, as robots need to perceive the 3D environment, reason about geometric relationships, and interact with intricate spatial configurations. Recent research has increasingly focused on the explicit extraction of 3D features, while still facing challenges such as the lack of large-scale 3D data and the potential loss of spatial geometry. To address these limitations, we propose the Lift3D framework, which progressively enhances 2D foundation models with implicit and explicit 3D robotic representations to construct a robust 3D manipulation policy. Specifically, we first design a task-aware masked autoencoder that masks task-relevant affordance regions and reconstructs the depth information, enhancing the 2D spatial awareness of the 2D foundation model, facilitating subsequent point cloud learning. Lift3D leverages the 2D foundation model to directly encode point cloud data, achieving 3D robotic representations while minimizing spatial information loss. In experiments, Lift3D consistently outperforms previous state-of-the-art methods across several simulation benchmarks and real-world scenarios.
