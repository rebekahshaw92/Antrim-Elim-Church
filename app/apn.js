const path = require('path')
const apn = require('apn')
//const conf = require('./confidential')

// sandbox or production APN service
const apnProduction = process.env.NODE_ENV === 'production'
  ? true
  : false;

// configuring APN with credentials
const apnOptions = {
  token: {
    key: path.join(__dirname, '.', 'certs', 'AuthKey_X4LG48K2U5.p8'),
    keyId: 'X4LG48K2U5',
    teamId: 'PW43C98BDG'
  },
  production: apnProduction
};

const apnProvider = new apn.Provider(apnOptions);

let notification = new apn.Notification({
    alert: {
      title: 'Hello World',
      body: 'Hello world body'
    },
    topic: 'org.reactjs.native.example.Antrim-Elim',
    payload: {
      "custom": "value",
    },
    pushType: 'background'
  });

  const deviceTokens = [
    '00008020-00152C493A91002E'
  ];
  
  apnProvider.send(notification, deviceTokens).then(response => {
    
    // successful device tokens
    console.log(response.sent);
    // failed device tokens
    console.log(response.failed);
  });