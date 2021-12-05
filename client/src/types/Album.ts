import { IHaveName } from './IHaveName';

export interface Album extends IHaveName {
  description: string;
  country: string;
  type: string;
  listeners: number;
  purpose: string;
}