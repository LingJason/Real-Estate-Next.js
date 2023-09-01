import React from 'react'

function usePropertyFormat(props) {
  const address = props.property;
  const coverPhoto = props.property;
  const propertyType = props.property;
  const price = props.property;
  const title = props.property;
  const room = props.property;
  const bath = props.property;
  const purpose = props.property;
  const sq = props.property;
  const externalID = props.property;

  return {
    address,
    coverPhoto,
    propertyType,
    price,
    title,
    room,
    bath,
    purpose,
    sq,
    externalID
  }
}

export default usePropertyFormat