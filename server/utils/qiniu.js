import qiniu from 'qiniu'
import {qiniuConfig} from '../config'

let { AK, SK ,bucket} = qiniuConfig

const mac = new qiniu.auth.digest.Mac(AK, SK);

const options = {
  scope: bucket,
};

const putPolicy = new qiniu.rs.PutPolicy(options);


const uploadToken =()=> {
  return putPolicy.uploadToken(mac);
}

export default uploadToken