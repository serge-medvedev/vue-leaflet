import { propsToLeafletOptions } from "@src/utils";

import { layerGroupProps, setupLayerGroup } from "./layerGroup";

export const featureGroupProps = {
  ...layerGroupProps,
} as const;

export const setupFeatureGroup = (props, leafletRef, context) => {
  const { options: layerOptions, methods: layerGroupMethods } = setupLayerGroup(
    props,
    leafletRef,
    context
  );

  const options = propsToLeafletOptions(props, featureGroupProps, layerOptions);

  const methods = {
    ...layerGroupMethods,
  };

  return { options, methods };
};
