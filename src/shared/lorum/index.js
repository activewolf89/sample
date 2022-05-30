import React from 'react';
import Div from 'shared/Div';
import PropTypes from 'prop-types';
//shared

// -----
const lorum = (props) =>{

  return (

    <Div>
      {props.half &&
        <Div>

       Maecenas tincidunt lorem eget libero vulputate accumsan. Pellentesque gravida velit vitae dui tincidunt, nec mattis lacus aliquam. In purus nisl, accumsan ullamcorper congue vel, feugiat a est. Nam at hendrerit dui.
      </Div>
      }
      {!props.half &&
        <Div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque faucibus, neque sit amet auctor mattis, elit libero vestibulum arcu, ut porta libero magna vitae mi. Sed est tellus, bibendum aliquet eros at, molestie commodo urna. Phasellus ullamcorper vitae ipsum vitae sagittis. Sed vehicula vitae eros a blandit. Vestibulum porttitor mauris vel augue iaculis pellentesque. Vivamus ligula massa, feugiat vitae mattis et, mollis ultricies urna. Nunc mollis felis  malesuada rutrum. Maecenas tincidunt lorem eget libero vulputate accumsan. Pellentesque gravida velit vitae dui tincidunt, nec mattis lacus aliquam. In purus nisl, accumsan ullamcorper congue vel, feugiat a est. Nam at hendrerit dui.
        </Div>
      }
    </Div>
  )
}
lorum.propTypes = {
  half: PropTypes.bool
}
export default lorum;
