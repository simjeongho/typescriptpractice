{
    type Video = {
        id: string,
        title: string,
        url: string, 
        data: string,
    };
    type videoMetadata  = Pick<Video , 'id'|'title'>
    function getVideo1(id: string): Video {
        return {
            id,
            title : 'video',
            url: 'https:// ..',
            data: 'byte-data .. ',
        }
    }

    function getVideoMetadata12(id:string) : Pick<Video , 'id' | 'title'>{
        return {
            id: id,
            title : 'title',
        }
    }

    function getVideoMetadata11(id:string) : videoMetadata{
        return {
            id: id,
            title : 'title',
        }
    }
}