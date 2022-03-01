export const productos = [
    { id:0 , img:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ2IY311FawwVaJLT24590d77zXMI47foGASBnyNZYzkFahR1B9Mf56zEgyi88xLTDSAAMj0MwcmzY&usqp=CAc',  name:'Buzo Adidas Watercolor',                  category: 'clothing',   price: 2500,    stock: 10,  description:''},
    { id:1 , img:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQZD2emj8QKTnGWSMjTWuH0BvL5nJWBT1KEtJOyAE1nlVenkgPmcbsm7QuNFLAsP8dplkPToZsHrA&usqp=CAc',   name:'Remera Adidas Trefoil' ,                  category: 'clothing' ,  price: 2500,    stock: 10,  description:''},
    { id:2 , img:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQGS8zENM_nOZqH_S6y0O9CdO7mBl37NRikJ4_I_1wnK0lwEKY7qw25RFrM7DxzLypU3ZkH654c0NE&usqp=CAc',  name:'Pantalon Adidas Condivo 20 Team Navy',    category: 'clothing',   price: 2500,    stock: 10,  description:''},
    { id:3 , img:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSWplbATYy_nJ3vHVjCGzNtj90JVwogC-PvnyklIBYlhmZ7VNU7kkbnycvrqtgD8xkQZcxLoeTTBvw&usqp=CAc',  name:'Remera Nike Thunder Block' ,              category: 'clothing',   price: 2500,    stock: 10,  description:''},
    { id:4 , img:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQZSi2nYBnQ3f6gbKwCbD0gtn6qX0e9nYcPsYSraSMCq0ivK6t3mItRM9vMjZaGmVhMbOb0pfE_uVLE&usqp=CAc', name:'Campera Nike Therma' ,                    category: 'clothing',   price: 2500,    stock: 10,  description:''},
    { id:5 , img:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT7KnEJ7PjDRNXmUfsJ85us3gBNxSsKJMT8mx15IACVlZjVewOtYYd_VJFVlLEZUN-YutNVMCscCRU&usqp=CAc',  name:'Pantalon Nike Sportswear Air' ,           category: 'clothing',   price: 2500,    stock: 10,  description:''},
    { id:6 , img:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSMMnTeWZ_tbJjPGmurQ0-JrWNUU9rVZaGQmMRtcHcYHUnzVY06mcAeLf39sTFT0T3cJd7kj4qnNg&usqp=CAc',   name:'Zapatillas Adidas Ultraboost' ,           category: 'shoes',      price: 10000,   stock: 10,  description:''},
    { id:7 , img:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRr8R61bq8mqSOcIWW8c0DNVp3Hnff551lJsoUIntgD_IwC6DRU_00tcUtLmz5b9qv6bwa4FiarHg&usqp=CAc',   name:'Zaptillas Adidas ZX Boost Solar',         category: 'shoes',      price: 10000,   stock: 10,  description:''},
    { id:8 , img:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRoXU0qaRonW3PW8ewVcBJcgAbeiuWbU-_qy4AcFfp3nsPfHvLPwxFRAXP2oASDWwwnGKdDiwfm0wc&usqp=CAc',  name:'Zapatillas Adidas Marathon Tech',         category: 'shoes',      price: 10000,   stock: 10,  description:''},
    { id:9 , img:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQRJBRR5jDHQH36Drbm1WPj_yMkcXxRqn12u9YvsS9qSEm3AJ2sdSVeWxQpGLLJeva5_hYLTqtdyQ&usqp=CAc',   name:'Zaptillas Nike Air Max Oketo',            category: 'shoes',      price: 10000,   stock: 10,  description:''},
    { id:10, img:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTozYrobMJ3752OsmU9_7R6dWYJsnx5uszidtA7otrzaPdXxPP2zq458Dhi6ZAU18ikXjzu6JwdWg&usqp=CAc',   name:'Zaptillas Nike Zoom Gravity',             category: 'shoes',      price: 10000,   stock: 10,  description:''},
    { id:11, img:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR2SfQwvTmobxv-bccYLzGdOqYaJYKAjB_lqCds38RjsA16J56VWXeSGT_VVHvALQ&usqp=CAc',               name:'Zaptillas Running Wildhorse',             category: 'shoes',      price: 10000,   stock: 110, description:''}
]

const getFetch = new Promise(resolve=>{
    setTimeout(() => {
        resolve(productos)
    }, 3000);
})

export default getFetch