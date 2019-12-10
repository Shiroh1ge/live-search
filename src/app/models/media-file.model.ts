import { MediaFileType } from '../enums/media-file-type.enum';

export interface MediaFile {
  fileName: string;
  type: MediaFileType;
}
