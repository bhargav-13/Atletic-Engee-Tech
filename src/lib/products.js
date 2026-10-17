// Every IMG_* photo in assets/images is treated as one product.
// Drop a new photo in that folder and it shows up on the Product page automatically.
const imageModules = import.meta.glob('../assets/images/IMG_*.{jpeg,jpg,png,webp}', {
  eager: true,
  import: 'default',
});

export const products = Object.entries(imageModules)
  .map(([path, image]) => {
    const fileName = path.split('/').pop().replace(/\.[^.]+$/, '');
    return {
      id: fileName.replace(/^IMG_/, ''),
      ref: fileName,
      image,
    };
  })
  .sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));

export const getProductById = (id) => products.find((p) => p.id === id);

// Neighbours in catalogue order, wrapping around at the ends
export const getAdjacent = (id) => {
  const i = products.findIndex((p) => p.id === id);
  const n = products.length;
  return {
    prev: products[(i - 1 + n) % n],
    next: products[(i + 1) % n],
    more: [1, 2, 3, 4].map((k) => products[(i + k) % n]),
  };
};
