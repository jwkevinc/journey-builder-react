
import React, { useState } from 'react';
import { Block } from './components/blocks';
import { insertAfterId, deleteId } from 'helper/util';

import JSONBuilder from 'components/JsonBuilder';
import './journeyBuilder.scss';

export default function JourneyBuilderTable() {

  const initialMapping = {
    id: 1,
    method: 'trigger',
    data: {
    },
    next: {
      id: 2,
      method: 'email',
      data: {
      },
      next: {
        id: 3,
        method: 'condition',
        data: {
        },
        yes: {
          id: 4,
          method: 'email',
          data: {
          },
          next: {
            id: 5,
            method: 'delay2 ',
            data: {
            },
            next: undefined
          }
        },
        no: {
          id: 6,
          method: 'delay',
          data: {
          },
          next: {
            id: 7,
            method: 'condition',
            data: {
            },
            yes: {
              id: 8,
              method: 'webhook',
              data: {},
              next: undefined,
            },
            no: {
              id: 9,
              method: 'experience',
              data: {},
              next: undefined
            }
          }
        }
      }
    }
  }

  const [mapping, setMapping] = useState(initialMapping);

  // Will mutate mappings to correctly handle the invoked action, and set it back to react's state.
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
