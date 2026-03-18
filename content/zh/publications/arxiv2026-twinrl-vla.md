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
featuredImage: /images/publications/twinrl.png
links:
  arxiv: "https://arxiv.org/abs/2602.09023"
  code: "https://github.com/zhourui9813/TwinRL"
  project: "https://sites.google.com/view/twinrl/twinrl"
  wechat: "https://mp.weixin.qq.com/s/XwPdRr1djIX5gaNQ4-k1XQ"
---
尽管视觉语言动作（VLA）模型具有强大的泛化能力，但仍受限于高昂的专家演示成本和不足的真实世界交互。虽然在线强化学习（RL）在提升机器人操控执行准确性和效率方面已展现出潜力，但将RL应用于真实世界VLA操控仍受低探索效率和受限探索空间的制约。通过系统性真实世界实验，本文观察到RL的有效探索空间与有监督微调（SFT）阶段诱导的轨迹分布密切相关。这一约束引入双重瓶颈：(1) 限制了可靠探索的状态集合；(2) 大幅降低在线RL效率，即便有人工干预亦然。受此启发，本文提出TwinRL，一个利用数字孪生作为探索放大器和高效后训练指导的数字孪生-真实世界协作RL框架。TwinRL在数字孪生中进行高效并行在线RL展开，实现仿真引导探索，提升真实世界RL的收敛速度。在四个任务上，TwinRL收敛更快，并在真实演示覆盖的分布内和分布外区域均接近100%成功率，比此前真实世界RL方法至少提速30%，平均每个任务仅需约20分钟。
