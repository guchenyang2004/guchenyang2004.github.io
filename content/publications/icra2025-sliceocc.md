---
id: icra2025-sliceocc
title: "SliceOcc: Indoor 3D Semantic Occupancy Prediction with Vertical Slice Representation"
authors: [Jianing Li, Ming Lu, Hao Wang, Chenyang Gu, Wenzhao Zheng, Li Du, Shanghang Zhang]
venue: ICRA
venueType: conference
year: 2025
status: accepted
isFirstAuthor: false
isCorrespondingAuthor: false
tagline: "Indoor 3D semantic occupancy prediction via a vertical slice representation for efficient spatial scene understanding."
featuredImage: /images/publications/sliceocc.png
links:
  arxiv: "https://arxiv.org/pdf/2501.16684"
  code: "https://github.com/NorthSummer/SliceOcc"
---
3D semantic occupancy prediction is a crucial task in perception, as it requires the simultaneous comprehension of both scene geometry and semantics. It plays a crucial role in understanding 3D scenes and has great potential for various applications, such as robotic vision perception and autonomous driving. Many existing works utilize planar-based representations such as Bird's Eye View (BEV) and Tri-Perspective View (TPV). These representations aim to simplify the complexity of 3D scenes while preserving essential object information, thereby facilitating efficient scene representation. However, in dense indoor environments with prevalent occlusions, trivially applying these planar-based methods often leads to difficulties in capturing global semantic occupancy, ultimately degrading model performance. In this paper, we present a new vertical slice representation that divides the scene along the vertical axis and projects spatial point features onto the nearest pair of parallel planes. To utilize these slice features, we propose SliceOcc, an RGB camera-based model specifically tailored for indoor 3D semantic occupancy prediction. SliceOcc utilizes pairs of slice queries to obtain the slice features of the scene. These planar features are then fused to form a global scene representation, which is employed for indoor occupancy prediction. Experimental results on the EmbodiedScan dataset demonstrate that SliceOcc achieves a mIoU of 15.45% across 81 indoor categories, setting a new state-of-the-art performance among RGB camera-based models for indoor 3D semantic occupancy prediction.
