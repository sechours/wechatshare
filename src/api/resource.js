/**
 * Created by bruce.han on 2017/10/31.
 */
import {API_ROOT} from './config.js'

const apiMusic = {
  wx_signature: 'wx_signature',
  postUrl:'postUrl'
}

export const wxiSignatureResource = API_ROOT.concat(apiMusic.wx_signature)
export const postUrlResource = API_ROOT.concat(apiMusic.postUrl)
