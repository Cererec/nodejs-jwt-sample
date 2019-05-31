'use strict';

const fs   = require('fs');
const jwt  = require('jsonwebtoken');

// PAYLOAD
let payload = {
    data1: "Data 1",
    data2: "Data 2",
    data3: "Data 3",
    data4: "Data 4",
};
// PRIVATE and PUBLIC key
let privateKEY  = fs.readFileSync('./private.key', 'utf8');
let publicKEY  = fs.readFileSync('./public.key', 'utf8');

let i  = 'Mysoft corp';          // Issuer 
let s  = 'some@user.com';        // Subject 
let a  = 'http://mysoftcorp.in'; // Audience

// SIGNING OPTIONS
let signOptions = {
    issuer:  i,
    subject:  s,
    audience:  a,
    expiresIn:  "122h",
    algorithm:  "RS256"
};

let token = jwt.sign(payload, privateKEY, signOptions);

console.log("Token - " + token)

// VERIFYING JWT

// var verifyOptions = {
//     issuer:  i,
//     subject:  s,
//     audience:  a,
//     expiresIn:  "12h",
//     algorithm:  ["RS256"]
//    };
//    var legit = jwt.verify(`eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhMSI6IkRhdGEgMSIsImRhdGEyIjoiRGF0YSAyIiwiZGF0YTMiOiJEYXRhIDMiLCJkYXRhNCI6IkRhdGEgNCIsImlhdCI6MTU1OTA2OTMxNywiZXhwIjoxNTU5MTEyNTE3LCJhdWQiOiJodHRwOi8vbXlzb2Z0Y29ycC5pbiIsImlzcyI6Ik15c29mdCBjb3JwIiwic3ViIjoic29tZUB1c2VyLmNvbSJ9.FBjkADMVNXcRGySqsV3ahEij8ukbF30BokhPgAl-nROe_4tS82ma1uJiQ3_S_DWOPCNc_ivuNHHIytGrhCHwBQ`, publicKEY, verifyOptions);

//    console.log("\nJWT verification result: " + JSON.stringify(legit));