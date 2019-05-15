module.exports = (robot) ->
  robot.hear /badger/i, (res) ->
    robot.reply "sorry, what's badger"

  robot.respond /open the pod bay doors/i, (res) ->
    # your code here
    robot.reply "yead"