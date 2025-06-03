import { Table, AttributeType, BillingMode } from "aws-cdk-lib/aws-dynamodb";
import { Construct } from "constructs";

export interface EcommerceDynamoTableProps {
  stage: string;
}

export class EcommerceDynamoTable extends Construct {
  public readonly table: Table;

  constructor(scope: Construct, id: string, props: EcommerceDynamoTableProps) {
    super(scope, id);

    this.table = new Table(this, `EcommerceTable-${props.stage}`, {
      partitionKey: { name: "PK", type: AttributeType.STRING },
      sortKey: { name: "SK", type: AttributeType.STRING },
      billingMode: BillingMode.PAY_PER_REQUEST, // On-demand
      tableName: `EcommerceTable-${props.stage}`,
      // description is not a property for DynamoDB Table, so only in name
    });

    this.table.addGlobalSecondaryIndex({
      indexName: "GSI-Items",
      partitionKey: { name: "SK", type: AttributeType.STRING },
      sortKey: { name: "PK", type: AttributeType.STRING },
    });
  }
}
