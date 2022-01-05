import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { request } from 'graphql-request';import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
 
import {
    PricingSection,
    PricingWrapper,
    PricingHeading,
    PricingContainer,
    PricingCard,
    PricingCardInfo,
    PricingCardIcon,
    PricingCardPlan,
    PricingCardCost,
    PricingCardLength,
    PricingCardFeatures,
    PricingCardFeature, 
    ServicesIcon
  } from '../Pricing/Pricing.elements';

 import Post from './Post';
 

function Resource() {
  const [posts, setPosts] = useState(null);


  useEffect(() => {
    const fetchPosts = async () => {
      const { posts } = await request(
        'https://api-us-east-1.graphcms.com/v2/ckxyajrju1sld01z2c3469niu/master',
        `
        {
        posts {
          id
          title
          slug
          picture
       } 
      }
        `
      );
      setPosts(posts);
    };

    fetchPosts();
  }, []);
 

    return (
<div className="App">
      <Router>
        {!posts ? (
          'Loading'
        ) : (
          <React.Fragment>
            <ul>
            <img src={posts.picture} />

              {posts.map(({ id, title, slug, picture }) => (
                
                <li key={id}>
                  <Link to={`/resources/${slug}`}>{title}</Link>
                  {/* <img  src={`/resources/${picture}`}>{picture}</img> */}
                </li>
              ))}
            </ul>
            <Switch>
              <Route path="/resources/:slug">
                <Post posts={posts} />
              </Route>
            </Switch>
          </React.Fragment>
        )}
      </Router>
    </div>


      // <Provider value={client}>

      //   <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      //   <PricingSection>
      //     <PricingWrapper>
      //       <PricingHeading>Getting fund with Axcess Fund is Easy & Fast!</PricingHeading>
      //       <PricingContainer>
      //         <PricingCard to='/sign-up'>
                
      //           <PricingCardInfo>
      //         <Resource />
      //               {/* <ServicesIcon src={Icon1} /> */}
                  
      //             <PricingCardPlan>Sign In & add your bills</PricingCardPlan>
      //             <PricingCardCost></PricingCardCost>
      //             <PricingCardLength>You can add any essential bills you need assistant with</PricingCardLength>
                  
                  
      //             <Button primary>More</Button>
      //           </PricingCardInfo>
      //         </PricingCard>
      //         <PricingCard to='/sign-up'>
      //           <PricingCardInfo>
             
      //               {/* <ServicesIcon src={Icon2} /> */}
                  
      //             <PricingCardPlan>Choose how you want to pay your bills</PricingCardPlan>
        
      //             <PricingCardLength>Select the payment schedule that works for you, than confirm. We'll never charge more than you see before you hit submit</PricingCardLength>
                   
              
      //             <Button primary>More</Button>
      //             <br />
      //           </PricingCardInfo>
      //         </PricingCard>
      //         <PricingCard to='/sign-up'>
      //           <PricingCardInfo>
             
      //               {/* <ServicesIcon src={Icon3} /> */}
                  
      //             <PricingCardPlan>Make easy monthly payments</PricingCardPlan>
                 
      //             <br />
      //             <PricingCardLength>We'll send you email and text reminder so you never miss a payment.</PricingCardLength>
                   
              
      //             <Button primary>More</Button>
      //           </PricingCardInfo>
      //         </PricingCard>
      //       </PricingContainer>
      //     </PricingWrapper>
      //   </PricingSection>
      // </IconContext.Provider>
      // </Provider>
    );
  }
    

export default Resource
