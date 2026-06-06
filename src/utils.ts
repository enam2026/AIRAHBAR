import { Course } from "./types";

/**
 * Cleanly format prices into BDT currency format
 */
export function formatCurrency(amount: number): string {
  return `৳${amount.toLocaleString('en-US')}`;
}

/**
 * Lightweight, safe markdown rendering function for Bengali + English typography.
 * Converts bold (**), bullet points (-), ordered numbers, line-breaks (\n), and headers (###)
 * to animated, visually rich elements with high-contrast Tailwind classes.
 */
export function parseMarkdownToBriefHTML(text: string): string {
  if (!text) return "";

  // Convert HTML escape chars safely
  let html = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Handle Headings (###)
  html = html.replace(/^### (.*?)$/gm, '<h4 class="text-lg font-semibold text-brand-dark mt-4 mb-2 first:mt-0 font-display border-b border-stone-200 pb-1">$1</h4>');
  html = html.replace(/^## (.*?)$/gm, '<h3 class="text-xl font-bold text-brand-dark mt-5 mb-3 first:mt-0 font-display border-b border-stone-300 pb-1">$1</h3>');
  html = html.replace(/^# (.*?)$/gm, '<h2 class="text-2xl font-extrabold text-brand-dark mt-6 mb-4 first:mt-0 font-display">$1</h2>');

  // Handle Bold text (**bold**)
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-brand-blue bg-blue-50/55 px-1 rounded">$1</strong>');

  // Handle bullet list items starting with "-" or "*"
  // We identify lines starting with - or * and convert them.
  const lines = html.split("\n");
  let inList = false;
  const processedLines: string[] = [];

  for (let line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      const content = trimmed.substring(2);
      if (!inList) {
        processedLines.push('<ul class="list-none space-y-2 my-3 pl-1">');
        inList = true;
      }
      processedLines.push(
        `<li class="flex items-start text-stone-700 leading-relaxed font-sans">
          <span class="inline-flex items-center justify-center text-brand-blue mr-2 mt-1.5 shrink-0">
            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span>${content}</span>
        </li>`
      );
    } else {
      if (inList) {
        processedLines.push('</ul>');
        inList = false;
      }
      
      // Handle normal paragraphs with margins
      if (trimmed === "") {
        processedLines.push('<div class="h-2"></div>');
      } else {
        processedLines.push(`<p class="leading-relaxed text-stone-700 text-sm md:text-base my-2 font-sans">${line}</p>`);
      }
    }
  }

  if (inList) {
    processedLines.push('</ul>');
  }

  return processedLines.join("\n");
}
