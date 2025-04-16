import { Stack, StackProps, SecretValue } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';

export class GithubAwsCicdStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const githubToken = SecretValue.secretsManager('arn:aws:secretsmanager:ap-southeast-1:767397656228:secret:githubkiennt308token-FQ6VnY');

    new CodePipeline(this, 'MyPipeline', {
      pipelineName: 'MyCDKPipeline',
      synth: new ShellStep('SynthStep', {
        input: CodePipelineSource.gitHub('dangtrinhhh/learn-cdk', 'main', {
          authentication: githubToken
        }),
        commands: [
          'npm ci',
          'npm run build',
          'npx cdk synth'
        ],
        primaryOutputDirectory: 'cdk.out'
      })
    });
  }
}
