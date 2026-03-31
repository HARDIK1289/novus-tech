const rateLimitMap = new Map();

export function rateLimiter(ip, userAgent, limit = 5, windowMs = 60 * 1000) {
  const now = Date.now();
  const key = `${ip}-${userAgent}`;

  // cleanup old entries (prevents memory leak)
  for (const [k, v] of rateLimitMap) {
    if (now - v.startTime > windowMs * 2) {
      rateLimitMap.delete(k);
    }
  }

  if (!rateLimitMap.has(key)) {
    rateLimitMap.set(key, { count: 1, startTime: now });
    return true;
  }

  const data = rateLimitMap.get(key);

  if (now - data.startTime > windowMs) {
    rateLimitMap.set(key, { count: 1, startTime: now });
    return true;
  }

  if (data.count >= limit) {
    return false;
  }

  data.count += 1;
  return true;
}