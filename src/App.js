


import './App.css';

import Price from './Content';



function App() {
 
  const productDetails=[
    {
      price:"$0/month",
      title:"FREE",
       
       feature:[
        {
          fa:"Single Users",
          enable:true,
        }, {
         
        fa:"50GB Storage",
        enable:true
      },
        {
          fa:"Unlimited Public Projects",
          enable:true,
        },
         {
          fa:"Community Access",
          enable:true,
         },
          {
            fa:"Unlimited Private Projects",
            enable:false,
          } ,{
            fa:"Dedicated Phone Support",
            enable:false,
          },{
            fa:"Free Subdomain",
            enable:false,
          },{
            fa:"Monthly Status Reports",
            enable:false,
          }
       ]
      
  } ,
  {
    price:"$9/month",
    title:"PLUS",
     
     feature:[
      {
        fa:"5 Users",
        enable:true,
      }, {
       
      fa:"50GB Storage",
      enable:true
    },
      {
        fa:"Unlimited Public Projects",
        enable:true,
      },
       {
        fa:"Community Access",
        enable:true,
       },
        {
          fa:"Unlimited Private Projects",
          enable:true,
        } ,{
          fa:"Dedicated Phone Support",
          enable:true,
        },{
          fa:"Free Subdomain",
          enable:true,
        },{
          fa:"Monthly Status Reports",
          enable:false,
        }
     ]

  },
  {
    price:"$49/month",
    title:"PRO",
   
     
     feature:[
      {
        fa:"Unlimited Users",
        enable:true,
      }, {
       
      fa:"50GB Storage",
      enable:true
    },
      {
        fa:"Unlimited Public Projects",
        enable:true,
      },
       {
        fa:"Community Access",
        enable:true,
       },
        {
          fa:"Unlimited Private Projects",
          enable:true,
        } ,{
          fa:"Dedicated Phone Support",
          enable:true,
        },{
          fa:"Free Subdomain",
          enable:true,
        },{
          fa:"Monthly Status Reports",
          enable:true,
        }
     ]

  }

]
 
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">

{
  productDetails.map((details)=>{
    return <Price details={details}></Price>
  })
}
        </div>
      </div>
    </section>
  );
}

export default App;