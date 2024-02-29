import React from 'react';

export const Capitalize = ({ str }) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}