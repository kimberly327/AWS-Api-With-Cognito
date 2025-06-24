import { awscdk } from "projen";
const project = new awscdk.AwsCdkTypeScriptApp({
  cdkVersion: "2.200.1",
  cdkCliVersion: "2.1017.0",
  defaultReleaseBranch: "main",
  name: "AWS-Api-With-Cognito",
  projenrcTs: true,
  prettier: true,
  tsconfig: {
    include: ["test/**/*.ts"],
    compilerOptions: {
      rootDir: "./",
      lib: ["es2021"],
    },
  },

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
