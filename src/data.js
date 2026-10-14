export const categories=[
{name:'Live Fish',image:'photo-1524704654690-b56c05c78a00',filter:'Live Fish'},
{name:'Aquarium Tanks',image:'photo-1545241047-6083a3684587',filter:'Aquarium Tanks'},
{name:'Aquatic Plants',image:'photo-1485955900006-10f4d324d411',filter:'Aquatic Plants'},
{name:'Fish Food',image:'photo-1546026423-cc4642628d2b',filter:'Fish Food'},
{name:'Filters & Pumps',image:'photo-1530053969600-caed2596d242',filter:'Filters & Pumps'},
{name:'Aquarium Lighting',image:'photo-1519608487953-e999c86e7455',filter:'Aquarium Lighting'},
{name:'Decorations',image:'photo-1497206365907-f5e630693df0',filter:'Decorations'},
{name:'Cleaning & Water Care',image:'photo-1437622368342-7a3d73a34c8f',filter:'Cleaning & Water Care'}];
export const products=[
{id:1,name:'CrystalView Starter Aquarium',category:'Aquarium Tanks',price:3499,image:'photo-1545241047-6083a3684587',description:'A compact glass aquarium for a beautiful first setup. Add suitable filtration and cycle the tank before introducing fish.',stock:true,care:'Set up filtration and establish the nitrogen cycle before adding livestock.'},
{id:2,name:'Royal Blue Betta Fish',category:'Live Fish',price:449,image:'photo-1524704654690-b56c05c78a00',description:'Colorful freshwater betta fish. Local availability and safe collection or delivery must be confirmed.',stock:true,care:'Requires a heated, filtered, cycled tank. Keep male bettas separately.'},
{id:3,name:'Colorful Guppy Fish',category:'Live Fish',price:149,image:'photo-1546026423-cc4642628d2b',description:'Active tropical freshwater fish suitable for a well-maintained community aquarium.',stock:true,care:'Keep in a cycled tank with stable water parameters. Confirm compatibility.'},
{id:4,name:'QuietFlow Aquarium Filter',category:'Filters & Pumps',price:899,image:'photo-1530053969600-caed2596d242',description:'A compact filter to help maintain water circulation and biological filtration.',stock:true,care:'Choose a filter rated for your aquarium volume.'},
{id:5,name:'AquaGlow LED Light',category:'Aquarium Lighting',price:1299,image:'photo-1519608487953-e999c86e7455',description:'Bright, efficient lighting for viewing fish and supporting appropriate plant growth.',stock:true,care:'Use a regular light schedule to help manage algae.'},
{id:6,name:'Daily Tropical Fish Food',category:'Fish Food',price:299,image:'photo-1546026423-cc4642628d2b',description:'Everyday feed for suitable tropical freshwater fish.',stock:true,care:'Feed small portions according to species needs.'},
{id:7,name:'Freshwater Plant Bundle',category:'Aquatic Plants',price:599,image:'photo-1485955900006-10f4d324d411',description:'A curated starter assortment of attractive live aquatic plants.',stock:true,care:'Check lighting and substrate requirements for each plant.'},
{id:8,name:'Natural River Gravel',category:'Decorations',price:399,image:'photo-1497206365907-f5e630693df0',description:'Natural-looking aquarium substrate for decorative freshwater setups.',stock:true,care:'Rinse before adding to the aquarium.'},
{id:9,name:'Aquarium Water Care Kit',category:'Cleaning & Water Care',price:649,image:'photo-1437622368342-7a3d73a34c8f',description:'Basic water care essentials for routine aquarium maintenance.',stock:true,care:'Always test water and follow product instructions.'}
];
export const photo=(id,w=900)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;
