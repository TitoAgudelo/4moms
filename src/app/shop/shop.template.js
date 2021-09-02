export default ({ shops }) => {
  return `
    <div id="shops">
      ${shops.map(shop => `
        <div class="shop">
          <p class="shop-title">
            ${shop.name}
            <img src="/assets/Arrow.svg" />
          </p>
          <img class="shop-image" src="${shop.image}" />
        </div>
      `).join('')}
    </div>
  `
}
