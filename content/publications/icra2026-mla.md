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
tagline: "A multisensory language-action model that integrates multimodal sensing for precise forecasting in robotic manipulation."
featuredImage: /images/publications/mla.png
links:
  arxiv: "https://arxiv.org/abs/2509.26642"
  code: "https://github.com/ZhuoyangLiu2005/MLA"
  project: "https://sites.google.com/view/open-mla"
  wechat: "https://mp.weixin.qq.com/s/Da0GlcJLM2eWSTyZpdf4uA"
---
Vision-language-action models (VLAs) have shown generalization capabilities in robotic manipulation tasks by inheriting from vision-language models (VLMs) and learning action generation. Most VLA models focus on interpreting vision and language for discrete actions, whereas most perceive and interact within the spatial-physical world. This gap highlights the need for a comprehensive understanding of robotic-specific multisensory information, which is crucial for achieving complete and contact-rich control. To this end, we introduce a multisensory language-action (MLA) model that collaboratively perceives heterogeneous sensory modalities and predicts future multisensory objectives to facilitate physical world modeling. Specifically, to enhance perceptual representations, we propose an encoder-free multimodal alignment scheme that innovatively repurposes the large language model itself as a perception module, directly interpreting multimodal cues by attending 2D images, 3D point clouds, and tactile tokens through positional correspondence. To further enhance MLA's understanding of physical dynamics, we design a future multisensory generation post-training strategy that enables it to reason about semantic, geometric, and interaction information, providing more robust conditions for action generation. For evaluation, the MLA model outperforms the previous state-of-the-art 2D and 3D VLA methods by 12% and 24% on complex contact-rich real-world tasks, respectively, while also demonstrating improved generalization to unseen objects and backgrounds.
