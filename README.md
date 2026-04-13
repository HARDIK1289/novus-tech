# Contact Form System - NovusTech

## 📋 Project Overview

This is a **full-stack contact form system** for the NovusTech website. It allows users to submit contact requests through a form interface, with comprehensive security features, validation, email notifications, and database persistence.

The system is built with **Next.js 16**, **MongoDB**, **Resend Email Service**, and implements multiple layers of security including:
- Input validation (Zod schema)
- Rate limiting (IP + User Agent based)
- HTML sanitization
- Bot detection
- Duplicate submission prevention
- Email notifications

---

## 📁 File Structure

```
app/api/contact/
├── route.js              # Main API handler for POST requests
├── README.md             # This documentation file

Key Supporting Files:
app/contact/
├── page.js              # Frontend contact form component

models/
├── contact.js           # MongoDB schema for contact submissions

validators/
├── contact.validator.js # Zod validation schema

lib/
├── mailer.js            # Email sending service (Resend)
├── mongodb.js           # MongoDB connection handler
├── rateLimiter.js       # Rate limiting middleware
└── getClientIp.js       # Client IP extraction utility
```

---

## 🔄 How It Works (Data Flow)

### Frontend Flow (Contact Form)

1. **User submits form** at `/contact` page
2. **Form data captured**: name, email, message
3. **Framer Motion animations** provide smooth UI transitions
4. **Success/Error states** displayed to user

### Backend Flow (API Handler)

```
POST Request to /api/contact
         ↓
1. Database Connection (dbConnect)
         ↓
2. Extract Client IP & User Agent
         ↓
3. Bot Detection Check
         ↓
4. Rate Limiting (stricter for bots)
         ↓
5. Input Validation (Zod schema)
         ↓
6. HTML Sanitization (remove malicious content)
         ↓
7. Post-Sanitization Validation
         ↓
8. Duplicate Check (same email + message)
         ↓
9. Save to MongoDB
         ↓
10. Send Email Notification (non-blocking)
         ↓
Return: { success: true, data: newContact }
```

---

## 📄 File Details & Functions

### 1. **route.js** (Main API Handler)
**Path**: `app/api/contact/route.js`

**Purpose**: Handles POST requests to `/api/contact` endpoint

**Key Functions**:

- **`isBot(userAgent)`**
  - Simple bot detection based on user agent string
  - Detects: curl, wget, python, node-fetch
  - Bots get stricter rate limit (2 requests/min vs 5 for humans)

- **`POST(req)`**
  - Main request handler
  - Orchestrates validation, sanitization, and storage
  - Returns JSON responses

---

## 📁 Full Project Structure

```
eslint.config.mjs
jsconfig.json
next.config.mjs
package.json
postcss.config.mjs
README.md
app/
    globals.css
    layout.js
    page.js
    about/
        page.js
    admin/
        page.js
    api/
        route.js
        contact/
            route.js
    contact/
        page.js
    pricing/
        page.js
    services/
        page.js
components/
    sections/
        Footer.js
        Navbar.js
    ui/
        ParticlesBackground.js
lib/
    getClientIp.js
    mailer.js
    mongodb.js
    rateLimiter.js
models/
    contact.js
public/
validators/
    contact.validator.js
```

**Response Codes**:
- `201`: Success - contact saved and email sent
- `400`: Invalid input or duplicate submission
- `429`: Rate limit exceeded
- `500`: Server error

**Error Handling**:
- Email sending is non-blocking (won't fail the request if email fails)
- All errors logged to console for debugging

---

### 2. **contact.js** (MongoDB Schema)
**Path**: `models/contact.js`

**Purpose**: Defines the Contact document structure in MongoDB

**Schema Fields**:

```javascript
{
  name: String (required, max 60 chars),
  email: String (required),
  message: String (required),
  ip: String (client IP address),
  status: Enum ['new', 'contacted', 'closed'],
  timestamps: true  // Adds createdAt & updatedAt
}
```

**Status Field Usage** (for business tracking):
- `new`: Freshly received
- `contacted`: Team has responded
- `closed`: Resolved

---

### 3. **contact.validator.js** (Input Validation)
**Path**: `validators/contact.validator.js`

**Purpose**: Define validation rules using Zod schema

**Validation Rules**:
```
name: 
  - Type: String
  - Minimum: 2 characters
  - Maximum: 60 characters

email:
  - Type: String
  - Format: Valid email pattern

message:
  - Type: String
  - Minimum: 10 characters
```

**Why Zod?** Provides safe parsing without throwing errors, allows graceful error response

---

### 4. **mailer.js** (Email Service)
**Path**: `lib/mailer.js`

**Purpose**: Sends email notifications to admin when contact form submitted

**Service**: Resend (modern email API)

**Email Details**:
- **From**: onboarding@resend.dev (Resend default sender)
- **To**: novustech07@gmail.com (Admin inbox)
- **Reply-To**: User's email (allows admin to reply directly)
- **Subject**: `🚀 New Lead from [User Name]`
- **Format**: Plain text with formatted submission details

**Key Feature**: `reply_to` field allows admins to reply directly to the user

---

### 5. **rateLimiter.js** (Rate Limiting)
**Path**: `lib/rateLimiter.js`

**Purpose**: Prevent spam and abuse by limiting requests per client

**How It Works**:
1. Creates unique key from: `IP-UserAgent`
2. Tracks request count in Map for each key
3. Time window: 60 seconds (configurable)
4. Limits:
   - **Bots**: 2 requests per minute
   - **Humans**: 5 requests per minute
5. Auto-cleanup: Removes old entries after 2× window duration

**Protection Against**:
- Spam bots making rapid requests
- Single IP overwhelming the system
- Different user agents from same IP

---

### 6. **getClientIp.js** (IP Detection)
**Path**: `lib/getClientIp.js`

**Purpose**: Extract client's real IP address from request

**Headers Checked**:
1. `x-forwarded-for` (proxy/load balancer)
   - May contain multiple IPs → extracts first
2. `req.ip` (fallback)
3. `"unknown"` (ultimate fallback)

**Why?** Behind proxies/load balancers, direct IP is unreliable

---

### 7. **mongodb.js** (Database Connection)
**Path**: `lib/mongodb.js`

**Purpose**: Handle MongoDB connection with caching

**Key Features**:
- Global caching prevents multiple connections
- Reuses existing connection on lambda/serverless
- Throws error if `MONGODB_URI` not defined
- Buffer commands disabled for stability

**Connection Flow**:
```
Is connection cached? → Yes → Return cached
                    → No → Create new connection → Cache it
```

---

### 8. **page.js** (Frontend Contact Form)
**Path**: `app/contact/page.js`

**Purpose**: React component that displays the contact form UI

**Key Features**:
- **"use client"** directive (Client-side rendering)
- **Framer Motion** animations:
  - Left panel slides from left
  - Form slides up from bottom
  - Success message scales in
- **Particle background** effect
- **Form State Management**:
  - `idle`: Normal state
  - `loading`: Submitting
  - `success`: Message sent
  - `error`: Failed submission
- **Icons** from lucide-react (Mail, Phone, MapPin, Send, etc.)
- **Glassmorphism** design with backdrop blur effect

**Form Fields**:
1. **Name** - Text input (required)
2. **Email** - Email input (required)
3. **Message** - Textarea 4 rows (required)

**Submit Flow**:
1. Set status to `loading`
2. POST to `/api/contact` with form data
3. If success → Show success message, clear form
4. If error → Show error message

---

## 🔒 Security Features

### 1. **Input Validation**
- Zod schema enforces type and length requirements
- Prevents invalid data from entering system

### 2. **HTML Sanitization**
- Removes HTML tags and attributes from all fields
- Prevents XSS (Cross-Site Scripting) attacks
- `sanitize-html` library with strict config

### 3. **Rate Limiting**
- Limits requests by IP + User Agent
- Different limits for bots vs humans
- Prevents abuse and DoS attacks

### 4. **Bot Detection**
- Simple detection of automated clients
- curl, wget, python, node-fetch identified
- Stricter rate limits applied to bots

### 5. **Duplicate Prevention**
- Checks for exact same email + message combination
- Prevents accidental/intentional duplicate submissions

### 6. **IP Logging**
- Stores client IP for security tracking
- Enables abuse investigation

### 7. **Error Handling**
- Generic error messages to prevent info leakage
- Detailed console logs for debugging (not exposed to user)

---

## 🛠️ Environment Variables Required

Create `.env.local` file in project root with:

```env
# MongoDB Connection
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database

# Resend Email API
RESEND_API_KEY=re_your_resend_api_key_here
```

**Not committed to git** (see `.gitignore` - `.env*`)

---

## 📦 Dependencies Used

```json
{
  "resend": "^6.9.4",           // Email sending
  "mongoose": "^9.1.1",         // MongoDB ODM
  "zod": "for validation",      // Schema validation
  "sanitize-html": "^2.17.2",   // XSS prevention
  "framer-motion": "^12.23.26", // Animations
  "react-hook-form": "^7.69.0", // Form handling
  "lucide-react": "icons/UI"    // Icons
}
```

---

## 🚀 Usage Examples

### Successful Submission
```javascript
// Request
POST /api/contact
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "I'm interested in your services!"
}

// Response (201)
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com",
    "message": "I'm interested in your services!",
    "ip": "192.168.1.1",
    "status": "new",
    "createdAt": "2024-03-31T10:30:00Z",
    "updatedAt": "2024-03-31T10:30:00Z"
  }
}
```

### Invalid Input
```javascript
// Request
POST /api/contact
{
  "name": "J",          // Name too short
  "email": "invalid",   // Not an email
  "message": "Hi"       // Message too short
}

// Response (400)
{
  "success": false,
  "error": "Invalid input"
}
```

### Rate Limited
```javascript
// After 5 requests in 60 seconds from same IP
// Response (429)
{
  "success": false,
  "error": "Too many requests"
}
```

### Duplicate Submission
```javascript
// Same email + message as existing record
// Response (400)
{
  "success": false,
  "error": "Duplicate submission"
}
```

---

## 🧪 Testing the System

### Via Postman/cURL:
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "This is a test message"
  }'
```

### Via Frontend:
1. Go to `http://localhost:3000/contact`
2. Fill in the contact form
3. Click "Send Message"
4. Observe success/error state
5. Check email inbox (novustech07@gmail.com)

---

## 📊 Database Query Examples

### Get all contacts ordered by newest first:
```javascript
db.contacts.find().sort({ createdAt: -1 })
```

### Get new (unread) contacts:
```javascript
db.contacts.find({ status: "new" })
```

### Get contacts from specific email domain:
```javascript
db.contacts.find({ email: /.*@company\.com$/ })
```

### Update status to contacted:
```javascript
db.contacts.updateOne({ _id: ObjectId("...") }, { $set: { status: "contacted" } })
```

---

## 🔧 Configuration Options

### Rate Limiting (in route.js):
```javascript
rateLimiter(
  ip,
  userAgent,
  isBot(userAgent) ? 2 : 5,    // Change limits here
  60 * 1000                     // 60 seconds in milliseconds
)
```

### Sanitization (in route.js):
```javascript
sanitizeHtml(data, {
  allowedTags: [],              // No tags allowed
  allowedAttributes: {}         // No attributes allowed
})
```

### Min/Max lengths (in validators):
```javascript
name: z.string().min(2).max(60)     // Change here
message: z.string().min(10)         // Change here
```

---

## 📋 Checklist Before Deployment

- [ ] MongoDB URI set in `.env.local`
- [ ] Resend API key configured
- [ ] Admin email (novustech07@gmail.com) verified
- [ ] Rate limits appropriate for your traffic
- [ ] Error logging configured
- [ ] Test submission and email delivery
- [ ] Verify IP detection works behind proxy
- [ ] Set up database backups
- [ ] Monitor MongoDB connection pooling

---

## 🐛 Troubleshooting

| Issue | Cause | Solution |
|-------|-------|----------|
| "MONGODB_URI not defined" | Missing env variable | Add to `.env.local` |
| Email not received | Wrong Resend API key | Check `.env.local` |
| Rate limit always triggered | Rate limit too strict | Increase limits in `route.js` |
| Duplicate error on single submit | Message already exists | Check database for duplicates |
| Bot detection false positives | User agent contains keywords | Adjust `isBot()` function |
| IP shows as "unknown" | IP extraction failing | Check proxy headers config |

---

## 📚 References

- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [MongoDB Mongoose](https://mongoosejs.com/)
- [Zod Validation](https://zod.dev/)
- [Resend Email API](https://resend.com/)
- [sanitize-html](https://www.npmjs.com/package/sanitize-html)

---

## 👨‍💼 Admin Notes

- Check contact submissions regularly in MongoDB
- Update `status` field as you handle inquiries
- Monitor for spam patterns (rate limiting, duplicate IPs)
- Reply-to field allows direct response to users
- Consider setting up alerts for new submissions
