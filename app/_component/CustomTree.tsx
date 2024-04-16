'use client';

import { Tree } from '@byoungyoon/by-asset';

export default function CustomTree() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0 }}>
      <Tree target="header" color="#ffc5d0" />
    </div>
  );
}
