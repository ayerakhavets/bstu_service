// @flow
import type { PickerItem } from './LabelPicker';

// FIXME: move to PickerLabel.
const mapItemToPickerItem = (item: string): PickerItem => ({ label: item, value: item });

export default {
  mapItemToPickerItem
};
