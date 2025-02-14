const products = [
    {
      name: "Laptop",
      price: 1200,
      features: [
        { name: "Processor", description: "Intel Core i7" },
        { name: "RAM", description: "16GB DDR4" },
        { name: "Storage", description: "1TB SSD" },
      ],
    },
    {
      name: "Smartphone",
      price: 800,
      features: [
        { name: "Camera", description: "48MP" },
        { name: "Battery", description: "5000mAh" },
        { name: "Display", description: "6.5 inch AMOLED" },
      ],
    },
    {
      name: "Tablet",
      price: 500,
      features: [
        { name: "Display", description: "10.5 inch" },
        { name: "Processor", description: "Apple A13" },
        { name: "Storage", description: "256GB" },
      ],
    },
  ];

  const filterProducts = products.filter((x) => x.price >= 800);

  console.log(filterProducts);