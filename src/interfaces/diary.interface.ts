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

export interface newPostInterface extends imageSelectorInterface, checkItemInterface {
  tagList: Array<Option>;
  onChange: creatableSelectorOnChangeType;
  onSubmit: () => void;
}

export type post = {
  id: string;
  nickName: string;
  nickNameTag: string;
  avatar: string;
  tag: string[];
  image: string;
  privatePost: boolean;
  createdAt: string;
  updatedAt: string;
};

export interface postInterface {
  data: post;
  onEdit: (event: React.MouseEvent<SVGElement>) => void;
}

export interface diaryInterface {
  posts: post[];
  onEdit: (event: React.MouseEvent<SVGElement>) => void;
}
