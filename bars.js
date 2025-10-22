// Default configuration
const defaultConfig = {
  brand_name: "Barmaso",
  earphone_price: "4500",
  powerbank_price: "8000",
};

// Dialog functions
function openDialog(product) {
  const dialog = document.getElementById(product + "-dialog");
  if (dialog) {
    dialog.style.display = "block";
    switchTab(product, "specs");
  }
}

function closeDialog(product) {
  const dialog = document.getElementById(product + "-dialog");
  if (dialog) {
    dialog.style.display = "none";
  }
}

function switchTab(product, tab) {
  const specsPanel = document.getElementById(product + "-specs");
  const descPanel = document.getElementById(product + "-desc");

  if (specsPanel) specsPanel.style.display = "none";
  if (descPanel) descPanel.style.display = "none";

  const selectedPanel = document.getElementById(product + "-" + tab);
  if (selectedPanel) selectedPanel.style.display = "block";

  const dialog = document.getElementById(product + "-dialog");
  if (dialog) {
    const tabs = dialog.querySelectorAll(".tab");
    tabs.forEach((t) => t.classList.remove("active"));

    const activeTab = tab === "specs" ? tabs[0] : tabs[1];
    if (activeTab) activeTab.classList.add("active");
  }
}

// Close dialog when clicking outside
window.onclick = function (event) {
  if (event.target.classList.contains("dialog")) {
    event.target.style.display = "none";
  }
};

// Render dynamic data
function render(config) {
  const brandTitle = document.getElementById("brand-title");
  const earphonePrice = document.getElementById("earphone-price");
  const powerbankPrice = document.getElementById("powerbank-price");

  if (brandTitle) brandTitle.textContent = config.brand_name || defaultConfig.brand_name;
  if (earphonePrice)
    earphonePrice.textContent = `${config.earphone_price || defaultConfig.earphone_price} MMK`;
  if (powerbankPrice)
    powerbankPrice.textContent = `${config.powerbank_price || defaultConfig.powerbank_price} MMK`;
}

// Initial render
render(defaultConfig);