const addPlugin = () => {
  const sppFieldExists = document.querySelector(".spp-field");

  if (!sppFieldExists) {
    const sppField = document.createElement("div");
    sppField.className = "spp-field";

    const sppFieldItem = document.createElement("div");
    sppFieldItem.className = "spp-field-item";
    sppField.appendChild(sppFieldItem);

    const sppFieldPercent = document.createElement("span");
    sppFieldPercent.className = "percent";
    sppFieldPercent.textContent = "СПП:";
    sppFieldItem.appendChild(sppFieldPercent);

    const sppFieldBold = document.createElement("b");
    sppFieldBold.className = "bold";
    sppFieldBold.textContent = "23%";
    sppFieldItem.appendChild(sppFieldBold);

    const underSpp = document.createElement("span");
    underSpp.className = "under";
    underSpp.textContent = "До СПП:";
    sppFieldItem.appendChild(underSpp);

    const underPrice = document.createElement("span");
    underPrice.className = "under-price";
    underPrice.textContent = "990₽";
    sppFieldItem.appendChild(underPrice);

    const priceBlock = document.querySelector(
      ".product-page__price-block.product-page__price-block--aside"
    );

    if (priceBlock) {
      priceBlock.insertAdjacentElement("afterend", sppField);
    }
  }

  const productExists = document.querySelector(".product-container");
  if (!productExists) {
    const productContainer = document.createElement("div");
    productContainer.className = "product-container";

    const productList = document.createElement("div");
    productList.className = "product-list";
    productContainer.appendChild(productList);

    const listHeader = document.createElement("div");
    listHeader.className = "list__header";
    listHeader.textContent = "Раскладка по складам";
    productList.appendChild(listHeader);

    const block = document.querySelector(
      ".product-page__aside-container.j-price-block"
    );

    if (block) {
      block.insertAdjacentElement("afterend", productContainer);
    }
  }
};

const removePlugin = () => {
  const sppFieldExists = document.querySelector(".spp-field");
  if (sppFieldExists) {
    sppFieldExists.remove();
  }
};

chrome.storage.sync.get(["showPlugin"], (result) => {
  if (result.showPlugin) {
    addPlugin();
  }
});

chrome.storage.onChanged.addListener((changes, namespace) => {
  if (changes?.showPlugin) {
    if (changes.showPlugin.newValue) {
      addPlugin();
    } else {
      removePlugin();
    }
  }
});
