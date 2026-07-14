---
id: acmmm2026-deepvision-vla
title: "Look Before Acting: Enhancing Vision Foundation Representations for Vision-Language-Action Models"
authors: [Yulin Luo*, Hao Chen*, Zhuangzhe Wu*, Bowen Sui*, Jiaming Liu*, Chenyang Gu, Zhuoyang Liu, Qiuxuan Feng, Jiale Yu, Shuo Gu, Peng Jia, Pheng-Ann Heng, Shanghang Zhang]
venue: ACM MM
venueType: conference
year: 2026
acceptanceDate: "2026-07-14"
status: accepted
isFirstAuthor: false
isCorrespondingAuthor: false
tagline: "DeepVision-VLA strengthens visual grounding by injecting multi-level vision features into deeper VLA layers and pruning task-irrelevant visual tokens."
keywords: [VLA, Visual Grounding, Vision Foundation Model, Robot Manipulation]
featuredImage: "https://deepvision-vla.github.io/static/images/social_preview.png"
links:
  paper: "https://deepvision-vla.github.io/static/pdfs/paper.pdf"
  arxiv: "https://arxiv.org/abs/2603.15618"
  project: "https://deepvision-vla.github.io/"
---
Vision-Language-Action (VLA) models have recently emerged as a promising paradigm for robotic manipulation, in which reliable action prediction critically depends on accurately interpreting and integrating visual observations conditioned on language instructions. Although recent works have sought to enhance the visual capabilities of VLA models, most approaches treat the LLM backbone as a black box, providing limited insight into how visual information is grounded into action generation. Therefore, we perform a systematic analysis of multiple VLA models across different action-generation paradigms and observe that sensitivity to visual tokens progressively decreases in deeper layers during action generation. Motivated by this observation, we propose DeepVision-VLA, built on a Vision-Language Mixture-of-Transformers (VL-MoT) framework. This framework enables shared attention between the vision foundation model and the VLA backbone, injecting multi-level visual features from the vision expert into deeper layers of the VLA backbone to enhance visual representations for precise and complex manipulation. In addition, we introduce Action-Guided Visual Pruning (AGVP), which leverages shallow-layer attention to prune irrelevant visual tokens while preserving task-relevant ones, reinforcing critical visual cues for manipulation with minimal computational overhead. DeepVision-VLA outperforms prior state-of-the-art methods by 9.0% and 7.5% on simulated and real-world tasks, respectively, providing new insights for the design of visually enhanced VLA models.
