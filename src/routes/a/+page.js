import * as lib from "@kitql/helper";

/** @type {import('./$types').PageLoad} */
export async function load() {
  const l = new lib.Log("My Lib");
  l.info("Working?");
  return {};
}
