import { useEffect } from "react";

interface SeoOptions {
  title: string;
  description?: string;
}

function setMeta(selector: string, attr: string, value: string) {
  const node = document.querySelector(selector);
  if (node) node.setAttribute(attr, value);
}

export function useSeo({ title, description }: SeoOptions) {
  useEffect(() => {
    document.title = title;
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[name="twitter:title"]', "content", title);

    if (description) {
      setMeta('meta[name="description"]', "content", description);
      setMeta('meta[property="og:description"]', "content", description);
      setMeta('meta[name="twitter:description"]', "content", description);
    }

    setMeta('meta[property="og:url"]', "content", window.location.href);
  }, [title, description]);
}
