---
id: icra2026-mla
title: "MLA: A Multisensory Language-Action Model for Multimodal Integration and Forecasting in Robotic Manipulation"
authors: [Zhuoyang Liu, Jiaming Liu, Jiadong Xu, Nuowei Han, Chenyang Gu, Hao Chen, Kaichen Zhou, Renrui Zhang, Kai Chin Hsieh, Kun Wu, Zhengping Che, Jian Tang, Shanghang Zhang]
venue: ICRA
venueType: conference
year: 2026
status: accepted
isFirstAuthor: false
isCorrespondingAuthor: false
featuredImage: /images/publications/mla.png
links:
  arxiv: "https://arxiv.org/abs/2509.26642"
  code: "https://github.com/ZhuoyangLiu2005/MLA"
  project: "https://sites.google.com/view/open-mla"
  wechat: "https://mp.weixin.qq.com/s/Da0GlcJLM2eWSTyZpdf4uA"
---
视觉语言动作模型（VLAs）通过继承视觉语言模型（VLMs）并学习动作生成，在机器人操控任务中展现出泛化能力。然而，大多数VLA模型聚焦于为离散动作解释视觉和语言，而机器人实际上需要在空间物理世界中感知和交互。这一差距凸显了对机器人特有多感官信息进行全面理解的必要性，这对于实现完整的接触密集型控制至关重要。为此，本文提出多感官语言动作（MLA）模型，协作感知异构感官模态，并预测未来多感官目标以促进物理世界建模。具体而言，本文提出无编码器的多模态对齐方案，创新地将大语言模型本身作为感知模块，通过位置对应直接解读多模态线索，融合2D图像、3D点云和触觉token。为进一步增强MLA对物理动态的理解，本文设计未来多感官生成后训练策略，使其能够推理语义、几何和交互信息，为动作生成提供更鲁棒的条件。在评估中，MLA在复杂接触密集型真实任务上分别超越此前最优2D和3D VLA方法12%和24%，同时对未见物体和背景展现出更好的泛化能力。
