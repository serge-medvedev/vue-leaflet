import { propsToLeafletOptions } from "@src/utils";

import { layerProps, setupLayer } from "./layer";

export const gridLayerProps = {
  ...layerProps,
  opacity: {
    type: Number,
  },
  zIndex: {
    type: Number,
  },
  tileSize: {
    type: Number,
  },
  noWrap: {
    type: Boolean,
    default: undefined,
  },
  minZoom: {
    type: Number,
  },
  maxZoom: {
    type: Number,
  },
} as const;

export const setupGridLayer = (props, leafletRef, context) => {
  const { options: layerOptions, methods: layerMethods } = setupLayer(
    props,
    leafletRef,
    context
  );

  const options = propsToLeafletOptions(props, gridLayerProps, layerOptions);

  const methods = {
    ...layerMethods,
  };

  return { options, methods };
};
