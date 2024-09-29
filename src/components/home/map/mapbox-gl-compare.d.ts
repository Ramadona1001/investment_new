// src/mapbox-gl-compare.d.ts
declare module "mapbox-gl-compare" {
  import mapboxgl from "mapbox-gl";

  interface CompareOptions {
    mousemove?: boolean;
    orientation?: "vertical" | "horizontal";
  }

  export default class Compare {
    constructor(
      map1: mapboxgl.Map,
      map2: mapboxgl.Map,
      options?: CompareOptions
    );
  }
}
