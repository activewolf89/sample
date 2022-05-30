import React from 'react';
import Div from 'shared/Div';
import P from 'shared/P'

// -----
const funcC0mp = (props) =>{
  const {StoneLab,MainShape,StoneCert,StoneClarity,StoneHue,StoneMake,StoneTWT,ItemLength,ItemMetalType,ItemVendorName,ContainsStones,ItemMetalWeight,ItemStyle,ItemSize,Sizable} = props.item
  return (
    <Div color='black'>
      <P>
        {
          props.item.CategoryId  === 140 ?
            <Div>
              {`${ItemMetalType} ${ItemStyle} design by ${ItemVendorName}, size ${ItemSize}`}
              {
                ContainsStones &&
                <P>
                  {
                  `containing ${ContainsStones} for a total diamond weight of ${ItemMetalWeight}.`
                  }

                </P>
              }
              <P>
                {Sizable ? "This ring is sizable up or down 2 sizes": "This ring is unsizable"}
              </P>
            </Div>:
          props.item.CategoryId  === 150 ?
            <Div>
              {`${ItemMetalType} ${ItemStyle} design by ${ItemVendorName}`}
              {
                  ContainsStones &&
                <P>
                  {
                    `containing ${ContainsStones} for a total diamond weight of ${ItemMetalWeight}.`
                  }

                </P>
              }
              <P>
                Earrings with post are provided Jumbo-Back earrnuts, depending on metal of earrings we will match metal with backings.
              </P>
            </Div>:
          props.item.CategoryId  === 110 ?
            <Div>
              {`${ItemMetalType} ${ItemStyle} design by ${ItemVendorName}, size ${ItemSize}, width ${ItemLength}mm`}
              {
                ContainsStones &&
                <P>
                  {
                  `containing ${ContainsStones} for a total diamond weight of ${ItemMetalWeight}cttw.`
                  }

                </P>
              }
              <P>
                {Sizable ? "This ring is sizable up or down 2 sizes": "This ring is unsizable"}
              </P>
            </Div>:
          props.item.CategoryId  === 115 ?
            <Div>
              {`${ItemMetalType} ${ItemStyle} design by ${ItemVendorName}, size ${ItemSize}, width ${ItemLength}mm`}
              {
                ContainsStones &&
                <P>
                  {
                  `containing ${ContainsStones} for a total diamond weight of ${ItemMetalWeight}.`
                  }

                </P>
              }
              <P>
                {Sizable ? "This ring is sizable up or down 2 sizes": "This ring is unsizable"}
              </P>
            </Div>:
          props.item.CategoryId  === 130 ?
            <Div>
              {`${ItemMetalType} ${ItemStyle} design by ${ItemVendorName}, size ${ItemSize}, width ${ItemLength}mm`}
              {
                ContainsStones &&
                <P>
                  {

                  `containing ${ContainsStones} for a total diamond weight of ${ItemMetalWeight}cttw.`
                  }

                </P>
              }
              <P>
                {Sizable ? "This ring is sizable up or down 2 sizes": "This ring is unsizable"}
              </P>
            </Div>:
          props.item.CategoryId  === 165 ?
            <Div>
              {`${ItemMetalType} ${ItemStyle} design by ${ItemVendorName}, chain length/thickness ${ItemLength}"/${ItemSize}mm`}
              {
                ContainsStones &&
                <P>
                  {

                  `containing ${ContainsStones} for a total diamond weight of ${ItemMetalWeight}cttw.`
                  }

                </P>
              }
              <P>
                Necklace length is adjustable, ask us to add jump-rings or add extra length.
              </P>
            </Div>:
          props.item.CategoryId  === 170 ?
            <Div>
              {`${ItemMetalType} ${ItemStyle} design by ${ItemVendorName},`}
              {
                ContainsStones &&
                <P>
                  {
                  `containing ${ContainsStones} for a total diamond weight of ${ItemMetalWeight}cttw.`
                  }
                </P>
              }
            </Div>:
          props.item.CategoryId  === 190 ?
            <Div>
              {
                `${MainShape} natural diamond, ${StoneHue} color, ${StoneClarity} clarity, ${StoneTWT} weight, ${StoneMake} cut, ${StoneLab} lab graded cert: ${StoneCert}`
              }
            </Div>:
          props.item.CategoryId  === 500 ?
            <Div>
              {`${ItemMetalType} ${ItemStyle} design by ${ItemVendorName}`}
              {
                ContainsStones &&
                <P>
                  {
                  `containing ${ContainsStones} for a total diamond weight of ${ItemMetalWeight}cttw.`
                  }
                </P>
              }
            </Div>:
            <Div>
              {`${ItemMetalType} ${ItemStyle} design by ${ItemVendorName},`}
              {
                ContainsStones &&
                <P>
                  {
                  `containing ${ContainsStones} for a total diamond weight of ${ItemMetalWeight}cttw.`
                  }
                </P>
              }
            </Div>

        }
      </P>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
