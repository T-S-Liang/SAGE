<div align="center">

<img src="https://tsliang.top/SAGE/static/images/sage-logo.webp" alt="SAGE logo" width="180">

# SAGE: Salient Factor Discovery and Generation with Visual Foundation Representations

[![Page](https://img.shields.io/badge/Project-Website-pink?logo=googlechrome&logoColor=white)](https://tsliang.top/SAGE/)
[![Paper](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2609.39635)
[![Code](https://img.shields.io/badge/Code-Awaiting%20Acceptance-orange)](#code-release)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

[Shuang Liang](https://t-s-liang.github.io)<sup>1,2†</sup>,
Lejun Liao<sup>2†</sup>,
[Shiyuan Zhang](https://seanzh30.github.io/)<sup>2,3†</sup>,
Max C. Zhang<sup>2</sup>,
Xiaolong Luo<sup>4</sup>,
Han Wang<sup>1</sup>,
Stefano Anzellotti<sup>2</sup>,
[Yuan Yuan](https://yyuanad.github.io/)<sup>2*</sup>

**Preprint 2026**

<sup>1</sup>The University of Hong Kong, <sup>2</sup>Boston College, <sup>3</sup>University of Virginia, <sup>4</sup>Harvard University

<sup>†</sup>Equal contribution. <sup>*</sup>Corresponding author.

**Discover · Disentangle · Generate**

</div>

> **We will release our code upon the acceptance of our paper.**

---

## 📢 News

- **[2026-Sep-30]** 📄 Our paper is available on [arXiv](https://arxiv.org/abs/2609.39635).

<a name="code-release"></a>

### 🚀 Code Release

We will release our code upon the acceptance of our paper.

- [ ] Code release upon paper acceptance.

---

## 🔥 Highlights

**SAGE** separates shared **common factors** from target-specific **salient factors** in visual foundation representations, connecting contrastive analysis with reference-guided generation.

- ✅ **Subtype discovery without subtype labels**: Learn from background/target dataset membership and uncover digit identities, eyewear styles, and retinal OCT disease subtypes.
- ✅ **High-fidelity reconstruction**: Achieve reconstruction FID of **1.78** on Digits-ImageNet and **1.65** on FFHQ eyeglasses.
- ✅ **Generation from a visual reference**: Use the reference's salient representation to generate new content with the same subtype, without a text description.
- ✅ **Interpretable factor manipulation**: Transfer, remove, and interpolate salient attributes while keeping the common representation fixed.

<div align="center">
<img src="https://tsliang.top/SAGE/static/images/teaser.webp" alt="SAGE overview: reconstruction, subtype discovery, and salient-conditioned generation" width="100%">
</div>

---

## 🧩 Method Overview

SAGE uses a two-stage framework:

1. **Discover common and salient factors.** Learn separate encoders in the spatial latent of a frozen representation autoencoder. Reconstruction, adversarial swapping, sparsity, and cycle consistency encourage informative, distinct factors.
2. **Generate from a salient reference.** Globally max-pool the learned salient representation and use it to condition a diffusion transformer, allowing common content to vary across generated images.

<div align="center">
<img src="https://tsliang.top/SAGE/static/images/stage-one.webp" alt="Stage 1: common and salient factor discovery" width="80%">
<br><br>
<img src="https://tsliang.top/SAGE/static/images/stage-two.webp" alt="Stage 2: salient-conditioned diffusion generation" width="80%">
</div>

---

## 🎨 Visualization

### Reconstruction and Factor Separation

Full, common-only, and salient-only reconstructions visualize what each factor captures.

<div align="center">
<img src="https://tsliang.top/SAGE/static/images/reconstruction.webp" alt="Reconstruction and factor separation on Digits-ImageNet and FFHQ" width="100%">
</div>

### Unsupervised Subtype Discovery

The salient space reveals digit and eyewear subtypes, including finer sunglasses styles and mislabeled images.

<div align="center">
<img src="https://tsliang.top/SAGE/static/images/subtype-discovery.webp" alt="Salient representation visualizations for subtype discovery" width="100%">
</div>

### Attribute Transfer and Removal

Swap salient factors to transfer attributes, or set the salient factor to zero to remove them.

<div align="center">
<img src="https://tsliang.top/SAGE/static/images/attribute-transfer.webp" alt="Digit and eyeglasses attribute transfer and removal" width="100%">
</div>

### Salient-Conditioned Generation

Generate diverse scenes and faces guided by a reference's digit or eyewear subtype. On Digits-ImageNet, subtype accuracy improves from **27.70%** with raw DINOv3 conditioning to **90.48%** with SAGE. On FFHQ, diversity increases while subtype accuracy is slightly lower (**96.6%** vs. **98.5%**).

<div align="center">
<img src="https://tsliang.top/SAGE/static/images/generation.webp" alt="Reference-guided generation with raw DINOv3 features and SAGE salient factors" width="100%">
</div>

More results, including interpolation and retinal OCT experiments, are available on the [project page](https://tsliang.top/SAGE/) and in the [paper](https://arxiv.org/abs/2609.39635).

---

## 🎓 Citation

If you find SAGE useful in your research, please consider citing:

```bibtex
@misc{liang2026sage,
  title={{SAGE}: Salient Factor Discovery and Generation with Visual Foundation Representations},
  author={Liang, Shuang and Liao, Lejun and Zhang, Shiyuan and Zhang, Max C. and Luo, Xiaolong and Wang, Han and Anzellotti, Stefano and Yuan, Yuan},
  year={2026},
  eprint={2609.39635},
  archivePrefix={arXiv},
  primaryClass={cs.CV},
  url={https://arxiv.org/abs/2609.39635}
}
```

---

## 📄 License

This repository is licensed under the [MIT License](LICENSE).

---

## 📧 Contact

For questions, suggestions, or collaboration inquiries:

- **Shuang Liang**: [tsliang2001@gmail.com](mailto:tsliang2001@gmail.com)
- **Project Page**: [SAGE](https://tsliang.top/SAGE/)

---

<div align="center">

**⭐ Star us on GitHub to follow future updates!**

[🌐 Website](https://tsliang.top/SAGE/) | [📄 Paper](https://arxiv.org/abs/2609.39635) | [🚀 Code Release](#code-release)

</div>
