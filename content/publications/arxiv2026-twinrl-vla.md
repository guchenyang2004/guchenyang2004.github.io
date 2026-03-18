---
id: arxiv2026-twinrl-vla
title: "TwinRL-VLA: Digital Twin-Driven Reinforcement Learning for Real-World Robotic Manipulation"
authors: [Qinwen Xu, Jiaming Liu, Rui Zhou, Shaojun Shi, Nuowei Han, Zhuoyang Liu, Chenyang Gu, Shuo Gu, Yang Yue, Gao Huang, Wenzhao Zheng, Sirui Han, Peng Jia, Shanghang Zhang]
venue: arXiv
venueType: preprint
year: 2026
status: preprint
isFirstAuthor: false
isCorrespondingAuthor: false
tagline: "Uses a digital twin environment to drive reinforcement learning, enabling safe and efficient real-world robotic manipulation."
featuredImage: /images/publications/twinrl.png
links:
  arxiv: "https://arxiv.org/abs/2602.09023"
  code: "https://github.com/zhourui9813/TwinRL"
  project: "https://sites.google.com/view/twinrl/twinrl"
  wechat: "https://mp.weixin.qq.com/s/XwPdRr1djIX5gaNQ4-k1XQ"
---
Despite strong generalization capabilities, Vision-Language-Action (VLA) models remain constrained by the high cost of expert demonstrations and insufficient real-world interaction. While online reinforcement learning (RL) has shown promise in improving execution accuracy and efficiency in robotic manipulation, applying RL to VLA manipulation in real-world settings is still hindered by low exploration efficiency and a restricted exploration space. Through systematic real-world experiments, we observe that the effective exploration space of RL is closely tied to the trajectory distribution induced during Supervised Fine-Tuning (SFT). This constraint introduces a dual bottleneck: (1) it limits the set of states that can be reliably explored, and (2) it substantially reduces online RL efficiency, even with human intervention. Motivated by this observation, we propose TwinRL, a digital twin-real world collaborative RL framework that leverages digital twins as exploration amplifiers and guides for efficient post-training. TwinRL performs efficient and parallel online RL rollouts within the digital twin to enable sim-to-real guided exploration, improving the convergence speed of real-world RL. By across four tasks, TwinRL converges faster to online RL and approaches 100% success in both in-distribution regions covered by real-world demonstrations and out-of-distribution regions, delivering at least a 30% speedup over prior real-world RL methods and requiring only about 20 minutes on average across four tasks.
