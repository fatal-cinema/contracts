import {join} from 'path'

export const PROTO_PATHS = {
  AUTH: join(__dirname, '../../../proto/auth/v1/auth.proto'),
  ACCOUNT: join(__dirname, '../../../proto/account/v1/account.proto'),
  TELEGRAM: join(__dirname, '../../../proto/telegram/v1/telegram.proto'),
  USERS: join(__dirname, '../../../proto/users/v1/users.proto')
} as const