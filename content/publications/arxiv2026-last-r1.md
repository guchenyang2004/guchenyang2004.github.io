---
id: arxiv2026-last-r1
title: "LaST-R1: Reinforcing Robotic Manipulation via Adaptive Physical Latent Reasoning"
authors: [Hao Chen, Jiaming Liu, Zhonghao Yan, Nuowei Han, Renrui Zhang, Chenyang Gu, Jialin Gao, Ziyu Guo, Siyuan Qian, Yinxi Wang, Peng Jia, Shanghang Zhang, Pheng-Ann Heng]
venue: arXiv
venueType: preprint
year: 2026
month: "04"
preprintDate: "2026-04-30"
status: preprint
isFirstAuthor: false
isCorrespondingAuthor: false
tagline: "Jointly reinforces latent physical reasoning and action generation while adapting the reasoning horizon to the environment state."
keywords: [VLA, Reinforcement Learning, Latent Reasoning, Robot Manipulation]
featuredImage: /images/publications/lastr1.png
links:
  arxiv: "https://arxiv.org/abs/2604.28192"
  project: "https://siriyep.github.io/last-r1/"
  code: "https://github.com/CHEN-H01/LaST-R1"
---
Robotic foundation models require reasoning over complex visual scenes to execute adaptive actions in dynamic environments. While recent studies on latent-reasoning Vision-Language-Action (VLA) models have demonstrated the capability to capture fine-grained physical dynamics, they remain predominantly confined to static imitation learning, severely limiting their adaptability and generalization. We present LaST-R1, a reinforcement learning post-training framework designed to harness latent reasoning-before-acting policies. Its Latent-to-Action Policy Optimization (LAPO) jointly optimizes the latent reasoning process and action generation, explicitly embedding latent Chain-of-Thought reasoning within the RL loop. An adaptive latent CoT mechanism allows the policy to dynamically modulate its reasoning horizon based on environment states. LaST-R1 achieves a 99.9% average success rate on LIBERO with only one-shot supervised warm-up and improves over the state-of-the-art supervised fine-tuning approach by up to 22.5% across four complex real-world tasks.
