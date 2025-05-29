import { App, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { EcommerceDynamoTable } from './constructs/ecommerce-dynamo-table';

export class ECommerceServiceStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);

    // Create the DynamoDB table for the e-commerce service
    new EcommerceDynamoTable(this, 'EcommerceTable');
  }
}

// for development, use account/region from cdk cli
const devEnv = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};

const app = new App();

new ECommerceServiceStack(app, 'AWS-Api-With-Cognito-dev', { env: devEnv });
// new EEcommerceServiceStack(app, 'AWS-Api-With-Cognito-prod', { env: prodEnv });

app.synth();