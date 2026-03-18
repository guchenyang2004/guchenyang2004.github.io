---
id: arxiv2026-last0
title: "LaST₀: Latent Spatio-Temporal Chain-of-Thought for Robotic Vision-Language-Action Model"
authors: [Zhuoyang Liu, Jiaming Liu, Hao Chen, Jiale Yu, Ziyu Guo, Chengkai Hou, Chenyang Gu, Xiangju Mi, Renrui Zhang, Kun Wu, Zhengping Che, Jian Tang, Pheng-Ann Heng, Shanghang Zhang]
venue: arXiv
venueType: preprint
year: 2026
status: preprint
isFirstAuthor: false
isCorrespondingAuthor: false
tagline: "Introduces latent spatio-temporal chain-of-thought reasoning into VLA models for improved spatial and temporal understanding."
featuredImage: /images/publications/last0.png
links:
  arxiv: "https://arxiv.org/abs/2601.05248"
  code: "https://github.com/ZhuoyangLiu2005/last0"
  project: "https://vla-last0.github.io/"
  wechat: "https://mp.weixin.qq.com/s/zXmypwnnsV2LleqT2IdueA"
---
Vision-Language-Action (VLA) models have recently shown strong generalization, with some approaches seeking to explicitly generate linguistic reasoning traces or predict future observations prior to execution. However, explicit reasoning typically incurs non-negligible inference latency, which constrains the temporal resolution required for robotic manipulation. More specifically, reasoning is confined to the linguistic space, imposing a representational bottleneck that struggles to faithfully capture inevitable physical attributes. To address these limitations, we propose LaST₀, a framework that enables efficient reasoning-before-action through a Latent Spatio-Temporal Chain-of-Thought (CoT), capturing fine-grained physical and robotic dynamics that are often difficult to verbalize. Specifically, we introduce a token-efficient latent CoT space that models future visual dynamics, 3D structural information, and robot proprioceptive states, and is supervised by the LLM's final hidden states to enable temporally consistent implicit reasoning trajectories. Furthermore, LaST₀ extends these representations across time to enable temporally consistent implicit reasoning trajectories. LaST₀ adopts a dual-system architecture implemented via a Mixture-of-Transformers design, where a reasoning expert conducts low-frequency latent inference and an acting expert generates high-frequency actions conditioned on high-frequency observations and periodically updated latent representations. Through shared self-attention mechanisms, LaST₀ enables long-context interaction between the latent CoT space and the action space, thereby effectively coordinating deliberate reasoning with responsive control. Across 10 real-world tasks spanning tabletop, mobile, and dexterous hand manipulation, LaST₀ improves mean success rates by 13%, 14% and 14% over prior SOTA VLA methods, respectively.
