const dev = {
    STRIPE_KEY: "pk_test_51GuH9oHhAZopZSwIrLldqhzPinpKceP7Fa4XzCiWsmi9mSMfUaRJlVgscRMBKIsKFVREIuEnJL2XFqFRdr5k1lFU0068XUzsRj",
    s3: {
        REGION: "us-east-1",
        BUCKET: "notes-app-2-api-dev-attachmentsbucket-nlyo1jwbpkgx"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://1merzxqad3.execute-api.us-east-1.amazonaws.com/dev"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_D8T1L90sp",
        APP_CLIENT_ID: "66470tggo6i29qe8fssddl1na",
        IDENTITY_POOL_ID: "us-east-1:87407f9c-ba81-4a6f-82bb-12f36f207b12"
    }
};

const prod = {
    STRIPE_KEY: "pk_test_51GuH9oHhAZopZSwIrLldqhzPinpKceP7Fa4XzCiWsmi9mSMfUaRJlVgscRMBKIsKFVREIuEnJL2XFqFRdr5k1lFU0068XUzsRj",
    s3: {
        REGION: "us-east-1",
        BUCKET: "notes-app-2-api-prod-attachmentsbucket-mo24g4k03u85"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://8gvumr3xta.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_s0vSV7yPL",
        APP_CLIENT_ID: "1m5jh6e3ntuerm83dadubbcoaq",
        IDENTITY_POOL_ID: "us-east-1:7dd26c3d-044d-4fe7-a66f-07b3da8923be"
    }
};

const config = process.env.REACT_APP_STAGE === 'prod' ? prod : dev;

export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
};