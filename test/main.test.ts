import { App } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { ECommerceServiceStack } from "../src/main";

test("Snapshot", () => {
  const app = new App();
  const stack = new ECommerceServiceStack(app, "test", { stage: "test" });

  const template = Template.fromStack(stack);
  expect(template.toJSON()).toMatchSnapshot();
});
