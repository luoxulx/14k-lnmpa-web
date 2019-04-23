import request from '@/utils/request'

/** ----- open api ----- */
export function login(data) {
  return request({
    url: '/auth/login',
    method: 'post',
    data
  })
}
export function pictureUpload(data) {
  return request({
    url: '/file/upload',
    method: 'post',
    data
  })
}
/** ----- open api end ----- */
export function logout() {
  return request({
    url: '/auth/logout',
    method: 'post'
  })
}

export function userInfo() {
  return request({
    url: '/user/info',
    method: 'get'
  })
}

/** ----- article ----- */
export function articleList(params) {
  return request({
    url: 'article',
    method: 'get',
    params: params
  })
}

export function articleDetail(id) {
  return request({
    url: 'article/' + id,
    method: 'get'
  })
}

export function articleCreate(data) {
  return request({
    url: 'article',
    method: 'post',
    data
  })
}

export function articleUpdate(data) {
  return request({
    url: 'article/' + data.id,
    method: 'put',
    data
  })
}

export function articleDelete(id) {
  return request({
    url: 'article/' + id,
    method: 'delete'
  })
}

export function batchDeleteArticle(data) {
  return request({
    url: 'article/batch',
    method: 'delete',
    data
  })
}

/** ----- category ----- */
export function categoryList(params) {
  return request({
    url: 'category',
    method: 'get',
    params: params
  })
}

export function categoryAll() {
  return request({
    url: 'category/all',
    method: 'get'
  })
}

export function categoryDetail(id) {
  return request({
    url: 'category/' + id,
    method: 'get'
  })
}

export function categoryCreate(data) {
  return request({
    url: 'category',
    method: 'post',
    data
  })
}

export function categoryUpdate(data) {
  return request({
    url: 'category/' + data.id,
    method: 'put',
    data
  })
}

export function categoryDelete(id) {
  return request({
    url: 'category/' + id,
    method: 'delete'
  })
}

export function batchDeleteCategory(data) {
  return request({
    url: 'category/batch',
    method: 'delete',
    data
  })
}

/** ----- tag ----- */
export function tagList(params) {
  return request({
    url: 'tag',
    method: 'get',
    params: params
  })
}

export function tagAll() {
  return request({
    url: 'tag/all',
    method: 'get'
  })
}

export function tagDetail(id) {
  return request({
    url: 'tag/' + id,
    method: 'get'
  })
}

export function tagCreate(data) {
  return request({
    url: 'tag',
    method: 'post',
    data
  })
}

export function tagUpdate(data) {
  return request({
    url: 'tag/' + data.id,
    method: 'put',
    data
  })
}

export function tagDelete(id) {
  return request({
    url: 'tag/' + id,
    method: 'delete'
  })
}

export function batchDeleteTag(data) {
  return request({
    url: 'tag/batch',
    method: 'delete',
    data
  })
}

/** ----- comment ----- */
export function commentList(params) {
  return request({
    url: 'comment',
    method: 'get',
    params: params
  })
}

export function commentDetail(id) {
  return request({
    url: 'comment/' + id,
    method: 'get'
  })
}

export function commentCreate(data) {
  return request({
    url: 'comment',
    method: 'post',
    data
  })
}

export function commentUpdate(data) {
  return request({
    url: 'comment/' + data.id,
    method: 'put',
    data
  })
}

export function commentDelete(id) {
  return request({
    url: 'comment/' + id,
    method: 'delete'
  })
}