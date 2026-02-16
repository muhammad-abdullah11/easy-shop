import React from 'react'

const footerLinks = [
  {
    title: "Get to Know Us",
    links: [
      { name: "Careers", path: "/careers" },
      { name: "Amazon Newsletter", path: "/newsletter" },
      { name: "About Amazon", path: "/about" },
      { name: "Accessibility", path: "/accessibility" },
      { name: "Sustainability", path: "/sustainability" },
      { name: "Press Center", path: "/press" },
      { name: "Investor Relations", path: "/investors" },
      { name: "Amazon Devices", path: "/devices" },
      { name: "Amazon Science", path: "/science" },
    ],
  },
  {
    title: "Make Money with Us",
    links: [
      { name: "Sell on Amazon", path: "/sell" },
      { name: "Sell apps on Amazon", path: "/sell-apps" },
      { name: "Supply to Amazon", path: "/supply" },
      { name: "Protect & Build Your Brand", path: "/brand" },
      { name: "Become an Affiliate", path: "/affiliate" },
      { name: "Become a Delivery Driver", path: "/delivery-driver" },
      { name: "Start a Package Delivery Business", path: "/delivery-business" },
      { name: "Advertise Your Products", path: "/advertise" },
      { name: "Self-Publish with Us", path: "/self-publish" },
      { name: "Become an Amazon Hub Partner", path: "/hub-partner" },
      { name: "See More Ways to Make Money", path: "/make-money" },
    ],
  },
  {
    title: "Amazon Payment Products",
    links: [
      { name: "Amazon Visa", path: "/visa" },
      { name: "Amazon Store Card", path: "/store-card" },
      { name: "Amazon Secured Card", path: "/secured-card" },
      { name: "Amazon Business Card", path: "/business-card" },
      { name: "Shop with Points", path: "/shop-with-points" },
      { name: "Credit Card Marketplace", path: "/credit-marketplace" },
      { name: "Reload Your Balance", path: "/reload-balance" },
      { name: "Gift Cards", path: "/gift-cards" },
      { name: "Amazon Currency Converter", path: "/currency-converter" },
    ],
  },
  {
    title: "Let Us Help You",
    links: [
      { name: "Your Account", path: "/account" },
      { name: "Your Orders", path: "/orders" },
      { name: "Shipping Rates & Policies", path: "/shipping" },
      { name: "Amazon Prime", path: "/prime" },
      { name: "Returns & Replacements", path: "/returns" },
      { name: "Manage Your Content and Devices", path: "/content-devices" },
      { name: "Recalls and Product Safety Alerts", path: "/recalls" },
      { name: "Registry & Gift List", path: "/registry" },
      { name: "Help", path: "/help" },
    ],
  },
];


const Footer = () => {
  return (
    <footer className=' text-white'>
      <h3 
      onClick={()=> window.scrollTo({top: 0,behavior: "smooth",})}
      className='bg-[#37475a] py-4 text-center'>Back to Top</h3>
      
      <section className='bg-[#232f3e] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center py-8 md:px-16 w-full '>
        {footerLinks?.map((link,i)=>(
          <ul key={i} className='px-4'>
              <h2 className='font-semibold font-serif text-start py-1 text-lg'>{link.title}</h2>
              {link.links.map((item,i)=>(
                <li key={i} className='text-start text-base hover:underline transition-all duration-200'>{item.name}</li>
              ))}
          </ul>

        ))}
         </section>
         <h3 className='text-center py-4 bg-[#232f3e]'>© 1996-2026, easy-shop.com, Inc. or its affiliates</h3>
    </footer>
  )
}

export default Footer