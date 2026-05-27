export type ThreatType =
  | "XSS" | "SQLI" | "CMDI" | "TEMPLATE" | "SSRF" | "CSRF" | "NONE";

export interface ThreatReport {
  threat: ThreatType;
  score: number;
  sanitized: string;
  blocked: boolean;
}

const XSS_PATTERNS = [
  /<script[\s\S]*?>[\s\S]*?<\/script>/gi,
  /on\w+\s*=\s*["']?[^"'\s>]+["']?/gi,
  /javascript\s*:/gi,
  /<iframe[\s\S]*?>/gi,
  /<img[\s\S]*?onerror\s*=/gi,
  /eval\s*\(/gi,
  /document\.cookie/gi,
  /alert\s*\(/gi,
  /<svg[\s\S]*?onload\s*=/gi,
];

const SQLI_PATTERNS = [
  /('|")\s*(OR|AND)\s+['"]?\w+['"]?\s*=\s*['"]?\w+['"]?/i,
  /--\s*$/m,
  /'.*\bOR\b.*'='.*'/i,
  /\bEXEC\s+xp_cmdshell\b/i,
  /\bINTO\s+OUTFILE\b/i,
  /\bUNION\s+(ALL\s+)?SELECT\b/i,
];

const CMDI_PATTERNS = [
  /[;&|`$]/,
  /\brm\s+-rf\b/i,
  /\bwget\b/i,
  /\bcurl\s+-[oO]/i,
  /\bchmod\b/i,
  /\bchown\b/i,
  /\bsudo\b/i,
  /\bshutdown\b/i,
  /\breboot\b/i,
  /\bpasswd\b/i,
  />\s*\/dev\//i,
  /\$\{.*\}.*/,
  /`.*`/,
];

const TEMPLATE_PATTERNS = [
  /\{\{.*?\}\}/,
  /\{%\s*(include|extends|block|if|for|set)\s/i,
  /#\{.*?\}/,
  /\$\{.*?\}/,
  /\{\/\*.*?\*\/\}/,
  /<%=?\s*.*?\s*%>/,
];

const SSRF_PATTERNS = [
  /https?:\/\/(localhost|127\.0\.0\.1|0\.0\.0\.0|10\.\d+\.\d+\.\d+|172\.(1[6-9]|2\d|3[01])\.\d+\.\d+|192\.168\.\d+\.\d+)/i,
  /https?:\/\/169\.254\./i,
  /file:\/\/\//i,
  /dict:\/\//i,
  /gopher:\/\//i,
];

const CSRF_PATTERNS = [
  /<form[\s\S]*?action\s*=\s*["']https?:\/\/[^"']*["'][\s\S]*?<\/form>/gi,
  /<a[\s\S]*?href\s*=\s*["']https?:\/\/[^"']*["'][\s\S]*?>/gi,
];

export function sanitizeInput(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;");
}

export function analyzeThreat(input: string): ThreatReport {
  const sanitized = sanitizeInput(input);

  for (const pattern of XSS_PATTERNS) {
    if (pattern.test(input)) {
      return { threat: "XSS", score: 1.0, sanitized, blocked: true };
    }
  }

  for (const pattern of SQLI_PATTERNS) {
    if (pattern.test(input)) {
      return { threat: "SQLI", score: 0.95, sanitized, blocked: true };
    }
  }

  for (const pattern of CMDI_PATTERNS) {
    if (pattern.test(input)) {
      return { threat: "CMDI", score: 0.9, sanitized, blocked: true };
    }
  }

  for (const pattern of TEMPLATE_PATTERNS) {
    if (pattern.test(input)) {
      return { threat: "TEMPLATE", score: 0.85, sanitized, blocked: true };
    }
  }

  for (const pattern of SSRF_PATTERNS) {
    if (pattern.test(input)) {
      return { threat: "SSRF", score: 0.8, sanitized, blocked: true };
    }
  }

  for (const pattern of CSRF_PATTERNS) {
    if (pattern.test(input)) {
      return { threat: "CSRF", score: 0.75, sanitized, blocked: true };
    }
  }

  return { threat: "NONE", score: 0, sanitized, blocked: false };
}
