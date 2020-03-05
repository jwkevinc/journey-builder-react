
import React, { useState } from 'react';
import { Block } from './components/blocks';
import { insertAfterId, deleteId } from 'helper/util';

import JSONBuilder from 'components/JsonBuilder';
import initialMapping from 'mappings';

import './journeyBuilder.scss';


export default function JourneyBuilderTable() {

  const [mapping, setMapping] = useState(initialMapping);

  function onHandleAdd(id: any, step: any) {
    insertAfterId(mapping, id, step);
    setMapping(Object.assign({}, mapping));
  }

  function onHandleDelete(id: any) {
    deleteId(mapping, id);
    setMapping(Object.assign({}, mapping));
  }

  return (
    <div className="journey-builder">
      <div className="journey-diagram">
        <div className="center">
          <Block
            structure={mapping}
            onAdd={onHandleAdd}
            onDelete={onHandleDelete}/>
        </div>
      </div>
      <div className="json-viewer">
        <JSONBuilder mapping={mapping} />
      </div>
    </div>
  )
}
