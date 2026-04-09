

# Rich Formatting for Knowledge Base Articles

## Overview
Switch the KB article body from plain text to Markdown, rendered as HTML with working links, bold text, lists, and line breaks.

## Approach
Use **react-markdown** to render the `body` field as Markdown. This gives you all the formatting you need with zero custom parsing:
- `**bold**` for bold
- `[link text](url)` for URLs
- `- item` or `1. item` for lists
- Blank lines for paragraphs / line breaks

## Changes

### 1. Install `react-markdown`
Add the `react-markdown` package.

### 2. Update `KnowledgeBase.tsx`
- Import `ReactMarkdown` from `react-markdown`
- Replace the plain `<p>{tip.body}</p>` with `<ReactMarkdown>` component
- Configure the link renderer to add `target="_blank"` and `rel="noopener noreferrer"`
- Apply Tailwind prose-like styles for headings, lists, bold, and paragraphs

### 3. Update existing tip content in `knowledge-base.ts`
- Convert any existing `<br />` tags and `\n` patterns to proper Markdown syntax
- No structural changes to the `Tip` interface — `body` stays as a `string`, just written in Markdown now

## Result
You can write tip bodies using standard Markdown. Links open in new tabs automatically. No changes needed to the data structure — just write Markdown in the `body` field.

