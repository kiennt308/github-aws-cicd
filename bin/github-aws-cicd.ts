#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { GithubAwsCicdStack } from '../lib/github-aws-cicd-stack';

const app = new cdk.App();
new GithubAwsCicdStack(app, 'GithubAwsCicdStack', {
  env: { account: '767397656228', region: 'ap-southeast-1' }
});