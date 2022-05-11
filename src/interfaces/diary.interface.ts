import { checkItemInterface, imageSelectorInterface } from 'interfaces/organisms.interface';
import { ActionMeta, MultiValue } from 'react-select';
import React from 'react';

export interface imageInterface {
  imageFile: object;
  preview: string;
}

export interface Option {
  readonly label: string;
  readonly value: string;
}

export type creatableSelectorOnChangeType = (inputValue: MultiValue<Option>, action: ActionMeta<Option>) => void;

export interface writeDiaryInterface extends imageSelectorInterface, checkItemInterface {
  tagList: Array<Option>;
  selectedTag: Array<Option>;
  updateTarget?: string;
  onChange: creatableSelectorOnChangeType;
  onSubmit: () => void;
  onDelete?: () => void;
}

export type diary = {
  id: string;
  nickName: string;
  nickNameTag: string;
  avatar: string;
  tag: string[];
  image: string;
  privateDiary: boolean;
  isSaved?: boolean;
  createdAt: number;
  updatedAt: number;
};

export interface postInterface {
  data: diary;
  onEdit?: (event: React.MouseEvent<SVGElement>) => void;
  onSave?: (event: React.MouseEvent<SVGElement>) => void;
}

export interface diaryInterface {
  diary: diary[];
  onEdit: (event: React.MouseEvent<SVGElement>) => void;
}

export interface friendInterface {
  friendDiary: diary[];
  onSave: (event: React.MouseEvent<SVGElement>) => void;
}

export interface saveDiaryInterface {
  saveDiary: diary[];
  onSave: (event: React.MouseEvent<SVGElement>) => void;
}
