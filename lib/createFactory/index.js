import * as React from "react";

export const createFactory = Type => React.createElement.bind(null, Type);
