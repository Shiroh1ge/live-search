export enum MediaFilterType {
    ALL = 'all',
    VIDEO = 'video',
    INTERACTIVE_VIDEO = 'interactive_video',
    AUDIO = 'audio',
    IMAGE = 'image',
    DOCUMENT = 'document',
}

export const MediaFilterTypes = Object.values(MediaFilterType) as MediaFilterType[];
