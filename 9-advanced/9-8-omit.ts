{
    type Video = {
        id: string,
        title: string,
        url: string, 
        data: string,
    };
    type videoMetadata  = Omit<Video , 'url' | 'data' | 'h'>
    function getVideo(id: string): Video {
        return {
            id,
            title : 'video',
            url: 'https:// ..',
            data: 'byte-data .. ',
        }
    }

    function getVideoMetadata(id:string) : Omit<Video , 'url' | 'data'>{
        return {
            id: id,
            title : 'title',
        }
    }

    function getVideoMetadata1(id:string) : videoMetadata{
        return {
            id: id,
            title : 'title',
        }
    }
}