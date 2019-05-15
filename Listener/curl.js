curl - H "X-Auth-Token: Qv5vMPB_6aMCSv5ayQAbQCXkSsBzra_K6BbAqc7S0Fr"\ -
    H "X-User-Id: 34YYb2cqqDaFz53ib"\
http: //localhost:3000/api/v1/channels.online?query={"_id": "FC77kqfNrH39wEaKG"}

    curl - G - H "X-Auth-Token: Qv5vMPB_6aMCSv5ayQAbQCXkSsBzra_K6BbAqc7S0Fr"\ -
    H "X-User-Id: 34YYb2cqqDaFz53ib"\ -
    H "Content-type: application/json"\
http: //localhost:3001/api/v1/channels.online \
    --data - urlencode 'query={"_id": "FC77kqfNrH39wEaKG"}'