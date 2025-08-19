import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';

import 'highlight.js/styles/github-dark.css';

const MarkdownRenderer = ({ children }) => {
    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw, rehypeHighlight]}
        >
            {children}
        </ReactMarkdown>
    );
};

export default MarkdownRenderer;
