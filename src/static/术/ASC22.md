---
title: ASC22记录
category: tech
slug: asc22
date: 2022-1-30
img: pics.asset/MLP_SelfAttention.jpg
---

> 记录一下今年ASC22的一些见闻，可能并不具有指导意义。
>
> <!-- end -->

# 简介

从2017年谷歌发布了transformer结构后，NLP界的军备竞赛就开始了。

<img src="pics.asset/image-20220313194502258.png" alt="image-20220313194502258" style="zoom:33%;" />

## 显存需求

https://zhuanlan.zhihu.com/p/31558973

模型的显存占用主要分为两个部分：模型本身的参数占用，以及模型的输出数据占用。

模型参数占用分为：

* 有参数的层，比如卷积、全连接，`BatchNorm`等等带状态的层（与池化层这样的单纯做运算的层区分）。这些层的空间占用跟它的形状相关。

* 梯度、动量等参数。优化器在更新参数时需要利用梯度信息，如果是带动量的优化器则同时需要保存动量信息，如最简单的动量SGD：
    $$
    v_{t + 1} = \rho v_t + \nabla F(W_t)\\
    W_{t + 1} = W_t - \alpha v_{t + 1}
    $$
    其中的$\nabla F(W_t)$和$v_t$都是需要保存的，这两部分的矩阵大小与参数矩阵是相同的，因此相当于参数大小乘了几倍。

采用`fp16`之后，模型的每个参数都需要占用2个字节（如果`fp32`则是4个字节）。

对于GPT模型而言，占用大小计算方法为：
$$
memory\ cost = parameters \times 16 + activation \times batch\ size\\
activation = seqlen \times hidden\ size
$$
如上公式可以计算一个下界值，还有可能需要额外的空间来存储临时变量等。

# `Infiniband`

