import { MediaFilterType } from '../enums/media-file-type.enum';

export interface MediaFile {
  fileName: string;
  type: MediaFilterType;
  createdAt: Date;
}
