import { INewsImage } from './INewsImage'

export interface INews {
  _id: string,
  title: string,
  description: string,
  newsImage: Array<INewsImage>
}