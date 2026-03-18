---
id: neurips2025-acdit
title: "AC-DiT: Adaptive Coordination Diffusion Transformer for Mobile Manipulation"
authors: [Sixiang Chen, Jiaming Liu, Siyuan Qian, Han Jiang, Lily Li, Renrui Zhang, Zhuoyang Liu, Chenyang Gu, Chengkai Hou, Pengwei Wang, Zhongyuan Wang, Shanghang Zhang]
venue: NeurIPS
venueType: conference
year: 2025
status: accepted
isFirstAuthor: false
isCorrespondingAuthor: false
tagline: "An adaptive coordination diffusion transformer that jointly controls the base and arm for whole-body mobile manipulation."
emoji: "🛸"
featuredImage: /images/publications/acdit.png
links:
  arxiv: "https://arxiv.org/abs/2507.01961"
  code: "https://github.com/PKU-HMI-Lab/AC-DiT"
  project: "https://ac-dit.github.io"
  wechat: "https://mp.weixin.qq.com/s/CJW_Vg0zEv4JoojIMkDSOA"
---
Recently, mobile manipulation has attracted increasing attention for enabling language-conditioned robotic control in household tasks. However, existing methods still face challenges in coordinating mobile base and manipulator, primarily due to low limitations. On the one hand, they fail to explicitly model the influence of the mobile base on manipulator control, which easily leads to error accumulation under high degrees of freedom. On the other hand, they treat the entire mobile manipulation process with the same visual observation modality (e.g., either all 2D or all 3D), overlooking the distinct multimodal perception requirements at different stages during mobile manipulation. To address this, we propose the Adaptive Coordination Diffusion Transformer (AC-DiT), which enhances mobile base and manipulator coordination for end-to-end mobile manipulation. First, since the motion of the mobile base directly influences the manipulator's actions, we introduce a mobility-to-body conditioning mechanism to enhance whole-body coordination. Specifically, we attach a lightweight policy head (e.g., DiT) to the encoders and pretrain it using only mobile base actions, enabling it to extract latent mobility features that capture base motion representation. These features are then used as conditional inputs in the subsequent training of the mobile manipulation action head, guiding the prediction of mobile manipulation actions. Second, to adapt the perception system to the varying demands of different stages in the mobile manipulation process, we propose a perception-aware multimodal adaptation mechanism that dynamically assigns appropriate weights to different visual modalities. We empirically validate AC-DiT through extensive experiments on both simulated and real-world mobile manipulation tasks, demonstrating superior performance compared to existing methods.
