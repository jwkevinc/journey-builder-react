
import React, { useState, useEffect, useRef } from 'react';
import {Stage, Layer, Rect, Line, KonvaNodeComponent, Circle} from 'react-konva';
import Konva from 'konva';

import Box2 from './Elements/Box2';
import { Point } from 'types/shapes';

// Loop through rect array, and render each object.
// Loop through each edge array, and connect the two rects together using a line.

function createRect(x: number, y: number) {
  return {
    id: 'rect-1',
    x: x || Math.round(Math.random() * 500),
    y: y || Math.round(Math.random() * 500),
  }
}

export default function JourneyBuilder() {

  const width = 1000;
  const height = 1000;

  const stageRef = useRef(null);
  const layerRef = useRef(null);
  const [rects, setRects] = useState<Point[]>([createRect(500, 150)])
  const [scale, setScale] = useState({x: 1, y: 1});

  useEffect(() => {
    const resizeHandler = () => {
      const layer = layerRef.current;
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
        name="kevin"
        ref={stageRef}
        scale={scale}
        width={width}
        height={height}
      >
        <Layer
          ref={layerRef}
        >
          {rects.map((point: Point, idx: number) => <Box2 point={point} key={'box'+idx}/> )}
        </Layer>
      </Stage>
    </div>
  )
}