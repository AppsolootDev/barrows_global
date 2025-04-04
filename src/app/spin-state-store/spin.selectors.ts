import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Segment } from "../entity/segments";


export interface SegmentGroup {
  segment: Segment;
  count: number;
}

export const selectCountSegment = createSelector(
  createFeatureSelector('segmentEntries'),
  (state: Segment[]) => state.length
);

export const selectTotalValue = createSelector(
  createFeatureSelector('segmentEntries'),
  (state: Segment[]) => {
    var totalValue = 0;
    state.forEach((segment) => {
      totalValue += segment.value;
    });
    return totalValue;
  }
);

export const selectGroupedSegmentEntries = createSelector(
  createFeatureSelector('segmentEntries'),
  (state: Segment[]) => {
    var map: Map<number, SegmentGroup> = new Map;
    console.log('state',state);
    if(state) {
    state.forEach(p => {
      if (map.get(p.value)) {
        (map.get(p.value) as SegmentGroup).count++;
      } else {
        map.set(p.value, { segment: p, count: 1 });
      }
    })
   }

    const sortedMap = new Map([...map.entries()].sort());
    return Array.from(sortedMap.values());
  }
)
