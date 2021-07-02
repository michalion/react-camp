import React, { useEffect, useState } from "react";

const withSubscription = (WrappedComponent, observable, initialDataGetter) => {
  return function DataSubscriber(props) {
    const [data, setData] = useState(initialDataGetter());

    // FIXME!

    return <WrappedComponent data={data} {...props} />;
  };
};

export default withSubscription;
