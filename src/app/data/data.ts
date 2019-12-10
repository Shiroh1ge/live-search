import { MediaFilterType } from '../enums/media-file-type.enum';

export const MediaFilesMockData = [
    {
        type: MediaFilterType.IMAGE,
        fileName: 'background-2.jpg',
        createdAt: new Date(2019, 12, 15)
    },
    {
        type: MediaFilterType.IMAGE,
        fileName: 'background-2.jpg',
        createdAt: new Date(2019, 12, 2)
    },
    {
        type: MediaFilterType.IMAGE,
        fileName: 'background-3.jpg',
        createdAt: new Date(2019, 12, 16)
    },
    {
        type: MediaFilterType.VIDEO,
        fileName: 'video-1.mp4',
        createdAt: new Date(2019, 12, 2)


    },
    {
        type: MediaFilterType.VIDEO,
        fileName: 'video-2.mp4',
        createdAt: new Date(2019, 12, 5)


    },
    {
        type: MediaFilterType.VIDEO,
        fileName: 'video-3.mp4',
        createdAt: new Date(2019, 12, 6)
    },
    {
        type: MediaFilterType.DOCUMENT,
        fileName: 'document-1.txt',
        createdAt: new Date(2019, 12, 15)


    },
    {
        type: MediaFilterType.DOCUMENT,
        fileName: 'document-2.txt',
        createdAt: new Date(2019, 12, 2)
    },
    {
        type: MediaFilterType.INTERACTIVE_VIDEO,
        fileName: 'interactive-video-1.mp4',
        createdAt: new Date(2019, 12, 15)


    },
    {
        type: MediaFilterType.INTERACTIVE_VIDEO,
        fileName: 'interactive-video-2.mp4',
        createdAt: new Date(2019, 12, 2)
    },
    {
        type: MediaFilterType.AUDIO,
        fileName: 'audio-file-1.mp3',
        createdAt: new Date(2019, 12, 2)
    },
    {
        type: MediaFilterType.AUDIO,
        fileName: 'audio-file-2.mp3',
        createdAt: new Date(2019, 12, 15)


    },
    {
        type: MediaFilterType.AUDIO,
        fileName: 'audio-file-3.mp3',
        createdAt: new Date(2019, 12, 2)
    },
];
