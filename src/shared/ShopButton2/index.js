import React from 'react';
import Div from 'shared/Div';
import StyledLink from 'shared/StyledLink';
import Button from 'shared/Button';


// -----
const funcC0mp = (props) =>{
  return (
    <Div >
      {props.selectCategoryValue === "engagement-rings" &&
        <Div padding="10px">
          <StyledLink to="/engagement-rings/shop">
            <Button width="100%" maxWidth="400px" active={true} themed>
              Explore Engagement Rings
            </Button>
          </StyledLink>
        </Div>
      }
      {props.selectCategoryValue === "ladies-bands" &&
        <Div padding="10px">
          <StyledLink to="/wedding-bands/shop">
            <Button width="100%" maxWidth="400px" active={true} themed>
              Explore Ladies Bands
            </Button>
          </StyledLink>
        </Div>
      }
      {props.selectCategoryValue === "wedding-bands"  &&
        <Div padding="10px">
          <StyledLink to="/wedding-bands/shop/ladies-bands">
            <Button width="100%" maxWidth="400px" active={true} themed>
              Explore Ladies Bands
            </Button>
          </StyledLink>
        </Div>
      }
      {props.selectCategoryValue === "fine-jewelry"  &&
        <Div padding="10px">
          <StyledLink to="/fine-jewelry/shop">
            <Button active={true} width="100%" maxWidth="400px" themed>
              Explore Necklaces
            </Button>
          </StyledLink>
        </Div>
      }
      {props.selectCategoryValue === "mens-bands" &&
        <Div padding="10px">
          <StyledLink to="/wedding-bands/shop/mens-bands">
            <Button width="100%" maxWidth="400px" active={true} themed>
              Explore Mens Bands
            </Button>
          </StyledLink>
        </Div>
      }
      {props.selectCategoryValue === "diamonds" &&
        <Div padding="10px">
          <StyledLink to="/diamonds/shop">
            <Button width="100%" maxWidth="400px" active={true} themed>
              Explore Diamonds
            </Button>
          </StyledLink>
        </Div>
      }
      {props.selectCategoryValue === "earrings" &&
        <Div padding="10px">
          <StyledLink to="/fine-jewelry/shop/earrings">
            <Button width="100%" maxWidth="400px" active={true} themed>
              Explore Earrings
            </Button>
          </StyledLink>
        </Div>
      }
      {props.selectCategoryValue === "necklaces" &&
        <Div padding="10px">
          <StyledLink to="/fine-jewelry/shop">
            <Button width="100%" maxWidth="400px" active={true} themed>
              Explore Necklaces
            </Button>
          </StyledLink>
        </Div>
      }
      {props.selectCategoryValue === "fine-rings" &&
        <Div padding="10px">
          <StyledLink to="/fine-jewelry/shop/fine-rings">
            <Button width="100%" maxWidth="400px" active={true} themed>
              Explore Fine Rings
            </Button>
          </StyledLink>
        </Div>
      }
      {props.selectCategoryValue === "bracelets" &&
        <Div padding="10px">
          <StyledLink to="/fine-jewelry/shop/bracelets">
            <Button width="100%" maxWidth="400px" active={true} themed>
              Explore Bracelets
            </Button>
          </StyledLink>
        </Div>
      }
      {props.selectCategoryValue === "watches" &&
        <Div padding="10px">
          <StyledLink to="/fine-jewelry/shop/watches">
            <Button width="100%" maxWidth="400px" active={true} themed>
              Explore Watches
            </Button>
          </StyledLink>
        </Div>
      }
      {props.selectCategoryValue === "other" &&
        <Div padding="10px">
          <StyledLink to="/fine-jewelry/shop/other">
            <Button width="100%" maxWidth="400px" active={true} themed>
              Explore Other
            </Button>
          </StyledLink>
        </Div>
      }
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
