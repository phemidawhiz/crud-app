import React, { Suspense } from "react";

const Loader = () => {
  return (
    <div className="flex flex-row items-center justify-center w-screen h-screen">
      <h2>Loading...</h2>
    </div>
  );
};

const WithSuspense = (Component: any) => (props: any) => {
  return (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );
};

export default WithSuspense;
