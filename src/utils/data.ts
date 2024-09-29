const PRODUCTS = [
  {
    title: "10.09.24",
    data: ["couve", "maçã", "macarrão"],
  },
  {
    title: "09.09.24",
    data: Array.from({ length: 2 }, (_, index) => String(index)),
  },
  {
    title: "08.09.24",
    data: Array.from({ length: 1 }, (_, index) => String(index)),
  },
  {
    title: "07.09.24",
    data: Array.from({ length: 3 }, (_, index) => String(index)),
  },
  {
    title: "06.09.24",
    data: Array.from({ length: 2 }, (_, index) => String(index)),
  },
]

const CATEGORIES = PRODUCTS.map((item) => item.title)

export { PRODUCTS, CATEGORIES }
