// Market items data extracted from market.lua
const all_items = [
    { name: "nhuacay", label: "Nhựa cây", category: "donghe", price: 10 },
    { name: "stone", label: "Đá", category: "donghe", price: 10 },
    { name: "quang", label: "Quặng", category: "donghe", price: 10 },
    { name: "quanghiem", label: "Quặng hiếm", category: "donghe", price: 10 },
    { name: "kimloaibian", label: "Kim loại bí ẩn", category: "donghe", price: 10 },
    { name: "log", label: "Gỗ", category: "donghe", price: 10 },
    { name: "vang", label: "Vàng", category: "donghe", price: 5000 },
    { name: "bac", label: "Bạc", category: "donghe", price: 2000 },
    { name: "bachkim", label: "Bạch kim", category: "donghe", price: 4000 },
    { name: "dangusac", label: "Đá ngũ sắc", category: "donghe", price: 15000 },
    { name: "uncut_diamond", label: "Kim cương thô", category: "donghe", price: 6000 },
    { name: "uncut_emerald", label: "Lục bảo thô", category: "donghe", price: 4500 },
    { name: "uncut_sapphire", label: "Ngọc bích thô", category: "donghe", price: 3000 },
    { name: "gosua", label: "Gỗ Sưa", category: "donghe", price: 4000 },
    { name: "tramhuong", label: "Trầm Hương", category: "donghe", price: 6000 },
    { name: "artificial_bait", label: "Mồi cá", category: "donghe", price: 50 },
    { name: "anchovy", label: "Cá cơm", category: "donghe", price: 250 },
    { name: "trout", label: "Cá hồi chấm", category: "donghe", price: 375 },
    { name: "haddock", label: "Cá tuyết", category: "donghe", price: 375 },
    { name: "salmon", label: "Cá hồi", category: "donghe", price: 475 },
    { name: "grouper", label: "Cá mú", category: "donghe", price: 575 },
    { name: "piranha", label: "Cá răng đao", category: "donghe", price: 750 },
    { name: "red_snapper", label: "Cá hồng vịnh", category: "donghe", price: 800 },
    { name: "mahi_mahi", label: "Cá nục heo cờ", category: "donghe", price: 900 },
    { name: "tuna", label: "Cá ngừ", category: "donghe", price: 5000 },
    { name: "shark", label: "Cá mập", category: "donghe", price: 10000 },
    { name: "iron", label: "Sắt", category: "nguyenlieu", price: 30 },
    { name: "steel", label: "Thép", category: "nguyenlieu", price: 30 },
    { name: "metalscrap", label: "Sắt vụn", category: "nguyenlieu", price: 30 },
    { name: "plastic", label: "Nhựa", category: "nguyenlieu", price: 30 },
    { name: "rubber", label: "Cao su", category: "nguyenlieu", price: 30 },
    { name: "burgershot_bread", label: "Bánh mì", category: "nguyenlieu", price: 30 },
    { name: "burgershot_frozenrings", label: "Hành tây đông lạnh", category: "nguyenlieu", price: 30 },
    { name: "burgershot_frozennuggets", label: "Gà viên đông lạnh", category: "nguyenlieu", price: 30 },
    { name: "burgershot_bigfrozenpotato", label: "Khoai tây đông lạnh", category: "nguyenlieu", price: 30 },
    { name: "burgershot_frozenmeat", label: "Thịt đông lạnh", category: "nguyenlieu", price: 30 },
    { name: "burgershot_sauce", label: "Nước sốt", category: "nguyenlieu", price: 30 },
    { name: "burgershot_cheddar", label: "Phô mai Cheddar", category: "nguyenlieu", price: 30 },
    { name: "burgershot_bigcardboard", label: "Hộp rỗng", category: "nguyenlieu", price: 30 },
    { name: "burgershot_curly", label: "Rau Curly", category: "nguyenlieu", price: 30 },
    { name: "water", label: "Nước", category: "nguyenlieu", price: 30 },
    { name: "sugar", label: "Đường", category: "nguyenlieu", price: 30 },
    { name: "orange", label: "Cam", category: "nguyenlieu", price: 30 },
    { name: "milk", label: "Sữa", category: "nguyenlieu", price: 30 },
    { name: "kem", label: "Kem", category: "nguyenlieu", price: 30 },
    { name: "coffeebeans", label: "Hạt cà phê", category: "nguyenlieu", price: 30 },
    { name: "grape", label: "Nho", category: "nguyenlieu", price: 30 },
    { name: "chanh", label: "Chanh", category: "nguyenlieu", price: 30 },
    { name: "lonrong", label: "Lon rỗng", category: "nguyenlieu", price: 30 },
    { name: "can", label: "Lon rỗng", category: "rac", price: 20 },
    { name: "can", label: "kính", category: "rac", price: 20 },
    { name: "copper", label: "Đồng", category: "rac", price: 20 },
    { name: "aluminum", label: "Nhôm", category: "rac", price: 20 }
];

// Function to display market items grouped by category
function displayMarketItems() {
    const container = document.getElementById('market-items');
    container.innerHTML = '';

    // Group items by category
    const categories = {};
    all_items.forEach(item => {
        if (!categories[item.category]) {
            categories[item.category] = [];
        }
        categories[item.category].push(item);
    });

    // Create sections for each category
    for (const [category, items] of Object.entries(categories)) {
        const section = document.createElement('div');
        section.className = 'category-section';
        
        const title = document.createElement('h2');
        title.className = 'category-title';
        title.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        section.appendChild(title);

        const grid = document.createElement('div');
        grid.className = 'items-grid';

        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'item-card';
            card.innerHTML = `
                <div class="item-name">${item.label}</div>
                <div class="item-price">$${item.price.toLocaleString()}</div>
                <div class="item-category">${item.name}</div>
            `;
            grid.appendChild(card);
        });

        section.appendChild(grid);
        container.appendChild(section);
    }
}

// Initialize the market display when the page loads
document.addEventListener('DOMContentLoaded', displayMarketItems); 