import request from '@/utils/request'

export enum AlbumApiNames {
  FETCH_ALBUM = 'fetchAlbum',
}

// 专辑详情
export interface FetchAlbumParams {
  id: number
}
interface FetchAlbumResponse {
  code: number
  resourceState: boolean
  album: Album
  songs: Track[]
  description: string
}
export function fetchAlbum(
  params: FetchAlbumParams,
  noCache: boolean
): Promise<FetchAlbumResponse> {
  const otherParams: { timestamp?: number } = {}
  if (noCache) otherParams.timestamp = new Date().getTime()
  return request({
    url: '/album',
    method: 'get',
    params: { ...params, ...otherParams },
  })
}
