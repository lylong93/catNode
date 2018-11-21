import qiniu from 'qiniu'
import config from '../config'

qiniu.conf.ACCESS_KEY = config.qiniu.AK
qiniu.conf.SECRET_KEY = config.qiniu.SK

const bucket = config.qiniu.bucket
