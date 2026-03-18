---
id: iclr2026-hybridvla
title: "HybridVLA: Collaborative Diffusion and Autoregression in a Unified Vision-Language-Action Model"
authors: [Jiaming Liu, Hao Chen, Zhuoyang Liu, Pengju An, Renrui Zhang, Chenyang Gu, Xiaoqi Li, Ziyu Guo, Sixiang Chen, Mengzhen Liu, Chengkai Hou, Mengdi Zhao, Kaichen Zhou, Pheng-Ann Heng, Shanghang Zhang]
venue: ICLR
venueType: conference
year: 2026
status: accepted
isFirstAuthor: false
isCorrespondingAuthor: false
featuredImage: /images/publications/hybridvla.png
links:
  arxiv: "https://arxiv.org/abs/2503.10631"
  code: "https://github.com/PKU-HMI-Lab/Hybrid-VLA"
  project: "https://hybrid-vla.github.io/"
  wechat: "https://mp.weixin.qq.com/s/zGF0JB7qHYO7w3ARUHVzxA"
---
A fundamental objective of manipulation policy design is to endow robots to comprehend human instructions, reason about scene cues, and execute generalized actions in dynamic environments. Recent autoregressive vision-language-action (VLA) methods inherit common-sense reasoning capabilities from vision-language models (VLMs). However, these methods quantize continuous actions into discrete bins, which disrupts the continuity required for precise control. In contrast, existing diffusion-based VLA methods incorporate an additional diffusion head to predict continuous actions solely conditioned on feature representations extracted by the VLM, without fully leveraging the VLM's pretrained reasoning capabilities through token-level generation. To address these limitations, we introduce HybridVLA, a unified framework that absorbs the continuous nature of diffusion-based actions and the contextual reasoning of autoregression within a single large language model. To mitigate interference between the two generation paradigms, we propose a collaborative training recipe that seamlessly incorporates diffusion denoising into the next-token prediction process. With this recipe, we find these two action prediction methods not only reinforce each other but also exhibit varying strength across different tasks. Therefore, we design a collaborative action ensemble mechanism that adaptively fuses both predictions, leading to more robust control. HybridVLA outperforms previous state-of-the-art VLA methods by 14% and 19% in mean success rate on simulation and real-world tasks, respectively, while demonstrating stable manipulation in unseen configurations.
