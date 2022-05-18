const products = [
  {
    name: 'Hand Base Lamp',
    category: 'light',
    discount_price: '35.00',
    price: '55.00',
    imageURL: '/images/product1.png'
  },
  {
    name: 'Vintage Chair',
    category: 'chair',
    discount_price: '65.00',
    price: '95.00',
    imageURL: '/images/product2.png'
  },
  {
    name: 'Lamp Tool',
    category: 'light',
    discount_price: null,
    price: '45.00',
    imageURL: '/images/product3.png'
  },
  {
    name: 'Stylish Chair',
    category: 'chair',
    discount_price: '45.00',
    price: '55.00',
    imageURL: '/images/product4.png'
  },
  {
    name: 'Vintage Chair',
    category: 'chair',
    discount_price: '65.00',
    price: '95.00',
    imageURL: '/images/product5.png'
  },
  {
    name: 'Stackable Chair',
    category: 'chair',
    discount_price: '87.00',
    price: '97.00',
    imageURL: '/images/product6.png'
  }
]

const testimonial = [
  {
    reviewer: { name: 'Larry Diamond', title: 'Chief Executive Officer' },
    imageURL: '/images/reviewer1.jpg',
    title: 'furni.shop',
    desc: "File storage made easy - including powerful features you won't find anywhere else. Whether you're.",
  },
  {
    reviewer: { name: 'Gia Marx', title: 'Home Design Professional' },
    imageURL: '/images/reviewer2.jpg',
    title: 'Designing made easy!',
    desc: "My clients have noticed a significant improvement in my business after using furni.shop, and I couldn't be more proud.",
  },
  {
    reviewer: { name: 'Hugh Jabott', title: 'Lifestyle Enthusiast' },
    imageURL: '/images/reviewer3.jpg',
    title: 'Pretty cool',
    desc: "Not sure how but this product has turned my life upside down for the better. Thanks furni!",
  }
]



export const items = products.map((product, i) => ({...product, _id: `PN${i}`}))
export const reviews = testimonial.map((testimonial, i) => ({...testimonial, _id: `RN${i}`}))
