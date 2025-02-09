import type {Product} from "~/types/product";
import type {CartItem} from "~/types/cart";

export const ProductData: Product[] = [
  {
    id: 1,
    name: "Áo thun nam",
    price: 179000,
    regular_price: 200000,
    status: 1,
    slug: "ao-thun-nam",
    stock: {
      is_in_stock: true,
      quantity: 50
    },
    season: 'Summer',
    configurable_options: [
      {
        attribute_code: "color",
        label: "Màu sắc",
        values: [
          {
            id: 1,
            label: "Đỏ",
            swatch: {
              swatch_link: "https://media.canifa.com/attribute/swatch/images/sa476.webp",
              type: 1
            }
          },
          {
            id: 2,
            label: "Xanh",
            swatch: {
              swatch_link: "https://media.canifa.com/attribute/swatch/images/sl302.webp",
              type: 1
            }
          }
        ]
      },
      {
        attribute_code: "size",
        label: "Kích cỡ",
        values: [
          {
            id: 1,
            label: "M"
          },
          {
            id: 2,
            label: "L"
          }
        ]
      }
    ],
    configurable_children: [
      {
        id: 1,
        name: "Áo thun nam - Đỏ - M",
        sku: "ATN-001-RD-M",
        price: 170000,
        regular_price: 180000,
        is_pre_order: false,
        stock: {
          is_in_stock: false,
          quantity: 0
        },
        image: "https://example.com/images/product-variant-red-m.jpg",
        thumbnail: "https://example.com/images/product-variant-red-m-thumb.jpg",
        size: {
          id: 1,
          label: "M"
        },
        color: {
          id: 1,
          label: "Đỏ",
          swatch: {
            swatch_link: "https://example.com/images/color-swatch-red.jpg",
            type: 1
          }
        },
        media_gallery: [
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sk010-xl-2.webp",
            pos: 1
          },
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sk010-xl-2.webp",
            pos: 2,
          }
        ]
      },
      {
        id: 2,
        name: "Áo thun nam - Xanh - L",
        sku: "ATN-001-BL-L",
        price: 170000,
        regular_price: 180000,
        is_pre_order: false,
        stock: {
          is_in_stock: true,
          quantity: 20
        },
        image: "https://example.com/images/product-variant-blue-l.jpg",
        thumbnail: "https://example.com/images/product-variant-blue-l-thumb.jpg",
        size: {
          id: 2,
          label: "L"
        },
        color: {
          id: 2,
          label: "Xanh",
          swatch: {
            swatch_link: "https://example.com/images/color-swatch-blue.jpg",
            type: 1
          }
        },
        media_gallery: [
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-1-u.webp",
            pos: 1
          },
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-2.webp",
            pos: 2
          }
        ]
      },
      {
        id: 3,
        name: "Áo thun nam - Đỏ - L",
        sku: "ATN-001-RD-L",
        price: 170000,
        regular_price: 180000,
        is_pre_order: false,
        stock: {
          is_in_stock: true,
          quantity: 20
        },
        image: "https://example.com/images/product-variant-blue-l.jpg",
        thumbnail: "https://example.com/images/product-variant-blue-l-thumb.jpg",
        size: {
          id: 2,
          label: "L"
        },
        color: {
          id: 1,
          label: "Đỏ",
          swatch: {
            swatch_link: "https://example.com/images/color-swatch-blue.jpg",
            type: 1
          }
        },
        media_gallery: [
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-1-u.webp",
            pos: 1
          },
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-2.webp",
            pos: 2
          }
        ]
      },
      {
        id: 4,
        name: "Áo thun nam - Xanh - M",
        sku: "ATN-001-BL-M",
        price: 170000,
        regular_price: 180000,
        is_pre_order: false,
        stock: {
          is_in_stock: true,
          quantity: 20
        },
        image: "https://example.com/images/product-variant-blue-l.jpg",
        thumbnail: "https://example.com/images/product-variant-blue-l-thumb.jpg",
        size: {
          id: 1,
          label: "M"
        },
        color: {
          id: 2,
          label: "Xanh",
          swatch: {
            swatch_link: "https://example.com/images/color-swatch-blue.jpg",
            type: 1
          }
        },
        media_gallery: [
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-1-u.webp",
            pos: 1
          },
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-2.webp",
            pos: 2
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Áo thun nam",
    price: 179000,
    regular_price: 200000,
    status: 1,
    slug: "ao-thun-nam",
    stock: {
      is_in_stock: true,
      quantity: 50
    },
    season: 'Summer',
    configurable_options: [
      {
        attribute_code: "color",
        label: "Màu sắc",
        values: [
          {
            id: 3,
            label: "Đỏ",
            swatch: {
              swatch_link: "https://media.canifa.com/attribute/swatch/images/sa476.webp",
              type: 1
            }
          },
          {
            id: 4,
            label: "Xanh",
            swatch: {
              swatch_link: "https://media.canifa.com/attribute/swatch/images/sl302.webp",
              type: 1
            }
          }
        ]
      },
      {
        attribute_code: "size",
        label: "Kích cỡ",
        values: [
          {
            id: 3,
            label: "M"
          },
          {
            id: 4,
            label: "L"
          }
        ]
      }
    ],
    configurable_children: [
      {
        id: 5,
        name: "Áo thun nam - Đỏ - M",
        sku: "ATN-001-RD-M",
        price: 170000,
        regular_price: 180000,
        is_pre_order: false,
        stock: {
          is_in_stock: true,
          quantity: 30
        },
        image: "https://example.com/images/product-variant-red-m.jpg",
        thumbnail: "https://example.com/images/product-variant-red-m-thumb.jpg",
        size: {
          id: 3,
          label: "M"
        },
        color: {
          id: 3,
          label: "Đỏ",
          swatch: {
            swatch_link: "https://example.com/images/color-swatch-red.jpg",
            type: 1
          }
        },
        media_gallery: [
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sk010-xl-2.webp",
            pos: 1
          },
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sk010-xl-2.webp",
            pos: 2,
          }
        ]
      },
      {
        id: 6,
        name: "Áo thun nam - Xanh - L",
        sku: "ATN-001-BL-L",
        price: 170000,
        regular_price: 180000,
        is_pre_order: false,
        stock: {
          is_in_stock: true,
          quantity: 20
        },
        image: "https://example.com/images/product-variant-blue-l.jpg",
        thumbnail: "https://example.com/images/product-variant-blue-l-thumb.jpg",
        size: {
          id: 4,
          label: "L"
        },
        color: {
          id: 4,
          label: "Xanh",
          swatch: {
            swatch_link: "https://example.com/images/color-swatch-blue.jpg",
            type: 1
          }
        },
        media_gallery: [
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-1-u.webp",
            pos: 1
          },
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-2.webp",
            pos: 2
          }
        ]
      },
      {
        id: 7,
        name: "Áo thun nam - Đỏ - L",
        sku: "ATN-001-RD-L",
        price: 170000,
        regular_price: 180000,
        is_pre_order: false,
        stock: {
          is_in_stock: true,
          quantity: 20
        },
        image: "https://example.com/images/product-variant-blue-l.jpg",
        thumbnail: "https://example.com/images/product-variant-blue-l-thumb.jpg",
        size: {
          id: 4,
          label: "L"
        },
        color: {
          id: 3,
          label: "Đỏ",
          swatch: {
            swatch_link: "https://example.com/images/color-swatch-blue.jpg",
            type: 1
          }
        },
        media_gallery: [
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-1-u.webp",
            pos: 1
          },
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-2.webp",
            pos: 2
          }
        ]
      },
      {
        id: 8,
        name: "Áo thun nam - Xanh - M",
        sku: "ATN-001-BL-M",
        price: 170000,
        regular_price: 180000,
        is_pre_order: false,
        stock: {
          is_in_stock: true,
          quantity: 20
        },
        image: "https://example.com/images/product-variant-blue-l.jpg",
        thumbnail: "https://example.com/images/product-variant-blue-l-thumb.jpg",
        size: {
          id: 3,
          label: "M"
        },
        color: {
          id: 4,
          label: "Xanh",
          swatch: {
            swatch_link: "https://example.com/images/color-swatch-blue.jpg",
            type: 1
          }
        },
        media_gallery: [
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-1-u.webp",
            pos: 1
          },
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-2.webp",
            pos: 2
          }
        ]
      }
    ]
  },
  {
    id: 3,
    name: "Áo thun nam",
    price: 179000,
    regular_price: 200000,
    status: 1,
    slug: "ao-thun-nam",
    stock: {
      is_in_stock: true,
      quantity: 50
    },
    season: 'Summer',
    configurable_options: [
      {
        attribute_code: "color",
        label: "Màu sắc",
        values: [
          {
            id: 5,
            label: "Đỏ",
            swatch: {
              swatch_link: "https://media.canifa.com/attribute/swatch/images/sa476.webp",
              type: 1
            }
          },
          {
            id: 6,
            label: "Xanh",
            swatch: {
              swatch_link: "https://media.canifa.com/attribute/swatch/images/sl302.webp",
              type: 1
            }
          }
        ]
      },
      {
        attribute_code: "size",
        label: "Kích cỡ",
        values: [
          {
            id: 5,
            label: "M"
          },
          {
            id: 6,
            label: "L"
          }
        ]
      }
    ],
    configurable_children: [
      {
        id: 9,
        name: "Áo thun nam - Đỏ - M",
        sku: "ATN-001-RD-M",
        price: 170000,
        regular_price: 180000,
        is_pre_order: false,
        stock: {
          is_in_stock: true,
          quantity: 30
        },
        image: "https://example.com/images/product-variant-red-m.jpg",
        thumbnail: "https://example.com/images/product-variant-red-m-thumb.jpg",
        size: {
          id: 5,
          label: "M"
        },
        color: {
          id: 6,
          label: "Đỏ",
          swatch: {
            swatch_link: "https://example.com/images/color-swatch-red.jpg",
            type: 1
          }
        },
        media_gallery: [
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sk010-xl-2.webp",
            pos: 1
          },
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sk010-xl-2.webp",
            pos: 2,
          }
        ]
      },
      {
        id: 10,
        name: "Áo thun nam - Xanh - L",
        sku: "ATN-001-BL-L",
        price: 170000,
        regular_price: 180000,
        is_pre_order: false,
        stock: {
          is_in_stock: true,
          quantity: 20
        },
        image: "https://example.com/images/product-variant-blue-l.jpg",
        thumbnail: "https://example.com/images/product-variant-blue-l-thumb.jpg",
        size: {
          id: 6,
          label: "L"
        },
        color: {
          id: 6,
          label: "Xanh",
          swatch: {
            swatch_link: "https://example.com/images/color-swatch-blue.jpg",
            type: 1
          }
        },
        media_gallery: [
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-1-u.webp",
            pos: 1
          },
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-2.webp",
            pos: 2
          }
        ]
      },
      {
        id: 11,
        name: "Áo thun nam - Đỏ - L",
        sku: "ATN-001-RD-L",
        price: 170000,
        regular_price: 180000,
        is_pre_order: false,
        stock: {
          is_in_stock: true,
          quantity: 20
        },
        image: "https://example.com/images/product-variant-blue-l.jpg",
        thumbnail: "https://example.com/images/product-variant-blue-l-thumb.jpg",
        size: {
          id: 6,
          label: "L"
        },
        color: {
          id: 5,
          label: "Đỏ",
          swatch: {
            swatch_link: "https://example.com/images/color-swatch-blue.jpg",
            type: 1
          }
        },
        media_gallery: [
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-1-u.webp",
            pos: 1
          },
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-2.webp",
            pos: 2
          }
        ]
      },
      {
        id: 12,
        name: "Áo thun nam - Xanh - M",
        sku: "ATN-001-BL-M",
        price: 170000,
        regular_price: 180000,
        is_pre_order: false,
        stock: {
          is_in_stock: true,
          quantity: 20
        },
        image: "https://example.com/images/product-variant-blue-l.jpg",
        thumbnail: "https://example.com/images/product-variant-blue-l-thumb.jpg",
        size: {
          id: 5,
          label: "M"
        },
        color: {
          id: 6,
          label: "Xanh",
          swatch: {
            swatch_link: "https://example.com/images/color-swatch-blue.jpg",
            type: 1
          }
        },
        media_gallery: [
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-1-u.webp",
            pos: 1
          },
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-2.webp",
            pos: 2
          }
        ]
      }
    ]
  },
  {
    id: 4,
    name: "Áo thun nam",
    price: 179000,
    regular_price: 200000,
    status: 1,
    slug: "ao-thun-nam",
    stock: {
      is_in_stock: true,
      quantity: 50
    },
    season: 'Summer',
    configurable_options: [
      {
        attribute_code: "color",
        label: "Màu sắc",
        values: [
          {
            id: 7,
            label: "Đỏ",
            swatch: {
              swatch_link: "https://media.canifa.com/attribute/swatch/images/sa476.webp",
              type: 1
            }
          },
          {
            id: 8,
            label: "Xanh",
            swatch: {
              swatch_link: "https://media.canifa.com/attribute/swatch/images/sl302.webp",
              type: 1
            }
          }
        ]
      },
      {
        attribute_code: "size",
        label: "Kích cỡ",
        values: [
          {
            id: 7,
            label: "M"
          },
          {
            id: 8,
            label: "L"
          }
        ]
      }
    ],
    configurable_children: [
      {
        id: 13,
        name: "Áo thun nam - Đỏ - M",
        sku: "ATN-001-RD-M",
        price: 170000,
        regular_price: 180000,
        is_pre_order: false,
        stock: {
          is_in_stock: true,
          quantity: 30
        },
        image: "https://example.com/images/product-variant-red-m.jpg",
        thumbnail: "https://example.com/images/product-variant-red-m-thumb.jpg",
        size: {
          id: 7,
          label: "M"
        },
        color: {
          id: 7,
          label: "Đỏ",
          swatch: {
            swatch_link: "https://example.com/images/color-swatch-red.jpg",
            type: 1
          }
        },
        media_gallery: [
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sk010-xl-2.webp",
            pos: 1
          },
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sk010-xl-2.webp",
            pos: 2,
          }
        ]
      },
      {
        id: 14,
        name: "Áo thun nam - Xanh - L",
        sku: "ATN-001-BL-L",
        price: 170000,
        regular_price: 180000,
        is_pre_order: false,
        stock: {
          is_in_stock: true,
          quantity: 20
        },
        image: "https://example.com/images/product-variant-blue-l.jpg",
        thumbnail: "https://example.com/images/product-variant-blue-l-thumb.jpg",
        size: {
          id: 8,
          label: "L"
        },
        color: {
          id: 8,
          label: "Xanh",
          swatch: {
            swatch_link: "https://example.com/images/color-swatch-blue.jpg",
            type: 1
          }
        },
        media_gallery: [
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-1-u.webp",
            pos: 1
          },
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-2.webp",
            pos: 2
          }
        ]
      },
      {
        id: 15,
        name: "Áo thun nam - Đỏ - L",
        sku: "ATN-001-RD-L",
        price: 170000,
        regular_price: 180000,
        is_pre_order: false,
        stock: {
          is_in_stock: true,
          quantity: 20
        },
        image: "https://example.com/images/product-variant-blue-l.jpg",
        thumbnail: "https://example.com/images/product-variant-blue-l-thumb.jpg",
        size: {
          id: 8,
          label: "L"
        },
        color: {
          id: 7,
          label: "Đỏ",
          swatch: {
            swatch_link: "https://example.com/images/color-swatch-blue.jpg",
            type: 1
          }
        },
        media_gallery: [
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-1-u.webp",
            pos: 1
          },
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-2.webp",
            pos: 2
          }
        ]
      },
      {
        id: 16,
        name: "Áo thun nam - Xanh - M",
        sku: "ATN-001-BL-M",
        price: 170000,
        regular_price: 180000,
        is_pre_order: false,
        stock: {
          is_in_stock: true,
          quantity: 20
        },
        image: "https://example.com/images/product-variant-blue-l.jpg",
        thumbnail: "https://example.com/images/product-variant-blue-l-thumb.jpg",
        size: {
          id: 7,
          label: "M"
        },
        color: {
          id: 8,
          label: "Xanh",
          swatch: {
            swatch_link: "https://example.com/images/color-swatch-blue.jpg",
            type: 1
          }
        },
        media_gallery: [
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-1-u.webp",
            pos: 1
          },
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-2.webp",
            pos: 2
          }
        ]
      }
    ]
  },
  {
    id: 5,
    name: "Áo thun nam",
    price: 179000,
    regular_price: 200000,
    status: 1,
    slug: "ao-thun-nam",
    stock: {
      is_in_stock: true,
      quantity: 50
    },
    season: 'Summer',
    configurable_options: [
      {
        attribute_code: "color",
        label: "Màu sắc",
        values: [
          {
            id: 1,
            label: "Đỏ",
            swatch: {
              swatch_link: "https://media.canifa.com/attribute/swatch/images/sa476.webp",
              type: 1
            }
          },
          {
            id: 2,
            label: "Xanh",
            swatch: {
              swatch_link: "https://media.canifa.com/attribute/swatch/images/sl302.webp",
              type: 1
            }
          }
        ]
      },
      {
        attribute_code: "size",
        label: "Kích cỡ",
        values: [
          {
            id: 1,
            label: "M"
          },
          {
            id: 2,
            label: "L"
          }
        ]
      }
    ],
    configurable_children: [
      {
        id: 1,
        name: "Áo thun nam - Đỏ - M",
        sku: "ATN-001-RD-M",
        price: 170000,
        regular_price: 180000,
        is_pre_order: false,
        stock: {
          is_in_stock: true,
          quantity: 30
        },
        image: "https://example.com/images/product-variant-red-m.jpg",
        thumbnail: "https://example.com/images/product-variant-red-m-thumb.jpg",
        size: {
          id: 1,
          label: "M"
        },
        color: {
          id: 1,
          label: "Đỏ",
          swatch: {
            swatch_link: "https://example.com/images/color-swatch-red.jpg",
            type: 1
          }
        },
        media_gallery: [
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sk010-xl-2.webp",
            pos: 1
          },
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sk010-xl-2.webp",
            pos: 2,
          }
        ]
      },
      {
        id: 2,
        name: "Áo thun nam - Xanh - L",
        sku: "ATN-001-BL-L",
        price: 170000,
        regular_price: 180000,
        is_pre_order: false,
        stock: {
          is_in_stock: true,
          quantity: 20
        },
        image: "https://example.com/images/product-variant-blue-l.jpg",
        thumbnail: "https://example.com/images/product-variant-blue-l-thumb.jpg",
        size: {
          id: 2,
          label: "L"
        },
        color: {
          id: 2,
          label: "Xanh",
          swatch: {
            swatch_link: "https://example.com/images/color-swatch-blue.jpg",
            type: 1
          }
        },
        media_gallery: [
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-1-u.webp",
            pos: 1
          },
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-2.webp",
            pos: 2
          }
        ]
      },
      {
        id: 3,
        name: "Áo thun nam - Đỏ - L",
        sku: "ATN-001-RD-L",
        price: 170000,
        regular_price: 180000,
        is_pre_order: false,
        stock: {
          is_in_stock: true,
          quantity: 20
        },
        image: "https://example.com/images/product-variant-blue-l.jpg",
        thumbnail: "https://example.com/images/product-variant-blue-l-thumb.jpg",
        size: {
          id: 2,
          label: "L"
        },
        color: {
          id: 1,
          label: "Đỏ",
          swatch: {
            swatch_link: "https://example.com/images/color-swatch-blue.jpg",
            type: 1
          }
        },
        media_gallery: [
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-1-u.webp",
            pos: 1
          },
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-2.webp",
            pos: 2
          }
        ]
      },
      {
        id: 4,
        name: "Áo thun nam - Xanh - M",
        sku: "ATN-001-BL-M",
        price: 170000,
        regular_price: 180000,
        is_pre_order: false,
        stock: {
          is_in_stock: true,
          quantity: 20
        },
        image: "https://example.com/images/product-variant-blue-l.jpg",
        thumbnail: "https://example.com/images/product-variant-blue-l-thumb.jpg",
        size: {
          id: 1,
          label: "M"
        },
        color: {
          id: 2,
          label: "Xanh",
          swatch: {
            swatch_link: "https://example.com/images/color-swatch-blue.jpg",
            type: 1
          }
        },
        media_gallery: [
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-1-u.webp",
            pos: 1
          },
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-2.webp",
            pos: 2
          }
        ]
      }
    ]
  },
  {
    id: 6,
    name: "Áo thun nam",
    price: 179000,
    regular_price: 200000,
    status: 1,
    slug: "ao-thun-nam",
    stock: {
      is_in_stock: true,
      quantity: 50
    },
    season: 'Summer',
    configurable_options: [
      {
        attribute_code: "color",
        label: "Màu sắc",
        values: [
          {
            id: 1,
            label: "Đỏ",
            swatch: {
              swatch_link: "https://media.canifa.com/attribute/swatch/images/sa476.webp",
              type: 1
            }
          },
          {
            id: 2,
            label: "Xanh",
            swatch: {
              swatch_link: "https://media.canifa.com/attribute/swatch/images/sl302.webp",
              type: 1
            }
          }
        ]
      },
      {
        attribute_code: "size",
        label: "Kích cỡ",
        values: [
          {
            id: 1,
            label: "M"
          },
          {
            id: 2,
            label: "L"
          }
        ]
      }
    ],
    configurable_children: [
      {
        id: 1,
        name: "Áo thun nam - Đỏ - M",
        sku: "ATN-001-RD-M",
        price: 170000,
        regular_price: 180000,
        is_pre_order: false,
        stock: {
          is_in_stock: true,
          quantity: 30
        },
        image: "https://example.com/images/product-variant-red-m.jpg",
        thumbnail: "https://example.com/images/product-variant-red-m-thumb.jpg",
        size: {
          id: 1,
          label: "M"
        },
        color: {
          id: 1,
          label: "Đỏ",
          swatch: {
            swatch_link: "https://example.com/images/color-swatch-red.jpg",
            type: 1
          }
        },
        media_gallery: [
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sk010-xl-2.webp",
            pos: 1
          },
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sk010-xl-2.webp",
            pos: 2,
          }
        ]
      },
      {
        id: 2,
        name: "Áo thun nam - Xanh - L",
        sku: "ATN-001-BL-L",
        price: 170000,
        regular_price: 180000,
        is_pre_order: false,
        stock: {
          is_in_stock: true,
          quantity: 20
        },
        image: "https://example.com/images/product-variant-blue-l.jpg",
        thumbnail: "https://example.com/images/product-variant-blue-l-thumb.jpg",
        size: {
          id: 2,
          label: "L"
        },
        color: {
          id: 2,
          label: "Xanh",
          swatch: {
            swatch_link: "https://example.com/images/color-swatch-blue.jpg",
            type: 1
          }
        },
        media_gallery: [
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-1-u.webp",
            pos: 1
          },
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-2.webp",
            pos: 2
          }
        ]
      },
      {
        id: 3,
        name: "Áo thun nam - Đỏ - L",
        sku: "ATN-001-RD-L",
        price: 170000,
        regular_price: 180000,
        is_pre_order: false,
        stock: {
          is_in_stock: true,
          quantity: 20
        },
        image: "https://example.com/images/product-variant-blue-l.jpg",
        thumbnail: "https://example.com/images/product-variant-blue-l-thumb.jpg",
        size: {
          id: 2,
          label: "L"
        },
        color: {
          id: 1,
          label: "Đỏ",
          swatch: {
            swatch_link: "https://example.com/images/color-swatch-blue.jpg",
            type: 1
          }
        },
        media_gallery: [
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-1-u.webp",
            pos: 1
          },
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-2.webp",
            pos: 2
          }
        ]
      },
      {
        id: 4,
        name: "Áo thun nam - Xanh - M",
        sku: "ATN-001-BL-M",
        price: 170000,
        regular_price: 180000,
        is_pre_order: false,
        stock: {
          is_in_stock: true,
          quantity: 20
        },
        image: "https://example.com/images/product-variant-blue-l.jpg",
        thumbnail: "https://example.com/images/product-variant-blue-l-thumb.jpg",
        size: {
          id: 1,
          label: "M"
        },
        color: {
          id: 2,
          label: "Xanh",
          swatch: {
            swatch_link: "https://example.com/images/color-swatch-blue.jpg",
            type: 1
          }
        },
        media_gallery: [
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-1-u.webp",
            pos: 1
          },
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-2.webp",
            pos: 2
          }
        ]
      }
    ]
  },
  {
    id: 7,
    name: "Áo thun nam",
    price: 179000,
    regular_price: 200000,
    status: 1,
    slug: "ao-thun-nam",
    stock: {
      is_in_stock: true,
      quantity: 50
    },
    season: 'Summer',
    configurable_options: [
      {
        attribute_code: "color",
        label: "Màu sắc",
        values: [
          {
            id: 1,
            label: "Đỏ",
            swatch: {
              swatch_link: "https://media.canifa.com/attribute/swatch/images/sa476.webp",
              type: 1
            }
          },
          {
            id: 2,
            label: "Xanh",
            swatch: {
              swatch_link: "https://media.canifa.com/attribute/swatch/images/sl302.webp",
              type: 1
            }
          }
        ]
      },
      {
        attribute_code: "size",
        label: "Kích cỡ",
        values: [
          {
            id: 1,
            label: "M"
          },
          {
            id: 2,
            label: "L"
          }
        ]
      }
    ],
    configurable_children: [
      {
        id: 1,
        name: "Áo thun nam - Đỏ - M",
        sku: "ATN-001-RD-M",
        price: 170000,
        regular_price: 180000,
        is_pre_order: false,
        stock: {
          is_in_stock: true,
          quantity: 30
        },
        image: "https://example.com/images/product-variant-red-m.jpg",
        thumbnail: "https://example.com/images/product-variant-red-m-thumb.jpg",
        size: {
          id: 1,
          label: "M"
        },
        color: {
          id: 1,
          label: "Đỏ",
          swatch: {
            swatch_link: "https://example.com/images/color-swatch-red.jpg",
            type: 1
          }
        },
        media_gallery: [
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sk010-xl-2.webp",
            pos: 1
          },
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sk010-xl-2.webp",
            pos: 2,
          }
        ]
      },
      {
        id: 2,
        name: "Áo thun nam - Xanh - L",
        sku: "ATN-001-BL-L",
        price: 170000,
        regular_price: 180000,
        is_pre_order: false,
        stock: {
          is_in_stock: true,
          quantity: 20
        },
        image: "https://example.com/images/product-variant-blue-l.jpg",
        thumbnail: "https://example.com/images/product-variant-blue-l-thumb.jpg",
        size: {
          id: 2,
          label: "L"
        },
        color: {
          id: 2,
          label: "Xanh",
          swatch: {
            swatch_link: "https://example.com/images/color-swatch-blue.jpg",
            type: 1
          }
        },
        media_gallery: [
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-1-u.webp",
            pos: 1
          },
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-2.webp",
            pos: 2
          }
        ]
      },
      {
        id: 3,
        name: "Áo thun nam - Đỏ - L",
        sku: "ATN-001-RD-L",
        price: 170000,
        regular_price: 180000,
        is_pre_order: false,
        stock: {
          is_in_stock: true,
          quantity: 20
        },
        image: "https://example.com/images/product-variant-blue-l.jpg",
        thumbnail: "https://example.com/images/product-variant-blue-l-thumb.jpg",
        size: {
          id: 2,
          label: "L"
        },
        color: {
          id: 1,
          label: "Đỏ",
          swatch: {
            swatch_link: "https://example.com/images/color-swatch-blue.jpg",
            type: 1
          }
        },
        media_gallery: [
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-1-u.webp",
            pos: 1
          },
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-2.webp",
            pos: 2
          }
        ]
      },
      {
        id: 4,
        name: "Áo thun nam - Xanh - M",
        sku: "ATN-001-BL-M",
        price: 170000,
        regular_price: 180000,
        is_pre_order: false,
        stock: {
          is_in_stock: true,
          quantity: 20
        },
        image: "https://example.com/images/product-variant-blue-l.jpg",
        thumbnail: "https://example.com/images/product-variant-blue-l-thumb.jpg",
        size: {
          id: 1,
          label: "M"
        },
        color: {
          id: 2,
          label: "Xanh",
          swatch: {
            swatch_link: "https://example.com/images/color-swatch-blue.jpg",
            type: 1
          }
        },
        media_gallery: [
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-1-u.webp",
            pos: 1
          },
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-2.webp",
            pos: 2
          }
        ]
      }
    ]
  },
  {
    id: 8,
    name: "Áo thun nam",
    price: 179000,
    regular_price: 200000,
    status: 1,
    slug: "ao-thun-nam",
    stock: {
      is_in_stock: true,
      quantity: 50
    },
    season: 'Summer',
    configurable_options: [
      {
        attribute_code: "color",
        label: "Màu sắc",
        values: [
          {
            id: 1,
            label: "Đỏ",
            swatch: {
              swatch_link: "https://media.canifa.com/attribute/swatch/images/sa476.webp",
              type: 1
            }
          },
          {
            id: 2,
            label: "Xanh",
            swatch: {
              swatch_link: "https://media.canifa.com/attribute/swatch/images/sl302.webp",
              type: 1
            }
          }
        ]
      },
      {
        attribute_code: "size",
        label: "Kích cỡ",
        values: [
          {
            id: 1,
            label: "M"
          },
          {
            id: 2,
            label: "L"
          }
        ]
      }
    ],
    configurable_children: [
      {
        id: 1,
        name: "Áo thun nam - Đỏ - M",
        sku: "ATN-001-RD-M",
        price: 170000,
        regular_price: 180000,
        is_pre_order: false,
        stock: {
          is_in_stock: true,
          quantity: 30
        },
        image: "https://example.com/images/product-variant-red-m.jpg",
        thumbnail: "https://example.com/images/product-variant-red-m-thumb.jpg",
        size: {
          id: 1,
          label: "M"
        },
        color: {
          id: 1,
          label: "Đỏ",
          swatch: {
            swatch_link: "https://example.com/images/color-swatch-red.jpg",
            type: 1
          }
        },
        media_gallery: [
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sk010-xl-2.webp",
            pos: 1
          },
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sk010-xl-2.webp",
            pos: 2,
          }
        ]
      },
      {
        id: 2,
        name: "Áo thun nam - Xanh - L",
        sku: "ATN-001-BL-L",
        price: 170000,
        regular_price: 180000,
        is_pre_order: false,
        stock: {
          is_in_stock: true,
          quantity: 20
        },
        image: "https://example.com/images/product-variant-blue-l.jpg",
        thumbnail: "https://example.com/images/product-variant-blue-l-thumb.jpg",
        size: {
          id: 2,
          label: "L"
        },
        color: {
          id: 2,
          label: "Xanh",
          swatch: {
            swatch_link: "https://example.com/images/color-swatch-blue.jpg",
            type: 1
          }
        },
        media_gallery: [
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-1-u.webp",
            pos: 1
          },
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-2.webp",
            pos: 2
          }
        ]
      },
      {
        id: 3,
        name: "Áo thun nam - Đỏ - L",
        sku: "ATN-001-RD-L",
        price: 170000,
        regular_price: 180000,
        is_pre_order: false,
        stock: {
          is_in_stock: true,
          quantity: 20
        },
        image: "https://example.com/images/product-variant-blue-l.jpg",
        thumbnail: "https://example.com/images/product-variant-blue-l-thumb.jpg",
        size: {
          id: 2,
          label: "L"
        },
        color: {
          id: 1,
          label: "Đỏ",
          swatch: {
            swatch_link: "https://example.com/images/color-swatch-blue.jpg",
            type: 1
          }
        },
        media_gallery: [
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-1-u.webp",
            pos: 1
          },
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-2.webp",
            pos: 2
          }
        ]
      },
      {
        id: 4,
        name: "Áo thun nam - Xanh - M",
        sku: "ATN-001-BL-M",
        price: 170000,
        regular_price: 180000,
        is_pre_order: false,
        stock: {
          is_in_stock: true,
          quantity: 20
        },
        image: "https://example.com/images/product-variant-blue-l.jpg",
        thumbnail: "https://example.com/images/product-variant-blue-l-thumb.jpg",
        size: {
          id: 1,
          label: "M"
        },
        color: {
          id: 2,
          label: "Xanh",
          swatch: {
            swatch_link: "https://example.com/images/color-swatch-blue.jpg",
            type: 1
          }
        },
        media_gallery: [
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-1-u.webp",
            pos: 1
          },
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-2.webp",
            pos: 2
          }
        ]
      }
    ]
  },
]

export const CartData: CartItem[] = [
  {
    id: 1,
    name: "Áo thun nam",
    price: 179000,
    regular_price: 200000,
    status: 1,
    slug: "ao-thun-nam",
    stock: {
      is_in_stock: true,
      quantity: 50
    },
    season: 'Summer',
    configurable_options: [
      {
        attribute_code: "color",
        label: "Màu sắc",
        values: [
          {
            id: 1,
            label: "Đỏ",
            swatch: {
              swatch_link: "https://media.canifa.com/attribute/swatch/images/sa476.webp",
              type: 1
            }
          },
          {
            id: 2,
            label: "Xanh",
            swatch: {
              swatch_link: "https://media.canifa.com/attribute/swatch/images/sl302.webp",
              type: 1
            }
          }
        ]
      },
      {
        attribute_code: "size",
        label: "Kích cỡ",
        values: [
          {
            id: 1,
            label: "M"
          },
          {
            id: 2,
            label: "L"
          }
        ]
      }
    ],
    configurable_children: [
      {
        id: 1,
        name: "Áo thun nam - Đỏ - M",
        sku: "ATN-001-RD-M",
        price: 170000,
        regular_price: 180000,
        is_pre_order: false,
        stock: {
          is_in_stock: true,
          quantity: 30
        },
        image: "https://example.com/images/product-variant-red-m.jpg",
        thumbnail: "https://example.com/images/product-variant-red-m-thumb.jpg",
        size: {
          id: 1,
          label: "M"
        },
        color: {
          id: 1,
          label: "Đỏ",
          swatch: {
            swatch_link: "https://example.com/images/color-swatch-red.jpg",
            type: 1
          }
        },
        media_gallery: [
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sk010-xl-2.webp",
            pos: 1
          },
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sk010-xl-2.webp",
            pos: 2,
          }
        ]
      },
      {
        id: 2,
        name: "Áo thun nam - Xanh - L",
        sku: "ATN-001-BL-L",
        price: 170000,
        regular_price: 180000,
        is_pre_order: false,
        stock: {
          is_in_stock: true,
          quantity: 20
        },
        image: "https://example.com/images/product-variant-blue-l.jpg",
        thumbnail: "https://example.com/images/product-variant-blue-l-thumb.jpg",
        size: {
          id: 2,
          label: "L"
        },
        color: {
          id: 2,
          label: "Xanh",
          swatch: {
            swatch_link: "https://example.com/images/color-swatch-blue.jpg",
            type: 1
          }
        },
        media_gallery: [
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-1-u.webp",
            pos: 1
          },
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-2.webp",
            pos: 2
          }
        ]
      },
      {
        id: 3,
        name: "Áo thun nam - Đỏ - L",
        sku: "ATN-001-RD-L",
        price: 170000,
        regular_price: 180000,
        is_pre_order: false,
        stock: {
          is_in_stock: true,
          quantity: 20
        },
        image: "https://example.com/images/product-variant-blue-l.jpg",
        thumbnail: "https://example.com/images/product-variant-blue-l-thumb.jpg",
        size: {
          id: 2,
          label: "L"
        },
        color: {
          id: 1,
          label: "Đỏ",
          swatch: {
            swatch_link: "https://example.com/images/color-swatch-blue.jpg",
            type: 1
          }
        },
        media_gallery: [
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-1-u.webp",
            pos: 1
          },
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-2.webp",
            pos: 2
          }
        ]
      },
      {
        id: 4,
        name: "Áo thun nam - Xanh - M",
        sku: "ATN-001-BL-M",
        price: 170000,
        regular_price: 180000,
        is_pre_order: false,
        stock: {
          is_in_stock: true,
          quantity: 20
        },
        image: "https://example.com/images/product-variant-blue-l.jpg",
        thumbnail: "https://example.com/images/product-variant-blue-l-thumb.jpg",
        size: {
          id: 1,
          label: "M"
        },
        color: {
          id: 2,
          label: "Xanh",
          swatch: {
            swatch_link: "https://example.com/images/color-swatch-blue.jpg",
            type: 1
          }
        },
        media_gallery: [
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-1-u.webp",
            pos: 1
          },
          {
            path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-2.webp",
            pos: 2
          }
        ]
      }
    ],
    selected_size: {
        id: 1,
        label: "M"
      },
    selected_color: {
      id: 1,
      label: "Đỏ",
      swatch: {
        swatch_link: "https://media.canifa.com/attribute/swatch/images/sa476.webp",
        type: 1
      }
    },
    quantity: 2,
    cart_id: 'sdfgsdsgsd-121-d12423423'
  },
]