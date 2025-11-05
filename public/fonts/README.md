# Poppins Font - Static Files Setup

## 📁 Font Files Required

You need to download the following Poppins font files and place them in the `public/fonts/` directory:

### Required Files:
- `Poppins-Light.woff2` (300)
- `Poppins-Light.woff` (300)
- `Poppins-Regular.woff2` (400)
- `Poppins-Regular.woff` (400)
- `Poppins-Medium.woff2` (500)
- `Poppins-Medium.woff` (500)
- `Poppins-SemiBold.woff2` (600)
- `Poppins-SemiBold.woff` (600)
- `Poppins-Bold.woff2` (700)
- `Poppins-Bold.woff` (700)

## 🔽 How to Download

### Option 1: Google Fonts Helper (Recommended)
1. Visit: https://gwfh.mranftl.com/fonts/poppins
2. Select charsets: `latin`, `latin-ext`
3. Select styles: `300`, `regular`, `500`, `600`, `700`
4. Click **Download files**
5. Extract and copy `.woff2` and `.woff` files to `public/fonts/`

### Option 2: Manual Download from Google Fonts
1. Visit: https://fonts.google.com/specimen/Poppins
2. Click **Download family**
3. Extract the ZIP file
4. Convert TTF files to WOFF/WOFF2 format using:
   - Online: https://cloudconvert.com/ttf-to-woff2
   - Or use: https://transfonter.org/
5. Place converted files in `public/fonts/`

### Option 3: Direct Links (for quick setup)
You can also download from these CDN links:

**Poppins Light (300)**
- WOFF2: https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLDz8Z1xlFQ.woff2
- WOFF: https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLDz8Z1xlFd0.woff

**Poppins Regular (400)**
- WOFF2: https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJfecg.woff2
- WOFF: https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJfecnFM.woff

**Poppins Medium (500)**
- WOFF2: https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff2
- WOFF: https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLGT9Z1xlFd0.woff

**Poppins SemiBold (600)**
- WOFF2: https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLEj6Z1xlFQ.woff2
- WOFF: https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLEj6Z1xlFd0.woff

**Poppins Bold (700)**
- WOFF2: https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2
- WOFF: https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLCz7Z1xlFd0.woff

## 📂 Final Directory Structure

After downloading, your structure should look like:

```
public/
├── fonts/
│   ├── poppins.css ✅ (already created)
│   ├── Poppins-Light.woff2
│   ├── Poppins-Light.woff
│   ├── Poppins-Regular.woff2
│   ├── Poppins-Regular.woff
│   ├── Poppins-Medium.woff2
│   ├── Poppins-Medium.woff
│   ├── Poppins-SemiBold.woff2
│   ├── Poppins-SemiBold.woff
│   ├── Poppins-Bold.woff2
│   └── Poppins-Bold.woff
└── ...
```

## ✅ After Downloading

Once all files are in place, the font will automatically load from your static files instead of Google Fonts CDN.

## 🧪 Verify Installation

1. Start your dev server: `npm run dev`
2. Open browser DevTools → Network tab
3. Filter by "Font" or search "Poppins"
4. Verify fonts load from `/fonts/` (localhost) not googleapis.com
5. Check that font files return `200` status

## 📊 File Sizes (Approximate)

- WOFF2: ~15-25KB per weight (modern browsers)
- WOFF: ~20-35KB per weight (fallback)
- **Total**: ~200-300KB for all weights

## 🚀 Performance

Using static files provides:
- ✅ No external DNS lookup
- ✅ No CORS issues
- ✅ Faster loading on repeat visits
- ✅ Works offline
- ✅ Full control over caching

---

**Status**: Font CSS file created ✅ | Font files need to be downloaded manually

