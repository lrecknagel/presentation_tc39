const dbCon(dbName = throw new TypeError('MISSING_dbName')) {
  // ... logic
}

const postOnly = res.method === 'POST'
  ? true
  : throw new Error('UNSUPPORTED_METHOD');