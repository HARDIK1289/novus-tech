export function getClientIp(req) {
    const forwarded = req.headers.get("x-forwarded-for");
  
    if (forwarded) {
      // sometimes contains multiple IPs → take first
      return forwarded.split(",")[0].trim();
    }
  
    // fallback (not always available in Next.js, but safe)
    return req.ip || "unknown";
  }