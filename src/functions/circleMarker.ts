import type L from "leaflet";
import type { PropType } from "vue";

import { propsToLeafletOptions } from "@src/utils";

import { pathProps, setupPath as pathSetup } from "./path";

export const circleMarkerProps = {
  ...pathProps,
  /**
   * Radius of the marker in pixels.
   */
  radius: {
    type: Number,
  },
  latLng: {
    type: [Object, Array] as PropType<L.LatLngExpression>,
    required: true,
    custom: true,
  },
} as const;

export const setupCircleMarker = (
  props,
  leafletRef,
  context
): { options: L.CircleMarkerOptions; methods: any } => {
  const { options: pathOptions, methods: pathMethods } = pathSetup(
    props,
    leafletRef,
    context
  );

  const options = propsToLeafletOptions(props, circleMarkerProps, pathOptions);

  const methods = {
    ...pathMethods,
    setRadius(radius) {
      leafletRef.value.setRadius(radius);
    },
    setLatLng(latLng) {
      leafletRef.value.setLatLng(latLng);
    },
  };

  return { options, methods };
};
