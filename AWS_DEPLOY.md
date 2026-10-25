# AWS deployment (free tier)

```
Browser -> CloudFront (HTTPS) -+-> S3 (private, OAC)           built Vite site (dist/)
                               +-> /api/* -> API Gateway -> Lambda -> DynamoDB
GitHub Actions (OIDC): test -> npm build -> S3 sync -> CloudFront invalidation
```

## One-time setup
1. Install the AWS CLI and Terraform, then run `aws configure` with an IAM user (not root).
2. Create the infrastructure:
   ```bash
   cd infra
   cp terraform.tfvars.example terraform.tfvars   # put your email in it
   terraform fmt
   terraform init
   terraform apply
   ```
   If it says the OIDC provider already exists, add `create_oidc_provider = false` to terraform.tfvars and re-run.
3. First upload:
   ```bash
   cd ..
   npm ci && npm run build
   aws s3 sync dist s3://$(terraform -chdir=infra output -raw bucket_name) --delete
   ```
   Open `terraform -chdir=infra output site_url`.
4. GitHub repo > Settings > Secrets and variables > Actions > Variables. Add:
   - `AWS_ROLE_ARN` = output `github_role_arn`
   - `BUCKET_NAME` = output `bucket_name`
   - `DISTRIBUTION_ID` = output `distribution_id`

Every push to `main` now tests, builds and deploys.

## Show the counter
In your footer component: `import VisitorCounter from "./components/VisitorCounter";` then add `<VisitorCounter />`.
It only appears on the CloudFront URL. On Vercel it silently hides.

## Tear down
`cd infra && terraform destroy`
