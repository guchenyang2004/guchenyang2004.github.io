---
id: arxiv2026-last-hd
title: "LaST-HD: Learning Latent Physical Reasoning from Scalable Human Data for Robot Manipulation"
authors: [Jiaming Liu, Yinxi Wang, Chenyang Gu, Siyuan Qian, Xiangju Mi, Hao Chen, Jiawei Chen, Qingpo Wuwu, Xiaoqi Li, Nuowei Han, Yiming Zhang, Xuheng Zhang, Yang Yue, Yeqing Yang, Lei Wang, Peng Jia, Hao Tang, Shanghang Zhang]
venue: arXiv
venueType: preprint
year: 2026
month: "06"
preprintDate: "2026-06-22"
status: preprint
isCoFirst: true
coFirstAuthors: [Jiaming Liu, Yinxi Wang, Chenyang Gu, Siyuan Qian, Xiangju Mi]
isFirstAuthor: false
isCorrespondingAuthor: false
tagline: "Aligns human-hand and robot demonstrations in a shared latent physical reasoning space for scalable cross-embodiment manipulation learning."
keywords: [VLA, Latent Reasoning, Human Demonstrations, Cross-Embodiment]
featuredImage: /images/publications/lasthd.png
specialBadges: ["Co-First"]
links:
  arxiv: "https://arxiv.org/abs/2606.23685"
  project: "https://siriyep.github.io/last-hd-project-page/"
---
Human-hand demonstrations provide a direct and scalable source of physical interaction data for robot learning. While manual retargeting is indispensable for establishing kinematic action correspondence across different morphologies, robust transfer requires going beyond geometry to address the underlying alignment of physical dynamics between human and robot manipulation. To address this, we introduce LaST-HD, a novel human-to-robot action learning paradigm that extends reasoning-before-acting VLA by aligning human-hand and robot demonstrations in a shared latent reasoning space. Rather than mimicking human kinematics, LaST-HD trains an auxiliary action-conditioned world model on unpaired human-hand and robot trajectories to synthesize unified latent targets. Moreover, we develop Out-of-Lab (OOL) Glove, a low-cost motion-capture glove tailored to LaST-HD for human-hand data collection. Through mixed co-training, LaST-HD improves generalization to novel objects, scenes, and positions using only human-hand demonstrations. With online correction, LaST-HD further adapts to novel environments and achieves over 90% accuracy using only 20 minutes of OOL glove data.
