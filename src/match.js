const res = await fetch(...some service);
case (res) {
  when {status: 200, headers: {'Content-Length': s}} -> {
    console.log(`size is ${s}`)
  }
  when {status: 404} -> {
    console.log('JSON not found')
  }
  when {status} if (status >= 400) -> {
    throw new RequestError(res)
  }
}