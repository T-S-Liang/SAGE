"use strict";

const copyButton = document.getElementById("copy-bibtex");
const citation = document.getElementById("bibtex-code");
const copyStatus = document.getElementById("copy-status");

if (copyButton && citation && copyStatus) {
  copyButton.hidden = false;
  copyButton.addEventListener("click", async () => {
    try {
      if (!navigator.clipboard || !window.isSecureContext) {
        throw new Error("Clipboard unavailable");
      }
      await navigator.clipboard.writeText(citation.textContent.trim());
      copyStatus.textContent = "BibTeX copied to clipboard.";
    } catch {
      const selection = window.getSelection();
      if (selection) {
        const range = document.createRange();
        range.selectNodeContents(citation);
        selection.removeAllRanges();
        selection.addRange(range);
      }
      copyStatus.textContent = "Please select the citation and copy it with Ctrl+C or ⌘C.";
      citation.closest("pre").focus();
    }
  });
}
