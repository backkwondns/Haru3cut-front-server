import { checkItemInterface, imageSelectorInterface } from 'interfaces/organisms.interface';

export interface imageInterface {
  imageFile: object;
  preview: string;
}

export interface newPostInterface extends imageSelectorInterface, checkItemInterface {}
