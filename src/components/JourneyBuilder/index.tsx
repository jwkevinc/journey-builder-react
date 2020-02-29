
import React, { useState, useEffect, useRef } from 'react';
import {Stage, Layer, Rect, Line, KonvaNodeComponent, Circle} from 'react-konva';
import Konva from 'konva';

import Box2 from './Elements/Box2';
import { Point } from 'types/shapes';

// Loop through rect array, and render each object.
// Loop through each edge array, and connect the two rects together using a line.


export default function JourneyBuilder() {

  const stageRef = useRef(null);
  const [rects, setRects] = useState<Point[]>([
    {x: 50, y: 50},
    {x: 100, y: 150},
    {x: 200, y: 250},
  ])
  const [edges, setEdges] = useState<Konva.Line[]>([]);


  useEffect(() => {
  }, []);

  return (
    <div id="journey-builder">
      <Stage
        ref={stageRef}
        width={window.innerWidth}
        height={window.innerHeight}
      >

        {/* Shape Layer */}
        <Layer>
          {rects.map((point: Point, idx: number) => <Box2 point={point} key={'box'+idx}/> )}
        </Layer>

        {/* Line Layer */}
        <Layer>
          <Line
            points={[rects[0].x, rects[0].y, rects[1].x, rects[1].y]}
            stroke="black"
            closed
          />
        </Layer>

      </Stage>
    </div>
  )
}

/* <Line
  points={[anchor.x, anchor.y, window.innerWidth / 2, window.innerHeight / 2]}
  tension={0.2}
  stroke="black"
  closed
  strokeWidth={strokeWidth}
/> */