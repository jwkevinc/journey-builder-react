
import React, { useState, useEffect, useRef } from 'react';
import {Stage, Layer, Rect, Line, KonvaNodeComponent, Circle} from 'react-konva';
import Konva from 'konva';

import Box2 from './Elements/Box2';
import { Point } from 'types/shapes';

// Loop through rect array, and render each object.
// Loop through each edge array, and connect the two rects together using a line.


export default function JourneyBuilder() {

  const width = 1000;
  const height = 1000;
  const [stageSize, setStageSize] = useState({ width, height });
  const stageRef = useRef(null);
  const [rects, setRects] = useState<Point[]>([
    {x: 200, y: 100},
    {x: 200, y: 200},
    {x: 200, y: 300},
  ])
  const [edges, setEdges] = useState<Konva.Line[]>([]);
  const [scale, setScale] = useState({x: 1, y: 1});

  useEffect(() => {
    const resizeHandler = () => {
      const stage = stageRef.current;
      if (stage) {
        const scale = stage['attrs']['container']['clientWidth'] / stage['attrs']['width']
        setScale({x: scale, y: scale});
      }
    }
    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler);
    }
  }, []);

  return (
    <div id="journey-builder">
      <Stage
        ref={stageRef}
        scale={scale}
        width={stageSize.width}
        height={stageSize.height}
      >
        <Layer>
          {rects.map((point: Point, idx: number) => <Box2 point={point} key={'box'+idx}/> )}
        </Layer>
      </Stage>
    </div>
  )
}