# FreeCity Items Gallery

A static web application to display FreeCity items organized by categories.

## Setup Instructions

1. Make sure you have Node.js installed on your system.

2. Place your images in the `images` folder. The images should be named according to the item IDs in the config file (e.g., `jacket_m_11_1.png`).

3. Place the `sh_config.lua` file in the root directory.

4. Run the following command to generate the items.js file:
   ```bash
   node generate_items.js
   ```

5. Open `index.html` in your web browser to view the gallery.

## Features

- Items are organized by categories (Áo Nam, Áo Nữ, Quần Nam, etc.)
- Responsive grid layout
- Navigation menu for quick access to categories
- Hover effects on items
- Fallback image for missing items

## File Structure

- `index.html` - Main web page
- `items.js` - Generated file containing item data
- `generate_items.js` - Script to generate items.js from sh_config.lua
- `images/` - Directory containing item images
- `assets/ui/siyahadam.png` - Fallback image for missing items

## Categories

- Áo Nam (Men's Jackets)
- Áo Nữ (Women's Jackets)
- Quần Nam (Men's Pants)
- Quần Nữ (Women's Pants)
- Giày Nam (Men's Shoes)
- Giày Nữ (Women's Shoes)
- Mũ Nam (Men's Hats)
- Mũ Nữ (Women's Hats)
- Kính Nam (Men's Glasses) 