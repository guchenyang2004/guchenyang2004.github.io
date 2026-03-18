---
id: icra2025-sliceocc
title: "SliceOcc: Indoor 3D Semantic Occupancy Prediction with Vertical Slice Representation"
authors: [Jiaming Liu, Hao Chen, Chenyang Gu, Shanghang Zhang]
venue: ICRA
venueType: conference
year: 2025
status: accepted
isFirstAuthor: false
isCorrespondingAuthor: false
featuredImage: /images/publications/sliceocc.png
links:
  arxiv: "https://arxiv.org/pdf/2501.16684"
  code: "https://github.com/NorthSummer/SliceOcc"
---
三维语义占据预测是感知领域的关键任务，需要同时理解场景几何与语义，在理解三维场景方面发挥重要作用，在机器人视觉感知和自动驾驶等多种应用中具有巨大潜力。许多现有工作采用鸟瞰图（BEV）和三视角（TPV）等基于平面的表示方法，旨在简化三维场景复杂度同时保留关键物体信息，从而促进高效场景表示。然而，在遮挡频繁的密集室内环境中，简单套用这些基于平面的方法往往难以捕获全局语义占据，最终导致模型性能下降。本文提出一种新的垂直切片表示，沿垂直轴划分场景，将空间点特征投影到最近的一对平行平面上。为利用这些切片特征，本文提出SliceOcc，一种专为室内三维语义占据预测设计的基于RGB相机的模型。SliceOcc利用成对切片查询获取场景的切片特征，将这些平面特征融合形成全局场景表示用于室内占据预测。在EmbodiedScan数据集上的实验结果表明，SliceOcc在81个室内类别上达到15.45%的mIoU，在基于RGB相机的模型中创下新的最优室内三维语义占据预测性能。
