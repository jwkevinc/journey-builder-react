
import React from 'react';
import {Stage, Layer} from 'react-konva';

import Box from './Elements/Box';

export default function JourneyBuilder() {
  return (
    <div id="journey-builder">
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Box level={0}/>
          <Box level={1} isLeftChild={true}/>
          <Box level={1} isRightChild={true}/>
          <Box level={2} isRightChild={true}/>
        </Layer>
      </Stage>
    </div>
  )
}