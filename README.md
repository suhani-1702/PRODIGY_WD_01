# PRODIGY INFOTECH - Responsive Landing Page

A modern landing page with an adaptive navigation bar that changes colors as you scroll through different sections.

## 📋 What's Inside?

| File | Purpose |
|------|---------|
| `index.html` | Website structure & content |
| `styles.css` | All styling & animations |
| `script.js` | Interactive features |
| `LICENSE` | MIT License |

## ✨ Features

- **Adaptive Navbar** - Colors change based on which section you're viewing
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Smooth Animations** - Beautiful fade-in and hover effects
- **Easy to Edit** - Simple HTML structure with clear sections

## 🚀 How to Use

### 1. Download Files
Download all 4 files (index.html, styles.css, script.js, LICENSE)

### 2. Open in Browser
- Double-click `index.html` 
- That's it! 🎉

### 3. Edit & Customize
Open files in any text editor:
- **index.html** - Change text and content
- **styles.css** - Change colors and design
- **script.js** - Modify functionality

## 📝 How to Edit

### Change Company Name
In `index.html`, find this line:
```html
<div class="logo">PRODIGY <span style="color: #f5576c;">INFOTECH</span></div>
```
Replace with your company name.

### Change Section Content
Find the section you want to edit (Home, Features, Services, etc.) and update the text:
```html
<h2>Your Heading Here</h2>
<p>Your description here</p>
```

### Change Colors
In `styles.css`, search for color values like `#FFD700` (gold) or `#FF6B6B` (red) and change them:
```css
.nav-link:hover {
  color: #YourNewColor;
}
```

### Change Button Text
In `index.html`, find the button:
```html
<button class="nav-btn" onclick="handleGetStarted()">Get Started</button>
```
Change "Get Started" to your text.

## 🎨 Colors Used

- **Gold (#FFD700)** - Hover color on dark sections
- **Red (#FF6B6B)** - Hover color on light sections  
- **Blue (#3B5BDB)** - Primary color

## 📱 Device Support

✅ Works on:
- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## ⚙️ How It Works

The navbar automatically:
1. Becomes visible with glass effect when you scroll down
2. Changes text color based on section background
3. Shows smooth animations on hover

All of this happens through JavaScript in `script.js`.

## 🔧 File Connections

```
index.html (main file)
    ├─ Links to → styles.css
    ├─ Links to → script.js
    └─ Uses → Font Awesome icons (online)
```

When you open `index.html`, it automatically loads the CSS and JavaScript files.

## 📞 Customizing Contact Button

The "Get Started" and "Contact Us" buttons currently show an alert message.

To link to your email:
In `script.js`, find:
```javascript
function handleGetStarted() {
  alert('Thank you for your interest! Contact us at info@prodigyinfotech.com');
}
```

Replace with:
```javascript
function handleGetStarted() {
  window.location.href = 'mailto:your-email@example.com';
}
```

Or link to a contact page:
```javascript
function handleGetStarted() {
  window.location.href = 'contact.html';
}
```

## 🐛 Troubleshooting

**Icons not showing?**
- Check internet connection (uses online Font Awesome)
- Clear browser cache and refresh

**Styling looks wrong?**
- Make sure `styles.css` is in the same folder as `index.html`
- Refresh the page (Ctrl+R or Cmd+R)

**JavaScript not working?**
- Make sure `script.js` is in the same folder
- Check browser console for errors (F12)

## 📄 License

MIT License - Free to use and modify. See LICENSE file for details.

## 🚀 Next Steps

1. **Download** all files
2. **Open** index.html in your browser
3. **Edit** content in your text editor
4. **Upload** to GitHub or your web host

## 📚 Need Help?

- Check the comments in each file
- Edit one thing at a time to learn
- Use browser's Developer Tools (F12) to inspect elements

---

**Enjoy your new landing page! 🎉**
