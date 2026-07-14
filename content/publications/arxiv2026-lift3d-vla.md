---
id: arxiv2026-lift3d-vla
title: "Lift3D-VLA: Lifting VLA Models to 3D Geometry and Dynamics-Aware Manipulation"
authors: [Jiaming Liu, Qingpo Wuwu, Nuowei Han, Hao Chen, Zhuoyang Liu, Fan Fei, Yueru Jia, Chenyang Gu, Yandong Guo, Boxin Shi, Shanghang Zhang]
venue: arXiv
venueType: preprint
year: 2026
month: "07"
preprintDate: "2026-07-07"
status: preprint
isFirstAuthor: false
isCorrespondingAuthor: false
tagline: "Lifts pretrained 2D representations into explicit 3D geometry and dynamics-aware reasoning for temporally coherent VLA manipulation."
keywords: [VLA, 3D Geometry, Physical Dynamics, Robot Manipulation]
links:
  arxiv: "https://arxiv.org/abs/2607.06564"
  project: "https://lift3dvla.github.io/"
---
Recently, Vision-Language-Action (VLA) models have demonstrated strong generalization across diverse tasks. However, effective robotic manipulation in physical environments fundamentally requires geometric understanding and spatial reasoning. While some VLA approaches attempt to incorporate 3D information, they are constrained by limited data availability and geometric information loss in current 3D encoding pipelines, and fail to jointly capture 3D geometry and temporally structured actions in dynamic environments. To address these limitations, we introduce Lift3D-VLA, a unified VLA framework that equips models with explicit 3D point cloud reasoning and enables temporally coherent action generation. First, building upon our previous work Lift3D, an enhanced 2D model-lifting strategy is proposed to geometrically align 3D points with pretrained 2D positional embeddings. Based on explicit 3D inputs, we propose Geometry-Centric Masked Autoencoding (GC-MAE), a dual-objective self-supervised framework that reconstructs the current point cloud while predicting its future geometric evolution. To fully exploit 3D representations, we further design layer-wise temporal action modeling, which leverages multiple layers of the LLM to collaboratively predict action chunks. Across 22 simulated tasks and 8 real-world manipulation tasks, Lift3D-VLA achieves 10.8% and 11.1% higher mean success rates on MetaWorld and RLBench than the best-performing prior VLA methods, and outperforms the strongest real-world baseline by 4 percentage points.
