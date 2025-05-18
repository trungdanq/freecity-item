const fs = require('fs');

// Vietnamese to English item type mapping
const itemTypeMapping = {
    'thường': 'common',
    'hiếm': 'uncommon',
    'tinh anh': 'rare',
    'sử thi': 'legendary',
    'thần thoại': 'mythical'
};

// Read the items.lua file
const itemsLua = fs.readFileSync('items.lua', 'utf8');

// Extract items data using regex
const itemRegex = /\["([^"]+)"\]\s*=\s*{([^}]+)}/g;
const items = [];
let match;

while ((match = itemRegex.exec(itemsLua)) !== null) {
    const itemName = match[1];
    const itemData = match[2];
    
    // Extract item properties
    const labelMatch = itemData.match(/label\s*=\s*"([^"]+)"/);
    const itemTypeMatch = itemData.match(/rarity\s*=\s*"([^"]+)"/);
    const categoryMatch = itemData.match(/category\s*=\s*"([^"]+)"/);
    
    if (labelMatch) {
        // Convert Vietnamese item type to English
        let itemType = 'common'; // default
        if (itemTypeMatch) {
            const vietnameseType = itemTypeMatch[1].toLowerCase();
            itemType = itemTypeMapping[vietnameseType] || 'common';
        }

        items.push({
            item: itemName,
            label: labelMatch[1],
            itemType: itemType,
            category: categoryMatch ? categoryMatch[1] : 'other'
        });
    }
}

// Generate the JavaScript file content
const jsContent = `// Generated items data
window.items = ${JSON.stringify(items, null, 2)};`;

// Write to all_items.js
fs.writeFileSync('all_items.js', jsContent);

console.log(`Generated ${items.length} items in all_items.js`); 