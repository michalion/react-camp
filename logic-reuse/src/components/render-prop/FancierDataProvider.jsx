import { useState, useEffect } from "react";

const FancierDataProvider = ({ observable, initialDataGetter, render }) => {
  const [data, setData] = useState(initialDataGetter());

  // FIXME with hooks!

  return render(data);
};

export default FancierDataProvider;
