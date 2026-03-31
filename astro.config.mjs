// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom';

export default defineConfig({
  adapter: cloudflare(),
  integrations: [
    starlight({
      plugins: [starlightImageZoom()],
      title: 'DevToolKit Docs',
      description:
        'Documentation for DevToolKit — 25+ browser-based developer tools and the devtoolkit-mcp MCP server.',
      logo: {
        src: './src/assets/logo.svg',
        replacesTitle: false,
      },
      social: [
        { label: 'GitHub', icon: 'github', href: 'https://github.com/emtyty/devtool' }
      ],
      editLink: {
        baseUrl: 'https://github.com/emtyty/devtool/edit/main/docs/',
      },
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        // ── GETTING STARTED ─────────────────────────────────────────────
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', slug: 'getting-started/introduction' },
            { label: 'Quick Start',  slug: 'getting-started/quick-start' },
            { label: 'Philosophy',   slug: 'getting-started/philosophy' },
            { label: 'Contributing', slug: 'getting-started/contributing' },
          ],
        },

        // ── TOOL GUIDES ─────────────────────────────────────────────────
        {
          label: 'Tool Guides',
          items: [
            {
              label: 'Format & Parse',
              collapsed: true,
              items: [
                { label: 'Smart Detector',        slug: 'tools/smart-detector' },
                { label: 'Data Formatter',        slug: 'tools/data-formatter' },
                { label: 'List Cleaner',          slug: 'tools/list-cleaner' },
                { label: 'SQL Formatter',         slug: 'tools/sql-formatter' },
                { label: 'JSON Tools',            slug: 'tools/json-tools' },
                { label: 'JSON Extractor',        slug: 'tools/json-extractor' },
                { label: 'Markdown Preview',      slug: 'tools/markdown-preview' },
                { label: 'Stack Trace Formatter', slug: 'tools/stack-trace-formatter' },
              ],
            },
            {
              label: 'Generate & Convert',
              collapsed: true,
              items: [
                { label: 'Mock Data Generator',       slug: 'tools/mock-data-generator' },
                { label: 'UUID / ULID Generator',     slug: 'tools/uuid-generator' },
                { label: 'Epoch Converter',           slug: 'tools/epoch-converter' },
                { label: 'Color Converter',           slug: 'tools/color-converter' },
                { label: 'Cron Builder',              slug: 'tools/cron-builder' },
                { label: 'Diagram Generator',         slug: 'tools/diagram-generator' },
                { label: 'File Converter',            slug: 'tools/file-converter' },
                { label: 'Table Lens',                slug: 'tools/table-lens' },
                { label: 'PDF Editor',                slug: 'tools/pdf-editor' },
              ],
            },
            {
              label: 'Decode & Analyze',
              collapsed: true,
              items: [
                { label: 'JWT Decoder',                slug: 'tools/jwt-decoder' },
                { label: 'Text Tools',                 slug: 'tools/text-tools' },
                { label: 'Text Compare',               slug: 'tools/text-compare' },
                { label: 'Log Analyzer',               slug: 'tools/log-analyzer' },
                { label: 'Network Waterfall Analyzer', slug: 'tools/network-waterfall-analyzer' },
                { label: 'Binary Metadata',            slug: 'tools/binary-metadata' },
                { label: 'Query Plan Viewer',          slug: 'tools/query-plan-viewer' },
                { label: 'CSP Tools',                  slug: 'tools/csp-tools' },
              ],
            },
          ],
        },

        // ── MCP SERVER ──────────────────────────────────────────────────
        {
          label: 'MCP Server',
          items: [
            { label: 'Overview', slug: 'mcp/overview' },
            { label: 'Setup',    slug: 'mcp/setup' },
            { label: 'Why MCP?', slug: 'mcp/why-mcp' },
            {
              label: 'Integrations',
              collapsed: true,
              items: [
                { label: 'Claude Desktop', slug: 'mcp/integrations/claude-desktop' },
                { label: 'Claude Code',    slug: 'mcp/integrations/claude-code' },
                { label: 'Cursor',         slug: 'mcp/integrations/cursor' },
                { label: 'VS Code',        slug: 'mcp/integrations/vscode' },
              ],
            },
            {
              label: 'Tool Reference',
              collapsed: true,
              items: [
                {
                  label: 'Data Transform',
                  collapsed: true,
                  items: [
                    { label: 'repair_json',        slug: 'mcp/tools/repair-json' },
                    { label: 'format_sql',         slug: 'mcp/tools/format-sql' },
                    { label: 'format_list',        slug: 'mcp/tools/format-list' },
                    { label: 'clean_list',         slug: 'mcp/tools/clean-list' },
                    { label: 'generate_mock_data', slug: 'mcp/tools/generate-mock-data' },
                    { label: 'csv_transform',      slug: 'mcp/tools/csv-transform' },
                    { label: 'yaml_json',          slug: 'mcp/tools/yaml-json' },
                    { label: 'json_to_types',      slug: 'mcp/tools/json-to-types' },
                    { label: 'generate_diagram',   slug: 'mcp/tools/generate-diagram' },
                  ],
                },
                {
                  label: 'Decode & Parse',
                  collapsed: true,
                  items: [
                    { label: 'decode_jwt',    slug: 'mcp/tools/decode-jwt' },
                    { label: 'parse_cron',    slug: 'mcp/tools/parse-cron' },
                    { label: 'convert_epoch', slug: 'mcp/tools/convert-epoch' },
                    { label: 'convert_color', slug: 'mcp/tools/convert-color' },
                    { label: 'url_parse',     slug: 'mcp/tools/url-parse' },
                    { label: 'http_status',   slug: 'mcp/tools/http-status' },
                  ],
                },
                {
                  label: 'Crypto & Random',
                  collapsed: true,
                  items: [
                    { label: 'hash_text',         slug: 'mcp/tools/hash-text' },
                    { label: 'encode_decode',     slug: 'mcp/tools/encode-decode' },
                    { label: 'uuid_generate',     slug: 'mcp/tools/uuid-generate' },
                    { label: 'password_generate', slug: 'mcp/tools/password-generate' },
                  ],
                },
                {
                  label: 'Dev Utilities',
                  collapsed: true,
                  items: [
                    { label: 'regex_test',          slug: 'mcp/tools/regex-test' },
                    { label: 'number_base_convert', slug: 'mcp/tools/number-base-convert' },
                    { label: 'diff_text',           slug: 'mcp/tools/diff-text' },
                    { label: 'string_case',         slug: 'mcp/tools/string-case' },
                    { label: 'ip_subnet',           slug: 'mcp/tools/ip-subnet' },
                    { label: 'timestamp_calc',      slug: 'mcp/tools/timestamp-calc' },
                  ],
                },
                {
                  label: 'Smart Detection',
                  collapsed: true,
                  items: [
                    { label: 'detect_content', slug: 'mcp/tools/detect-content' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
  // Uncomment for GitHub Pages subpath deployment:
  // base: '/devtool',
});
