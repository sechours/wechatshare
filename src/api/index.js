/**
 * Created by cj on 2017/10/31.
 */
import axios from 'axios'
import {
  wxiSignatureResource,
  postUrlResource
} from './resource'
export default {
  // 获取个人信息，注入cookies
  getwxiSignatureResource (value) {
    return axios.get(wxiSignatureResource, {
      params: {
        id: value
      }
    })
  },
  getpostUrlResource(value){
    return axios.get(postUrlResource, {
      params: {
        id: value
      }
    })
  }
}
