import React from 'react';

const Skeleton = ({ height, width }: { height: number, width: number }) => {
  return (
    <div
      className="skeleton"
      style={{ height: `${height}px`, width: `${width}px` }}
    ></div>
  );
};

const Loading = () => {
  return (
    <div className="flex flex-col gap-4 w-52">
      <Skeleton height={324} width={300} />
      <Skeleton height={43} width={200} />
      <Skeleton height={43} width={300} />
      <Skeleton height={43} width={300} />
    </div>
  );
};

export default Loading;