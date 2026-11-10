# SAGE project website

The `webpage` branch contains the project page for **SAGE: Salient Factor Discovery and Generation with Visual Foundation Representations** (Preprint 2026).

The implementation repository is [T-S-Liang/SAGE](https://github.com/T-S-Liang/SAGE). Research code remains on `main`; this branch is dedicated to the website.

Paper: [arXiv:2609.39635](https://arxiv.org/abs/2609.39635) · [PDF](https://arxiv.org/pdf/2609.39635).

## Local preview

This is a static website with no build step or third-party runtime dependencies.

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open `http://127.0.0.1:8000`.

## GitHub Pages

In repository **Settings → Pages**, choose **Deploy from a branch**, branch **webpage**, folder **/ (root)**. All assets use relative URLs, including when served under `/SAGE/`.

## Editing

- `index.html`: title, venue, authors, text, tables, resource links, and BibTeX.
- `static/css/style.css`: responsive layout and the green/cream palette inspired by SDPose.
- `static/js/main.js`: accessible BibTeX copying with a manual-copy fallback.
- `static/images/`: web-optimized figures exported from the SAGE paper; the sage plant logo is extracted from the original Figure 1 artwork.

Content and quantitative results are based on the supplied SAGE preprint source. The venue and citation year are set to **Preprint 2026**. The webpage identifies **Yuan Yuan** as the sole corresponding author, as requested. Paper links and BibTeX point to **arXiv:2609.39635**; the PDF is served directly by arXiv.

## Verification checklist

- Check desktop and mobile layouts, navigation anchors, figure links, and Paper PDF.
- Confirm all image paths and dimensions match the committed assets.
- Verify BibTeX copying and keyboard access; the page remains readable without JavaScript.
- Keep venue, citation metadata, and paper content consistent when updating the preprint.

Design reference: [SDPose](https://t-s-liang.github.io/SDPose/) and [Academic Project Page](https://github.com/eliahuhorwitz/Academic-project-page-template). Page code is covered by the repository's MIT license; research figures and paper retain their original attribution.
