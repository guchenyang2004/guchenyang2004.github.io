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
tagline: "Generates robot demonstrations from human hand videos to enable robot policy learning without any robot data collection."
featuredImage: /images/publications/rwor.png
links:
  arxiv: "https://arxiv.org/abs/2507.03930"
  project: "https://rwor.github.io/"
---
Recent advancements in imitation learning have shown promising results in robotic manipulation, driven by the availability of high-quality training data. To improve data collection efficiency, some approaches focus on developing specialized demonstration devices for robot control, while others directly use human hand demonstrations to obtain training data. However, the former requires both a robotic system and a skilled operator, limiting scalability, while the latter faces challenges in aligning the visual gap between human hand demonstrations and the deployed robot observations. To address this, we propose a human hand data collection system combined with our hand-to-gripper generative model, which translates human hand demonstrations into robot gripper demonstrations, effectively bridging the observation gap. Specifically, a GoPro fisheye camera is mounted on the human wrist to capture human hand demonstrations. We then train a generative model on a self-collected paired human hand and UMI gripper demonstrations, which have been processed using a tailored data preprocessing strategy to ensure alignment in both timestamps and observations. Therefore, given only human hand demonstrations, we are able to automatically extract the corresponding SE(3) actions and integrate them with high-quality generated robot demonstrations through our pipeline for training robotic policy model.
