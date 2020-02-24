import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import page from "./page";
import settings from "./setting";
import article from "./article";
import medium from "./medium";

/**
 * Schema
 */

export default createSchema({
  name: "default",
  types: schemaTypes.concat([page, article, medium, settings])
});
