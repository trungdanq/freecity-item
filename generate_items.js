const fs = require('fs');

// Read the config file
const configContent = fs.readFileSync('sh_config.lua', 'utf8');

// Extract items from the config
const items = [];
const itemRegex = /{item = "([^"]+)", label = "([^"]+)", itemType = "([^"]+)"/g;
let match;

while ((match = itemRegex.exec(configContent)) !== null) {
    const item = match[1];
    const label = match[2];
    const itemType = match[3];
    
    // Determine category based on item name
    let category;
    if (item.startsWith('jacket_m_')) {
        category = 'ao-nam';
    } else if (item.startsWith('jacket_f_')) {
        category = 'ao-nu';
    } else if (item.startsWith('pants_m_')) {
        category = 'quan-nam';
    } else if (item.startsWith('pants_f_')) {
        category = 'quan-nu';
    } else if (item.startsWith('shoes_m_')) {
        category = 'giay-nam';
    } else if (item.startsWith('shoes_f_')) {
        category = 'giay-nu';
    } else if (item.startsWith('hat_m_')) {
        category = 'mu-nam';
    } else if (item.startsWith('hat_f_')) {
        category = 'mu-nu';
    } else if (item.startsWith('glasses_m_')) {
        category = 'kinh-nam';
    } else if (item.startsWith('watch_m_')) {
        category = 'dongho-nam';
    } else if (item.startsWith('watch_f_')) {
        category = 'dongho-nu';
    } else if (item.startsWith('earrings_m_')) {
        category = 'bongtai-nam';
    } else if (item.startsWith('earrings_f_')) {
        category = 'bongtai-nu';
    } else if (item.startsWith('bracelet_m_')) {
        category = 'vongtay-nam';
    } else if (item.startsWith('bracelet_f_')) {
        category = 'vongtay-nu';
    } else if (item.startsWith('chain_m_')) {
        category = 'co-nam';
    } else if (item.startsWith('chain_f_')) {
        category = 'co-nu';
    } else if (item.startsWith('undershirt_f_')) {
        category = 'quantrong-nu';
    }
    
    if (category) {
        items.push({ item, label, category, itemType });
    }
}

// Extract UpgradeableItems block
const upgradeableItemsRegex = /UpgradeableItems\s*=\s*{([\s\S]*?)},\s*UILocales/m;
const upgradeableMatch = upgradeableItemsRegex.exec(configContent);
if (upgradeableMatch) {
  const upgradeableBlock = upgradeableMatch[1];
  const bagItemRegex = /{item = "([^"]+)", label = "([^"]+)", itemType = "([^"]+)"/g;
  let bagMatch;
  while ((bagMatch = bagItemRegex.exec(upgradeableBlock)) !== null) {
    const item = bagMatch[1];
    const label = bagMatch[2];
    const itemType = bagMatch[3];
    items.push({ item, label, category: 'bag', itemType });
  }
}

// Generate JavaScript array
const jsArray = `const items = ${JSON.stringify(items, null, 2)};`;

// Write to a new file
fs.writeFileSync('items.js', jsArray);
