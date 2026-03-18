---
id: cvpr2026-manualvla
title: "ManualVLA: A Unified VLA Model for Chain-of-Thought Manual Generation and Robotic Manipulation"
authors: [Chenyang Gu*, Jiaming Liu*, Hao Chen*, Runzhong Huang*, Qingpo Wuwu, Zhuoyang Liu, Xiaoqi Li, Ying Li, Renrui Zhang, Peng Jia, Pheng-Ann Heng, Shanghang Zhang]
coFirstAuthors: [Chenyang Gu, Jiaming Liu, Hao Chen, Runzhong Huang]
venue: CVPR
venueType: conference
year: 2026
status: accepted
isFirstAuthor: true
isCorrespondingAuthor: false
specialBadges: ["First Author"]
keywords: ["VLA", "Chain-of-Thought", "Manual Generation", "Robotic Manipulation"]
tagline: "A unified VLA model that generates chain-of-thought manuals to guide step-by-step robotic manipulation."
emoji: "🔥"
featuredImage: /images/publications/manualvla.png
links:
  arxiv: "https://arxiv.org/pdf/2512.02013"
  project: "https://sites.google.com/view/maunalvla/"
  wechat: "https://mp.weixin.qq.com/s/5d8G8SHTagcJO8pKRZpI6A"
---
Vision-Language-Action (VLA) models have recently emerged, demonstrating strong generalization in robotic scene understanding and manipulation. However, when confronted with long-horizon tasks that require defined goal states, such as LEGO assembly or object rearrangement, existing VLA models still fall short in coordinating high-level planning with precise manipulation. Therefore, we aim to endow a VLA model with the capability to infer the "how" process from the "what" outcomes, transforming predetermined final goals into executable procedures. In this paper, we introduce ManualVLA, a unified VLA framework built upon a Mixture-of-Transformers (MoT) architecture, enabling coherent collaboration between multimodal manual generation and action execution. Unlike prior VLA methods that directly map sensory inputs to actions, we first equip ManualVLA with a planning expert that generates intermediate manuals consisting of images, position prompts, and textual instructions. Building upon this multimodal procedural manual, we develop a Manual Chain-of-Thought (ManualCoT) reasoning process that feeds them into the action expert, where each manual step provides explicit control conditions for precise execution. Furthermore, a cross-task shared attention mechanism between the two experts enables long-context interactions between manual generation and action generation, providing implicit guidance for coherent manipulation. ManualVLA demonstrates strong real-world performance, achieving an average success rate of 32% higher than the previous hierarchical SOTA baseline.
