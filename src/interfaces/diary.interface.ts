import { checkItemInterface, imageSelectorInterface } from 'interfaces/organisms.interface';
import { ActionMeta, MultiValue } from 'react-select';

export interface imageInterface {
  imageFile: object;
  preview: string;
}

export interface Option {
  readonly label: string;
  readonly value: string;
}

export type creatableSelectorOnChangeType = (inputValue: MultiValue<Option>, action: ActionMeta<Option>) => void;

export interface newPostInterface extends imageSelectorInterface, checkItemInterface {
  tagList: Array<Option>;
  onChange: creatableSelectorOnChangeType;
  onSubmit: () => void;
}
