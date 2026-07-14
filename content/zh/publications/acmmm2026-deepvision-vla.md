---
id: acmmm2026-deepvision-vla
title: "Look Before Acting: Enhancing Vision Foundation Representations for Vision-Language-Action Models"
authors: [Yulin Luo*, Hao Chen*, Zhuangzhe Wu*, Bowen Sui*, Jiaming Liu*, Chenyang Gu, Zhuoyang Liu, Qiuxuan Feng, Jiale Yu, Shuo Gu, Peng Jia, Pheng-Ann Heng, Shanghang Zhang]
venue: ACM MM
venueType: conference
year: 2026
status: accepted
isFirstAuthor: false
isCorrespondingAuthor: false
tagline: "DeepVision-VLA通过向VLA深层注入多层视觉特征并裁剪与任务无关的视觉标记，增强视觉信息对动作生成的支撑。"
keywords: [VLA, 视觉定位, 视觉基础模型, 机器人操控]
featuredImage: "https://deepvision-vla.github.io/static/images/social_preview.png"
links:
  paper: "https://deepvision-vla.github.io/static/pdfs/paper.pdf"
  arxiv: "https://arxiv.org/abs/2603.15618"
  project: "https://deepvision-vla.github.io/"
---
视觉语言动作（VLA）模型已成为机器人操控的重要范式，其可靠的动作预测依赖于对语言指令条件下视觉观测的准确理解与融合。现有视觉增强方法大多将大语言模型主干视为黑盒，因此难以解释视觉信息如何影响动作生成。本文系统分析了不同动作生成范式下的多种VLA模型，发现模型在生成动作时对视觉标记的敏感度会随层数加深而逐渐下降。基于这一观察，本文提出DeepVision-VLA，并构建视觉语言混合Transformer（VL-MoT）框架，通过视觉基础模型与VLA主干之间的共享注意力，将视觉专家的多层特征注入VLA主干深层，从而增强精细复杂操控所需的视觉表示。此外，本文提出动作引导视觉裁剪（AGVP），利用浅层注意力裁剪无关视觉标记，同时保留与任务相关的关键信息，以较小的计算开销强化操控视觉线索。DeepVision-VLA在仿真任务和真实世界任务上分别超越此前最优方法9.0%和7.5%，为视觉增强VLA模型的设计提供了新的思路。
