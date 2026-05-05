import {join} from 'path'

export const PROTO_PATHS = {
  AUTH: join(__dirname, '../../../proto/auth/v1/auth.proto')
} as const