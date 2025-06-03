import { App, Stack, StackProps, CfnOutput } from "aws-cdk-lib";
import { Construct } from "constructs";
import { EcommerceDynamoTable } from "./construct/dynamodb";
import { EcommerceRestApi } from "./construct/rest-api";

export interface ECommerceServiceStackProps extends StackProps {
  stage: string;
}

export class ECommerceServiceStack extends Stack {
  constructor(scope: Construct, id: string, props: ECommerceServiceStackProps) {
    super(scope, id, props);

    // Create the DynamoDB table for the e-commerce service
    new EcommerceDynamoTable(this, `EcommerceTable-${props.stage}`, {
      stage: props.stage,
    });
    // Create the REST API for the e-commerce service
    const restApi = new EcommerceRestApi(
      this,
      `EcommerceRestApi-${props.stage}`,
      { stage: props.stage },
    );

    // Output the API endpoint URL
    new CfnOutput(this, "RestApiEndpoint", {
      value: restApi.api.url,
      description: "Endpoint URL for the Ecommerce REST API",
    });
  }
}

// for development, use account/region from cdk cli
const devEnv = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};

const app = new App();

new ECommerceServiceStack(app, "AWS-Api-With-Cognito-dev", {
  ...devEnv,
  stage: "dev",
});
// new EEcommerceServiceStack(app, 'AWS-Api-With-Cognito-prod', { env: prodEnv, stage: 'prod' });

app.synth();
