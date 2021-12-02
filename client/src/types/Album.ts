import { IHaveName } from './IHaveName';

export interface Album extends IHaveName{
  id: string,
  name: string,
  description: string,
  country: string,
  type: string,
  listeners: number,
  purpose: string
}