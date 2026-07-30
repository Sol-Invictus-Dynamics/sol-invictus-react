import { useLayoutEffect } from "react";

// Injects a page's stylesheet(s) into <head> while the page is mounted and
// removes them on unmount. This mirrors the original multi-page site exactly:
// each page loads only the stylesheets its original HTML linked, in the same
// order, so there is no cross-page CSS bleed in the single-page app.
//
// `id`  - unique key for the page (used for the <style data-page> marker)
// `css` - CSS text, or an array of CSS texts concatenated in load order
export function usePageStyles(id, css) {
  useLayoutEffect(() => {
    const text = Array.isArray(css) ? css.join("\n") : css;
    const el = document.createElement("style");
    el.setAttribute("data-page", id);
    el.textContent = text;
    document.head.appendChild(el);
    return () => {
      if (el.parentNode) el.parentNode.removeChild(el);
    };
    // css is a module-level constant per page, so id alone identifies it.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
}

// Sets document.title while mounted (kept simple — no restore needed since the
// next page sets its own title).
export function usePageTitle(title) {
  useLayoutEffect(() => {
    if (title) document.title = title;
  }, [title]);
}
