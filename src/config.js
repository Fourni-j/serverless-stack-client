export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_51GuH9oHhAZopZSwIrLldqhzPinpKceP7Fa4XzCiWsmi9mSMfUaRJlVgscRMBKIsKFVREIuEnJL2XFqFRdr5k1lFU0068XUzsRj",
    s3: {
        REGION: "eu-west-1",
        BUCKET: "notes-app-uploads-react-tuto"
    },
    apiGateway: {
        REGION: "eu-west-1",
        URL: "https://ribiw0ibu8.execute-api.eu-west-1.amazonaws.com/prod"
    },
    cognito: {
        REGION: "eu-west-1",
        USER_POOL_ID: "eu-west-1_YTucIR8xy",
        APP_CLIENT_ID: "4kqb5t63s99pr2pb8tqepgq5du",
        IDENTITY_POOL_ID: "eu-west-1:1b3e167b-9f3d-42bc-978e-07fa687cd2d3"
    }
};