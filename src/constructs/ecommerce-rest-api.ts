import { RestApi, EndpointType, MethodOptions, MockIntegration, IntegrationResponse, PassthroughBehavior } from 'aws-cdk-lib/aws-apigateway';
import { Construct } from 'constructs';

export interface EcommerceRestApiProps {
  stage: string;
}

export class EcommerceRestApi extends Construct {
  public readonly api: RestApi;

  constructor(scope: Construct, id: string, props: EcommerceRestApiProps) {
    super(scope, id);
    this.api = this.createRestApi(props.stage);
    this.addUserDetailsResource();
  }

  private createRestApi(stage: string): RestApi {
    return new RestApi(this, `EcommerceRestApi-${stage}`, {
      restApiName: `Ecommerce Service - ${stage}`,
      description: `REST API for the ecommerce platform - ${stage}`,
      endpointTypes: [EndpointType.REGIONAL],
    });
  }

  private addUserDetailsResource() {
    // Dichiara le risorse all'inizio
    const user = this.api.root.addResource('user');
    const details = user.addResource('details');

    // Aggiungi il metodo dopo la dichiarazione
    this.addUserDetailsGetMethod(details);
  }

  private addUserDetailsGetMethod(detailsResource: any) {
    detailsResource.addMethod('GET', new MockIntegration({
      integrationResponses: [
        {
          statusCode: '200',
          responseTemplates: {
            'application/json': '{ "message": "User details" }',
          },
        },
      ],
      passthroughBehavior: PassthroughBehavior.NEVER,
      requestTemplates: {
        'application/json': '{"statusCode": 200}',
      },
    }), {
      methodResponses: [{ statusCode: '200' }],
    });
  }
}
