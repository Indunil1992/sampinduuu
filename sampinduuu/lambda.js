let AWS = require('aws-sdk');
const rekognition = new AWS.Rekognition();

exports.handler = async (event) => {
    rekognition.detectText({
        Image: {
            S3Object: {
                Bucket: "test.indunil1",
                Name: "obama.jpg"
            }
        }
    }).promise()
        .then(data => {
            console.log("dataaa");
            // your code goes here
        })
        .catch(err => {
                        console.log("dataaa");

            // error handling goes here
        });

    return { "message": "Successfully executed 123" };
};