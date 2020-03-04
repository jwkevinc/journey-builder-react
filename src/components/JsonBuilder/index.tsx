
import React from 'react';
import JSONTree from 'react-json-tree';

export default function JsonBuilder(props: any) {
  return (
    <JSONTree
      theme={'monokai'}
      shouldExpandNode={(props: any) => true}
      data={props.mapping}/>
  )
}