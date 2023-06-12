export const getClient =  function() {
  let client = {
    width: 0,
    height: 0
  }
  client.width = screen.width
  client.height = screen.height
  return client
}